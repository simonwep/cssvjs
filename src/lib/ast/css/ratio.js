const optional = require('../tools/optional');
const consume = require('../tools/consume');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => {
    const [a, div, b] = consume(
        stream,
        optional,
        ['num', 'punc', 'num']
    );

    if (a && div && b) {
        const av = a.value;
        const bv = b.value;

        // Both number need to be positive integers
        if (!(av % 1) && !(bv % 1) && av > 0 && bv > 0) {
            return {
                type: 'ratio',
                value: [a, div, b]
            };
        }
    }

    return null;
});
