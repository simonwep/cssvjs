const optional = require('./optional');

module.exports = (stream, parser, limit, fixed = false) => {
    const values = [];

    do {
        const value = parser(stream);
        if (!value) {
            break;
        }

        values.push(value);
    } while (values.length < limit && optional(stream, 'punc', ','));

    if (fixed && values.length !== limit) {
        return null;
    }

    return values;
};
