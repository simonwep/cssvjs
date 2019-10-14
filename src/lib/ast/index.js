const createStream = require('./stream');
const declarationValue = require('./css');

module.exports = tokens => declarationValue(
    createStream(tokens),
    false
);

