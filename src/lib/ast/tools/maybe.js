module.exports = fn => (stream, ...args) => {
    stream.stash();

    const result = fn(stream, ...args);
    if (result) {
        return result;
    }

    stream.pop();
    return null;
};
