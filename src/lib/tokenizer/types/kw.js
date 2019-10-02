const {isNonWhitespace} = require('../tools/is');
const consume = require('../tools/consumeWhile');

module.exports = stream => {
    const str = consume(stream, isNonWhitespace);

    return str ? {
        type: 'kw',
        value: str
    } : null;
};
