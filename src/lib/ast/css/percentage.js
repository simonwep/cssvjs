const optional = require('../tools/optional');

module.exports = stream => {
    stream.stash();
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

    stream.pop();
    return null;
};
