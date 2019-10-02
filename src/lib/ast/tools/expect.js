const check = require('./check');

module.exports = (stream, type, ...vals) => {
    const next = stream.next();

    if (!check(next, type, ...vals)) {
        throw `Expected ${type} but got ${next.type}`;
    }

    return next;
};
