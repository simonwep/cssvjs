const optional = require('./optional');

module.exports = (stream, parser, limit = null, fixed = false) => {
    const values = [];

    do {
        const value = parser(stream);

        if (!value) {
            break;
        }

        values.push(value);
    } while (
        /* eslint-disable no-unmodified-loop-condition */
        (limit === null || values.length < limit) &&
        optional(stream, 'punc', ',')
    );

    if (limit !== null && fixed && values.length !== limit) {
        return null;
    }

    return values;
};
