const tokenizer = require('./lib/tokenizer');
const createStream = require('./lib/ast/stream');
const {find, strict} = require('./lib/ast');

module.exports = {
    tokenize: tokenizer,
    version: '0.0.3',

    /**
     * Parses a single string
     * @param str
     * @param target optional target tpye
     * @returns {*}
     */
    parse(str, target = null) {
        const tokens = createStream(tokenizer(str));
        return target ? strict(tokens) : find(tokens);
    }
};
