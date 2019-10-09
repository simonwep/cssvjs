const createStream = require('./stream');

const parser = [
    require('./types/ws'),
    require('./types/str'),
    require('./types/num'),
    require('./types/kw'),
    require('./types/punc')
];

module.exports = str => {
    const stream = createStream(str);
    const tokens = [];

    /* eslint-disable no-labels */
    outer: while (stream.hasNext()) {

        // Find matching parser
        for (const parse of parser) {
            const parsed = parse(stream);

            if (parsed) {
                tokens.push(parsed);
                continue outer;
            }
        }

        return [];
    }

    return tokens;
};



