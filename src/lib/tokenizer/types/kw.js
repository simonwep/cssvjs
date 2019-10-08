const {isNonWhitespace} = require('../tools/is');
const consume = require('../tools/consume-while');

module.exports = stream => {
    const str = consume(stream, isNonWhitespace);

    return str ? {
        type: 'kw',
        value: str
    } : null;
};
