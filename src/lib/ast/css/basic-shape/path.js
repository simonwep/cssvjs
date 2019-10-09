const optional = require('../../tools/optional');
const string = require('../string');

module.exports = stream => {
    const fillRule = optional(stream, 'kw', 'nonzero', 'evenodd');

    // fill-rule needs to be followed by a comma
    if (fillRule && !optional(stream, 'punc', ',')) {
        return null;
    }

    const path = string(stream);
    if (!path) {
        return null;
    }

    return {
        type: 'path',
        fillRule: fillRule ? fillRule.value : null,
        path: path.value
    };
};
