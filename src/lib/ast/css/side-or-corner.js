const optional = require('../tools/optional');
const maybe = require('../tools/maybe');

const hpos = ['left', 'right'];
const vpos = ['top', 'bottom'];

module.exports = maybe(stream => {
    const kw = optional(stream, 'kw', 'to');
    const a = optional(stream, 'kw', ...hpos, ...vpos);

    if (kw && a) {
        const b = optional(stream, 'kw', ...(hpos.includes(a.value) ? vpos : hpos));

        if (b || !stream.hasNext()) {
            return {
                type: b ? 'corner' : 'side',
                value: b ? [kw, a, b] : [kw, a]
            };
        }
    }

    return null;
});
