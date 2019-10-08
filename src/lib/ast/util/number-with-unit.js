const optional = require('../tools/optional');

module.exports = (stream, type, ...units) => {
    const num = optional(stream, 'num');

    if (num) {
        const unit = optional(stream, 'kw', ...units);

        if (unit) {
            return {
                type,
                unit: unit.value,
                value: num.value
            };
        }
    }

    return null;
};
