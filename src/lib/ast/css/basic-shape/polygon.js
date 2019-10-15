const lengthPercentage = require('../../combies/length-percentage');
const optional = require('../../tools/optional');
const check = require('../../tools/check');

module.exports = stream => {
    const fillRule = optional(stream, 'kw', 'nonzero', 'evenodd');

    // Fill-rule needs to be followed by a comma
    if (fillRule && !optional(stream, 'punc', ',')) {
        return null;
    }

    // Parse points
    const points = [];
    while (true) {
        const a = lengthPercentage(stream);
        const b = lengthPercentage(stream);

        if (a && b) {
            points.push([a, b]);
        } else if (a || b) {
            return null;
        }

        if (check(stream, 'punc', ')')) {
            break;
        } else if (!optional(stream, 'punc', ',')) {
            // Points are seperated by a comma
            return null;
        }
    }

    return {
        type: 'polygon',
        fillRule: fillRule ? fillRule.value : null,
        points
    };
};
