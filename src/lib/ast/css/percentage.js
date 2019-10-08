const sequence = require('../tools/sequence');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => {
    const seq = sequence(stream, 'num', ['punc', '%']);

    if (!seq) {
        return null;
    }

    return {
        type: 'percentage',
        value: seq[0].value
    };
});
