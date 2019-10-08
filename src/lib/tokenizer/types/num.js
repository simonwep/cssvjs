const {isNumeric} = require('../tools/is');

module.exports = stream => {
    let peek = stream.peek();
    const hasPrefix = peek === '-' || peek === '+';

    if (!isNumeric(peek) && peek !== '.' && !hasPrefix) {
        return null;
    }

    let number = '';
    let numeric = false;
    let decimal = false;
    let negative = false;

    // Check if number is negative
    stream.stash();
    if (hasPrefix) {
        negative = peek === '-';

        // Skip peeked valued and read next
        peek = stream.next() && stream.peek();
    }

    // Expect the next character to be either a number or a dot (indicator for decimal)
    if (!peek || !stream.hasNext() || (peek !== '.' && !isNumeric(peek))) {
        stream.pop();
        return null;
    }

    while (stream.hasNext()) {
        const ch = stream.peek();

        if (ch === '.') {
            numeric = false;

            // There can be only one decimal place
            if (decimal) {
                stream.pop();
                return null;
            } 
                number += ch;
                decimal = true;
            

        } else if (isNumeric(ch)) {
            numeric = true;
            number += ch;
        } else if (numeric && ch === 'e') {
            stream.stash();

            const sn = parseScientificNotation(stream);
            if (sn !== null) {
                number += ch + sn;
                break;
            } else {
                stream.pop();
                break;
            }

        } else {
            break;
        }

        stream.next();
    }

    if (number.endsWith('.')) {
        stream.pop();
        return null;
    }

    const parsed = Number(number);
    return {
        decimal,
        type: 'num',
        value: parsed === 0 ? 0 : (negative ? -parsed : parsed)
    };
};


function parseScientificNotation(stream) {
    let prefixUsed = false;
    let numeric = false;
    let notation = '';
    stream.next();

    while (stream.hasNext()) {
        const ch = stream.peek();

        if (isNumeric(ch)) {
            notation += ch;
            numeric = true;
        } else if (ch === '+' || ch === '-') {

            // +/- can only be used at the very beginning
            if (prefixUsed) {
                return null;
            }

            notation += ch;
        } else if (numeric) {
            break;
        } else {
            return null;
        }

        prefixUsed = true;
        stream.next();
    }

    return notation;
}
