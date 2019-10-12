const optional = require('../tools/optional');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => {
    const str = optional(stream, 'str');
    return str ? {
        type: 'string',
        value: str.value
    } : null;
});
