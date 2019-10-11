const lengthPercentage = require('../../combies/length-percentage');
const optional = require('../../tools/optional.js');
const check = require('../../tools/check.js');
const color = require('../color/index');

module.exports = stream => {
    const colors = [];

    while (true) {
        const c = color(stream);
        const la = lengthPercentage(stream);
        const lb = la && lengthPercentage(stream);

        if (!c) {
            return null;
        }

        colors.push({
            type: 'color-stop',
            color: c,
            range: la || lb ? (la && lb ? [la, lb] : [la]) : null
        });

        if (check(stream, 'punc', ')')) {
            break;
        } else if (!optional(stream, 'punc', ',')) {
            return null;
        }
    }

    // At least two colors need to be specified
    if (colors.length < 2) {
        return null;
    }

    return colors;
};
