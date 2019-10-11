const optional = require('../tools/optional');
const maybe = require('../tools/maybe');

module.exports = maybe((stream, type, ...units) => {
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
});
