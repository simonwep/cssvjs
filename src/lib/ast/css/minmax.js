const delimeted = require('../tools/delimeted');
const fn = require('../tools/function');
const match = require('../tools/match');
const oneOf = require('../tools/one-of');

module.exports = fn('minmax', ['minmax'], stream => {
    return delimeted(stream, oneOf(
        require('./flex-value'),
        require('./percentage'),
        require('./length'),
        stream => {
            const res = match(stream, 'min-content', 'max-content', 'auto');
            return res ? {
                type: 'keyword',
                value: res
            } : null;
        }
    ), 2, true);
});
