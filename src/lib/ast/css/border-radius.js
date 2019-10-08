const optional = require('../tools/optional');
const maybe = require('../tools/maybe');
const percentage = require('./percentage');
const length = require('./length');

function normalizeRadiusArray(arr) {
    switch (arr.length) {
        case 1: {
            const [a] = arr;
            return [a, a, a, a];
        }
        case 2:
            return [...arr, ...arr];
        case 3:
            return [...arr, arr[1]];
        default:
            return arr;
    }
}

module.exports = maybe(stream => {
    const percentOrLength = () => percentage(stream) || length(stream);
    const consumeSide = () => {
        const arr = [];
        for (let i = 0; i < 4; i++) {
            const next = percentOrLength();

            if (next) {
                arr.push(next);
            } else {
                break;
            }
        }

        return normalizeRadiusArray(arr);
    };

    const left = consumeSide();
    let right = null;

    if (!left.length) {
        return null;
    }

    if (optional(stream, 'punc', '/')) {
        right = consumeSide();

        if (!right.length) {
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
