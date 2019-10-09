const optional = require('../tools/optional');

module.exports = (stream, ...sequence) => {
    const values = [];

    for (const part of sequence) {
        const next = Array.isArray(part) ?
            optional(stream, part[0], ...part.slice(1)) :
            optional(stream, part);

        if (next) {
            values.push(next);
        } else {
            return null;
        }
    }

    return values;
};
