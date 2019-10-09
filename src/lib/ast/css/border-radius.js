const expandAbbreviatedValus = require('../util/expand-abbreviated-values');
const lengthPercentage = require('../combies/length-percentage');
const optional = require('../tools/optional');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => {
    const consumeSide = () => {
        const arr = [];
        for (let i = 0; i < 4; i++) {
            const next = lengthPercentage(stream);

            if (next) {
                arr.push(next);
            } else {
                break;
            }
        }

        return expandAbbreviatedValus(arr);
    };

    const left = consumeSide();
    let right = null;

    if (!left) {
        return null;
    }

    if (optional(stream, 'punc', '/')) {
        right = consumeSide();

        if (!right) {
            return null;
        }
    } else {
        right = left;
    }

    return {
        type: 'border-radius',
        topLeftRadius: [left[0], right[0]],
        topRightRadius: [left[1], right[1]],
        bottomLeftRadius: [left[2], right[2]],
        bottomRightRadius: [left[3], right[3]]
    };
});
