const {isPunctuation} = require('../tools/is');

module.exports = stream => {

    // Check if next character is a punctuation
    if (isPunctuation(stream.peek())) {
        return {
            type: 'punc',
            value: stream.next()
        };
    }

    return null;
};
