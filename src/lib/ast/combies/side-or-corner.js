const optional = require('../tools/optional');
const maybe = require('../tools/maybe');

const hpos = ['left', 'right'];
const vpos = ['top', 'bottom'];

module.exports = maybe(stream => {
    const a = optional(stream, 'kw', ...hpos, ...vpos);

    if (a) {
        const b = optional(stream, 'kw', ...(hpos.includes(a.value) ? vpos : hpos));

        return {
            type: b ? 'corner' : 'side',
            value: b ? [a, b] : [a]
        };
    }

    return null;
});
