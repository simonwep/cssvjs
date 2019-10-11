const optional = require('../../tools/optional.js');
const check = require('../../tools/check.js');
const color = require('../color/index');
const angle = require('../angle');

module.exports = stream => {
    const colors = [];

    while (true) {
        const c = color(stream);
        const a1 = angle(stream);
        const a2 = a1 && angle(stream);

        colors.push({
            type: 'color-stop',
            color: c,
            range: a1 || a2 ? (a1 && a2 ? [a1, a2] : [a1]) : null
        });

        if (check(stream, 'punc', ')')) {
            break;
        } else if (!optional(stream, 'punc', ',')) {
            return null;
        }
    }

    // At least two colors need to be specified
    if (colors.length < 2){
        return null;
    }

    return colors;
};
