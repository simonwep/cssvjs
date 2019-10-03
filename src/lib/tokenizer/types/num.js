const {isNumeric} = require('../tools/is');

module.exports = stream => {
    let peek = stream.peek();

    if (!isNumeric(peek) && peek !== '-' && peek !== '.') {
        return null;
    }

    let number = '';
    let numeric = false;
    let decimal = false;

    // Check if number is negative
    stream.stash();
    const negative = (peek === '-' ? stream.next() : null);

    // Expect the next character to be either a number or a dot (indicator for decimal)
    peek = stream.peek();
    if (!stream.hasNext() || (negative && !isNumeric(peek) && peek !== '.')) {
        stream.pop();
        return null;
    }

    while (stream.hasNext()) {
        const ch = stream.peek();

        if (ch === '.') {
            numeric = false;

            // There can be only one decimal place
            if (decimal) {
                throw 'Number cannot contain more than one decimal place.';
            } else {
                number += ch;
                decimal = true;
            }

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
        throw 'Number cannot end with a dot.';
    }

    const parsed = Number(number);
    return {
        type: 'num',
        value: negative ? -parsed : parsed
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
