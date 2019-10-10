const optional = require('../../tools/optional');
const sequence = require('../../tools/sequence');
const maybe = require('../../tools/maybe');

const parser = {
    linear: require('./linear-gradient'),
    radial: require('./radial-gradient'),
    conic: require('./conic-gradient')
};

module.exports = maybe(stream => {
    const rep = optional(stream, 'kw', 'repeating');
    if (rep && !optional(stream, 'punc', '-')) {
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

    const type = seq[0].value;

    if (type in parser) {
        const value = parser[type](stream);

        if (!value || !optional(stream, 'punc', ')')) {
            return null;
        }

        return {
            type: `${(rep && `${rep.value}-` || '') + type}-gradient`,
            value
        };
    }

    return null;
});
