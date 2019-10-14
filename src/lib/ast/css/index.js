const types = [
    require('./transform-function'),
    require('./filter-function'),
    require('./timing-function'),
    require('./basic-shape'),
    require('./blend-mode'),
    require('./flex-value'),
    require('./gradient'),
    require('./string'),
    require('./shape'),
    require('./url'),
    require('./color'),
    require('./percentage'),
    require('./resolution'),
    require('./length'),
    require('./time'),
    require('./ratio'),
    require('./angle'),
    require('./position'),
    require('./border-radius'),
    require('./integer'),
    require('./number')
];

/**
 * @param stream Token-stream
 * @param returnOnFirstMatch If true the
 * @returns {null|*}
 */
module.exports = (stream, returnOnFirstMatch = true) => {
    for (const parser of types) {
        stream.stash();

        const parsed = parser(stream);
        if (parsed && (returnOnFirstMatch || !stream.hasNext())) {
            stream.recycle();
            return parsed;
        }

        stream.pop();
    }

    return null;
};


