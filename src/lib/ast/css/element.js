const optional = require('../tools/optional');
const check = require('../tools/check');
const fn = require('../tools/function');

module.exports = fn('element', ['element'], stream => {

    // ID Needs to start with a hashtag
    if (!optional(stream, 'punc', '#')) {
        return null;
    }

    // An ID cannot start with a hypen or number
    if (check(stream, 'punc', '-') || check(stream, 'num')) {
        return null;
    }

    let next = '';
    while (stream.hasNext(true)) {
        const {type, value} = stream.peek(true);

        if (value === ')') {
            break;
        }

        if (type === 'ws' ||
            type === 'punc' && (value !== '_' && value !== '-')) {
            return null;
        }

        next += value;
        stream.next();
    }

    return next.length ? {
        id: `#${next}`
    } : null;
});
