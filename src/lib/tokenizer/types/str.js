const consumeEscaped = require('../tools/consume-escaped');

module.exports = stream => {
    for (const char of ['\'', '"']) {
        stream.stash();

        if (stream.peek() === char) {
            stream.next();

            const value = consumeEscaped(stream, char);
            if (value !== null) {
                return {
                    type: 'str',
                    value
                };
            }
        }

        stream.pop();
    }

    return null;
};
