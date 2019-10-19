const optional = require('../../tools/optional');
const sequence = require('../../tools/sequence');
const maybe = require('../../tools/maybe');

const parser = {
    linear: require('./linear-gradient'),
    radial: require('./radial-gradient'),
    conic: require('./conic-gradient')
};

module.exports = maybe(stream => {
    const repeating = !!optional(stream, 'kw', 'repeating');
    if (repeating && !optional(stream, 'punc', '-')) {
        return null;
    }

    const seq = sequence(
        stream,
        ['kw', 'linear', 'radial', 'conic'],
        ['punc', '-'],
        ['kw', 'gradient'],
        ['punc', '(']
    );

    if (!seq) {
        return null;
    }

    const variant = seq[0].value;

    if (variant in parser) {
        const value = parser[variant](stream);

        if (!value || !optional(stream, 'punc', ')')) {
            return null;
        }

        return {
            type: 'gradient',
            repeating,
            variant,
            value
        };
    }

    return null;
});
