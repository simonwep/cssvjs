const sequence = require('../tools/sequence');
const optional = require('../tools/optional');
const fn = require('../tools/function');

module.exports = fn('variable', ['var'], stream => {

    // Variable needs to start with two hyphens
    if (!sequence(stream, ['punc', '-'], ['punc', '-'])) {
        return null;
    }

    // Parse variable name
    let name = '';
    while (stream.hasNext(true)) {
        const {type, value} = stream.peek(true);

        if (type === 'kw' || (type === 'punc' && value === '-')) {
            name += value;
            stream.next(true);
        } else {
            break;
        }
    }

    if (!name.length) {
        return null;
    }

    let fallback = null;
    if (optional(stream, 'punc', ',')) {
        fallback = require('./')(stream);

        if (!fallback) {
            return null;
        }
    }

    return {
        name: `--${name}`,
        fallback
    };
});
