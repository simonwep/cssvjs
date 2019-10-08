const inRange = require('../../../utils/in-range');
const optional = require('../../tools/optional');
const percentage = require('../percentage');
const alpha = require('./alpha');

/* eslint-disable callback-return */
module.exports = stream => {
    const r = percentage(stream) || optional(stream, 'num');

    if (!r) {
        return null;
    }

    const percentageSyntax = r.type === 'percentage';
    const commaSeperation = !!optional(stream, 'punc', ',');
    const next = () => percentageSyntax ?
        percentage(stream) :
        optional(stream, 'num');

    // Green value
    const g = next();

    if (!g || (commaSeperation && !optional(stream, 'punc', ','))) {
        return null;
    }

    // Blue value
    const b = next();
    if (!b) {
        return null;
    }

    // Validate range
    if (!inRange(0, 255, r.value, g.value, b.value)) {
        return null;
    }

    const a = alpha(stream, commaSeperation);
    if (a && !inRange(0, a.type === 'percentage' ? 100 : 1, a.value)) {
        return null;
    }

    return {
        type: 'color',
        format: a ? 'rgba' : 'rgb',
        value: a ? [r, g, b, a] : [r, g, b]
    };
};
