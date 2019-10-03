const check = require('./check');

module.exports = (stream, type, ...vals) => {
    const next = stream.next();

    if (!check(next, type, ...vals)) {
        const strVals = vals.map(v => `"${v}"`).join(', ') || 'any';
        throw `Expected ${strVals} (${type}) but got "${next.value}" (${next.type})`;
    }

    return next;
};
