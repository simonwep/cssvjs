const sequence = require('../tools/sequence');
const optional = require('../tools/optional');
const maybe = require('../tools/maybe');

const blendModes = [
    'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
    'exclusion', 'hue', 'saturation', 'color', 'luminosity'
];

module.exports = maybe(stream => {
    const kw = optional(stream, 'kw');
    const seq = sequence(stream, ['punc', '-'], 'kw');

    if (kw) {
        const value = kw.value + (seq ? seq.map(v => v.value).join('') : '');

        if (blendModes.includes(value)) {
            return {
                type: 'blend-mode',
                value
            };
        }
    }

    return null;
});
