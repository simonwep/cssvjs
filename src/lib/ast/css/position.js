const optional = require('../tools/optional');
const maybe = require('../tools/maybe');
const percentage = require('./percentage');
const length = require('./length');

const vpos = ['bottom', 'top'];
const hpos = ['left', 'right'];

module.exports = maybe(stream => {
    const a = length(stream) ||
        percentage(stream) ||
        optional(stream, 'kw', ...[...vpos, ...hpos, 'center']);

    if (!a) {
        return null;
    }

    const secondkw = [...(hpos.includes(a.value) ? vpos : hpos), 'center'];
    const b = length(stream) ||
        percentage(stream) ||
        optional(stream, 'kw', ...secondkw);

    if (!b) {

        // Single value
        return {
            type: 'position',
            value: [a]
        };
    }

    const c = optional(stream, 'kw', ...secondkw);
    if (!c) {

        // Double value
        return {
            type: 'position',
            value: [a, b]
        };
    }

    const d = length(stream) || percentage(stream);
    if (!d) {
        return null;
    }

    // Quadruple
    return {
        type: 'position',
        value: [a, b, c, d]
    };
});
