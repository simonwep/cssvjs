const numberWithUnit = require('../util/numberWithUnit');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => numberWithUnit(
    stream,
    'angle',
    'deg', 'rad', 'grad', 'turn'
));
