const optional = require('../tools/optional');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => {
    const num = optional(stream, 'num');

    if (num) {
        const unit = optional(stream, 'punc', '%');

        if (unit) {
            return {
                type: 'percentage',
                value: num.value
            };
        }
    }

    return null;
});
