const sequence = require('../tools/sequence');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => {
    const seq = sequence(stream, 'num', ['punc', '%']);
    return seq ? {
        type: 'percentage',
        value: seq[0].value
    } : seq;
});
