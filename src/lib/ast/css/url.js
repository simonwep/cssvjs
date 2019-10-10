const optional = require('../tools/optional');
const maybe = require('../tools/maybe');
const string = require('./string');

module.exports = maybe(stream => {
    const entry = optional(stream, 'kw', 'url');

    // An URL needs to be followed by a open bracket
    if (!entry || !optional(stream, 'punc', '(')) {
        return null;
    }

    // Check if URL is quotated or in plain text
    const qurl = string(stream);

    if (qurl) {
        if (!optional(stream, 'punc', ')')) {
            return null;
        }

        return {
            type: 'url',
            format: 'quotated',
            value: qurl
        };
    }

    // Read all characters until the next closing bracket
    let url = '';

    while (stream.hasNext()) {
        const {value} = stream.peek();

        if (value === ')') {
            stream.next();
            return {
                type: 'url',
                format: 'plain',
                value: url
            };
        }

        url += value;
        stream.next();
    }

    return null;
});
