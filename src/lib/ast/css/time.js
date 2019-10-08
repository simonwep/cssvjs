const numberWithUnit = require('../util/number-with-unit');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => numberWithUnit(
    stream,
    'time',
    's', 'ms'
));
