module.exports = (stream, consumer, sequence, map = v => v) => {
    const result = [];
    stream.stash();

    for (const type of sequence) {
        let res = consumer(stream, type);

        if (!res) {
            stream.pop();
            return result;
        }

        res = map(res);
        if (res) {
            result.push(res);
        }
    }

    return result;
};
