const optional = require('./optional');

module.exports = (stream, parser, limit, fixed = false) => {
    const values = [];

    do {
        const value = parser(stream);

        if (!value) {
            break;
        } else if (values.length + 1 > limit) {
            break;
        }

        values.push(value);
    } while (optional(stream, 'punc', ','));

    if (fixed && values.length !== limit) {
        return null;
    }

    return values;
};
