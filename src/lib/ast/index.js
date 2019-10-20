const types = require('./css');

/**
 * Returns the first matching type
 * @param stream token-stream
 * @param returnOnFirstMatch if true the
 * @returns {null|*}
 */
module.exports.find = (stream, returnOnFirstMatch = false) => {
    for (const {parse} of types) {
        stream.stash();

        const parsed = parse(stream);
        if (parsed && (returnOnFirstMatch || !stream.hasNext())) {
            stream.recycle();
            return parsed;
        }

        stream.pop();
    }

    return null;
};

/**
 * Matches a specific type
 * @param stream token-stream
 * @param type CSS target-type
 * @returns {null}
 */
module.exports.strict = (stream, type) => {
    const ta = types.find(v => v.type === type);

    if (ta) {
        const value = ta.parse(stream);
        return !stream.hasNext() ? value : null;
    }

    throw `Cannot resolve ${type}`;
};
