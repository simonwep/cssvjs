const {isWhiteSpace} = require('./tools/is');
const consume = require('./tools/consume');
const createStream = require('../stream');

const parser = [
    require('./types/num'),
    require('./types/kw'),
    require('./types/punc')
];

module.exports = str => {
    const stream = createStream(str);
    const tokens = [];

    /* eslint-disable no-labels */
    outer: while (stream.hasNext()) {

        // Ignore whitespace
        consume(stream, isWhiteSpace);

        // Find matching parser
        for (const parse of parser) {
            const parsed = parse(stream);

            if (parsed) {
                tokens.push(parsed);
                continue outer;
            }
        }

        throw `Unknown character: ${stream.peek()}`;
    }

    return tokens;
};



