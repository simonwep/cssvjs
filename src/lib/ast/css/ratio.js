const sequence = require('../tools/sequence');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => {
    const seq = sequence(stream, 'num', ['punc', '/'], 'num');

    if (!seq) {
        return null;
    }

    const [a, , b] = seq;
    const av = a.value;
    const bv = b.value;

    // Both number need to be positive integers
    if (!(av % 1) && !(bv % 1) && av > 0 && bv > 0) {
        return {
            type: 'ratio',
            x: a.value,
            y: b.value
        };
    }

    return null;
});
