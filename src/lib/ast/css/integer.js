const optional = require('../tools/optional');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => {
    const num = optional(stream, 'num');

    if (num && !num.decimal) {
        return {
            type: 'integer',
            value: num.value
        };
    }

    return null;
});
