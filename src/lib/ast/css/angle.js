const optional = require('../tools/optional');

module.exports = stream => {
    stream.stash();
    const num = optional(stream, 'num');

    if (num) {
        const unit = optional(stream, 'kw', 'deg', 'rad', 'grad', 'turn');

        if (unit) {
            return {
                type: 'angle',
                unit: unit.value,
                value: num.value
            };
        }
    }

    stream.pop();
    return null;
};
