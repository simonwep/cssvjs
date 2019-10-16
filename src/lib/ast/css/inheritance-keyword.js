const optional = require('../tools/optional');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => {
    const kw = optional(stream, 'kw', 'inherit', 'initial', 'unset', 'revert');
    return kw ? {
        type: 'inheritance-keyword',
        value: kw.value
    } : null;
});
