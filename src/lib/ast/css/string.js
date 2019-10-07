const optional = require('../tools/optional');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => optional(stream, 'str'));
