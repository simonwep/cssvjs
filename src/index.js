const tokenizer = require('./lib/tokenizer');
const ast = require('./lib/ast');

module.exports = {
    parse: str => ast(tokenizer(str)),
    tokenize: tokenizer,
    version: '0.0.0'
};
