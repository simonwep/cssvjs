const {isNumeric} = require('../tools/is');

module.exports = stream => {
    let peek = stream.peek();

    if (!isNumeric(peek) && peek !== '-' && peek !== '.') {
        return null;
    }

    let number = '';
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
            if (decimal) {
                throw 'Number cannot contain more than one decimal place.';
            } else {
                number += ch;
                decimal = true;
            }
        } else if (isNumeric(ch)) {
            number += ch;
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
