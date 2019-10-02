const tokenizer = require('./lib/tokenizer');
const ast = require('./lib/ast');

module.exports = str => ast(tokenizer(str));
