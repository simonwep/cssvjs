const optional = require('../tools/optional');

const hpos = ['left', 'right'];
const vpos = ['top', 'bottom'];

module.exports = stream => {
    stream.stash();
    const kw = optional(stream, 'kw', 'to');
    const a = optional(stream, 'kw', ...hpos, ...vpos);

    if (kw && a) {
        const b = optional(stream, 'kw', ...(hpos.includes(a.value) ? vpos : hpos));

        return {
            type: b ? 'corner' : 'side',
            value: b ? [kw, a, b] : [kw, a]
        };
    }

    stream.pop();
    return null;
};
