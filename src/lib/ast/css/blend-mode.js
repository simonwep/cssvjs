const match = require('../tools/match');
const maybe = require('../tools/maybe');

const blendModes = [
    'normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference',
    'exclusion', 'hue', 'saturation', 'color', 'luminosity'
];

module.exports = maybe(stream => {
    const matched = match(stream, ...blendModes);

    return matched ? {
        type: 'blend-mode',
        value: matched
    } : null;
});
