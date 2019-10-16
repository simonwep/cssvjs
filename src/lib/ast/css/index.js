const types = [
    require('./gradient'),
    require('./transform-function'),
    require('./filter-function'),
    require('./timing-function'),
    require('./element'),
    require('./calc'),
    require('./basic-shape'),
    require('./blend-mode'),
    require('./flex-value'),
    require('./string'),
    require('./shape'),
    require('./inheritance-keyword'),
    require('./var'),
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


