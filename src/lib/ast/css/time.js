const numberWithUnit = require('../util/numberWithUnit');

module.exports = stream => numberWithUnit(
    stream,
    'time',
    's', 'ms'
);
