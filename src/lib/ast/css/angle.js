const numberWithUnit = require('../util/numberWithUnit');

module.exports = stream => numberWithUnit(
    stream,
    'angle',
    'deg', 'rad', 'grad', 'turn'
);