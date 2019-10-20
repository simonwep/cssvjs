const identifier = require('../tools/identifier');
const sequence = require('../tools/sequence');
const optional = require('../tools/optional');
const fn = require('../tools/function');

module.exports = fn('variable', ['var'], stream => {

    // Variable needs to start with two hyphens
    if (!sequence(stream, ['punc', '-'], ['punc', '-'])) {
        return null;
    }

    // Parse variable name
    const name = identifier(stream);
    if (!name) {
        return null;
    }

    let fallback = null;
    if (optional(stream, 'punc', ',')) {
        fallback = require('../').find(stream, true);

        if (!fallback) {
            return null;
        }
    }

    return {
        name: `--${name}`,
        fallback
    };
});
