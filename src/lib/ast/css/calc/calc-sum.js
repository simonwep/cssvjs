const optional = require('../../tools/optional');
const maybe = require('../../tools/maybe');
const calcProduct = require('./calc-product');

module.exports = maybe(stream => {
    const v1 = calcProduct(stream);
    if (!v1) {
        return null;
    }

    const result = {
        type: 'sum',
        leftHand: v1,
        rightHand: []
    };

    for (let op = null; (op = optional(stream, 'punc', '+', '-'));) {
        const v2 = calcProduct(stream);
        if (!v2) {
            return null;
        }

        result.rightHand.push({
            operator: op.value,
            value: v2
        });
    }

    // Walk tree and check for invalid combinations
    if (v1.type === 'number' && result.rightHand.every(v => v.value.type === 'number')) {
        return null;
    }

    return result;
});
