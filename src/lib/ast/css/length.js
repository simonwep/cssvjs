const numberWithUnit = require('../util/number-with-unit');
const maybe = require('../tools/maybe');
const optional = require('../tools/optional');

module.exports = maybe(stream => {
    const nu = numberWithUnit(
        stream,
        'length',
        'cap', 'ch', 'em', 'ex', 'ic', 'lh', 'rem', 'rlh', 'vh', 'vw', 'vi', 'vb', 'vmin', 'vmax', 'px', 'cm', 'mm', 'q', 'in', 'pc', 'pt', 'mozmm'
    );


    if (nu) {
        return nu;
    }

    const zero = optional(stream, 'num', 0);
    return zero ? {
        type: 'length',
        unit: null,
        value: 0
    } : null;
});

