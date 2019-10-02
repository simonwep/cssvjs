const optional = require('../tools/optional');
const expect = require('../tools/expect');

const hpos = ['left', 'right'];
const vpos = ['top', 'bottom'];

module.exports = stream => {
    const kw = optional(stream, 'kw', 'to');

    if (kw) {
        const a = expect(stream, 'kw', ...hpos, ...vpos);
        const b = optional(stream, 'kw', ...(hpos.includes(a.value) ? vpos : hpos));

        return {
            type: b ? 'corner' : 'side',
            value: b ? [kw, a, b] : [kw, a]
        };
    }

    return null;
};
