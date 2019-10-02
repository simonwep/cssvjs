const optional = require('../tools/optional');

module.exports = stream => {
    stream.stash();

    const num = optional(stream, 'num');
    if (num) {
        const unit = optional(stream, 'kw', 'cap', 'ch', 'em', 'ex', 'ic', 'lh', 'rem', 'rlh', 'vh', 'vw', 'vi', 'vb', 'vmin', 'vmax', 'px', 'cm', 'mm', 'Q', 'in', 'pc', 'pt', 'mozmm');

        if (unit) {
            return {
                type: 'length',
                unit: unit.value,
                value: num.value
            };
        }
    }

    stream.pop();
    return null;
};
