const numberWithUnit = require('../util/numberWithUnit');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => numberWithUnit(
    stream,
    'length',
    'cap', 'ch', 'em', 'ex', 'ic', 'lh', 'rem', 'rlh', 'vh', 'vw', 'vi', 'vb', 'vmin', 'vmax', 'px', 'cm', 'mm', 'Q', 'in', 'pc', 'pt', 'mozmm'
));
