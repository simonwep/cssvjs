const expandAbbreviatedValus = require('../../util/expand-abbreviated-values');
const lengthPercentage = require('../../combies/length-percentage');
const borderRadius = require('../border-radius');
const optional = require('../../tools/optional');

module.exports = stream => {
    const values = [];

    for (let i = 0; i < 4; i++) {
        const value = lengthPercentage(stream);

        if (value) {
            values.push(value);
        } else {
            break;
        }
    }

    if (!values.length) {
        return null;
    }

    const [top, right, bottom, left] = expandAbbreviatedValus(values);
    const radius = optional(stream, 'kw', 'round') &&
        borderRadius(stream) || null;

    return {
        type: 'inset',
        top, right, bottom, left,
        radius
    };
};
