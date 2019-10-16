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

        if (type === 'kw' || type === 'punc') {
            if (value === ')') {
                break;
            } else {
                next += value;
                stream.next();
            }
        } else {
            return null;
        }
    }

    return next.length ? {
        id: `#${next}`
    } : null;
});
