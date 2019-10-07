const inRange = require('../../../utils/inRange');
const optional = require('../../tools/optional');
const percentage = require('../percentage');
const angle = require('../angle');
const alpha = require('./alpha');

module.exports = (stream, format) => {
    const hasAlphaValue = format === 'hsla';

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

    let a;
    if (hasAlphaValue && !(a = alpha(stream, commaSeperation))) {
        return null;
    }

    return {
        format,
        type: 'color',
        value: hasAlphaValue ? [h, s, l, a] : [h, s, l]
    };
};
