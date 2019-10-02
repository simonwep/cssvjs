module.exports = (stream, condition) => {
    let result = '';

    while (stream.hasNext() && condition(stream.peek())) {
        result += stream.next();
    }

    return result;
};
