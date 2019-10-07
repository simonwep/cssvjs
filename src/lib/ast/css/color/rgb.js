const inRange = require('../../../utils/inRange');
const optional = require('../../tools/optional');
const percentage = require('../percentage');

/* eslint-disable callback-return */
module.exports = (stream, format) => {
    const alpha = format === 'rgba';
    const r = percentage(stream) || optional(stream, 'num');
    if (!r) return null;

    const percentageSyntax = r.type === 'percentage';
    const commaSeperation = !!optional(stream, 'punc', ',');
    const next = () => percentageSyntax ?
        percentage(stream) :
        optional(stream, 'num');

    // Green value
    const g = next();
    if (!g) {
        return null;
    }

    if (commaSeperation && !optional(stream, 'punc', ',')) {
        return null;
    }

    // Blue value
    const b = next();
    if (!b) {
        return null;
    }

    // Validate range
    if (!inRange(0, 255, r.value, g.value, b.value)) {
        stream.pop();
        return null;
    }

    let a;
    if (alpha) {


        if (commaSeperation ? !optional(stream, 'punc', ',') : !optional(stream, 'punc', '/')) {
            return null;
        }

        // The alpha value can always be either a number or percentage value
        a = percentage(stream) || optional(stream, 'num');

        // Validate range and parsed value
        if (a === null || !inRange(0, a.type === 'percentage' ? 100 : 1, a.value)) {
            return null;
        }
    }

    return {
        type: 'color',
        format,
        value: alpha ? [r, g, b, a] : [r, g, b]
    };
};
