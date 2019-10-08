const optional = require('../tools/optional');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => {
    const num = optional(stream, 'num');
    return num ? {
        type: 'number',
        value: num.value
    } : null;
});
