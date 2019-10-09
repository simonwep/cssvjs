const {isWhiteSpace} = require('../tools/is');
const consume = require('../tools/consume-while');

module.exports = stream => {
    const whiteSpace = consume(stream, isWhiteSpace);

    return whiteSpace.length ? {
        type: 'ws'
    } : null;
};
