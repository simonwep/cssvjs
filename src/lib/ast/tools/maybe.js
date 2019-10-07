module.exports = fn => stream => {
    stream.stash();

    const result = fn(stream);
    if (result) {
        return result;
    }

    stream.pop();
    return null;
};
