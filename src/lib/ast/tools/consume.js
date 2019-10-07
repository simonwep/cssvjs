module.exports = (stream, consumer, sequence, map = v => v) => {
    const result = [];

    for (const type of sequence) {
        let res = consumer(stream, type);

        if (!res) {
            return result;
        }

        res = map(res);
        if (res) {
            result.push(res);
        }
    }

    return result;
};
