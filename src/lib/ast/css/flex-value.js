const sequence = require('../tools/sequence');
const maybe = require('../tools/maybe');

module.exports = maybe(stream => {
    const seq = sequence(stream, 'num', ['kw', 'fr']);

    if (!seq) {
        return null;
    }

    return {
        type: 'flex',
        value: seq[0].value
    };
});
