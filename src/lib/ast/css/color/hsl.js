const inRange = require('../../../utils/in-range');
const optional = require('../../tools/optional');
const percentage = require('../percentage');
const angle = require('../angle');
const alpha = require('./alpha');

module.exports = stream => {
    const h = percentage(stream) || angle(stream) || optional(stream, 'num');

    if (!h) {
        return null;
    }

    const commaSeperation = !!optional(stream, 'punc', ',');

    const s = percentage(stream);
    if (!s || (commaSeperation && !optional(stream, 'punc', ','))) {
        return null;
    }

    const l = percentage(stream);
    if (!l) {
        return null;
    }

    if (!inRange(0, 100, s.value, l.value)) {
        return null;
    }

    const a = alpha(stream, commaSeperation);
    if (a && !inRange(0, a.type === 'percentage' ? 100 : 1, a.value)) {
        return null;
    }

    return {
        type: 'color',
        format: a ? 'hsla' : 'hsl',
        value: a ? [h, s, l, a] : [h, s, l]
    };
};
