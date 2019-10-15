const optional = require('../../tools/optional.js');
const calcValue = require('./calc-value');
const number = require('../number');

module.exports = stream => {
    const v1 = calcValue(stream);

    if (!v1) {
        return null;
    }

    const result = {
        type: 'product',
        leftHand: v1,
        rightHand: []
    };

    for (let op = null; (op = optional(stream, 'punc', '*', '/'));) {
        const v2 = op.value === '*' ? calcValue(stream) : number(stream);
        if (!v2 || (op.value === '/' && v2.value === 0)) {
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

    return result.rightHand.length ? result : v1;
};
