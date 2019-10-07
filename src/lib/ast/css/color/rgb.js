const inRange = require('../../../utils/inRange');
const optional = require('../../tools/optional');
const percentage = require('../percentage');
const alpha = require('./alpha');

/* eslint-disable callback-return */
module.exports = (stream, format) => {
    const hasAlphaValue = format === 'rgba';
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

    let a;
    if (hasAlphaValue && !(a = alpha(stream, commaSeperation))) {
        return null;
    }

    return {
        format,
        type: 'color',
        value: hasAlphaValue ? [r, g, b, a] : [r, g, b]
    };
};
