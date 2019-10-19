const delimeted = require('../tools/delimeted');
const fn = require('../tools/function');
const match = require('../tools/match');
const or = require('../tools/or');

module.exports = fn('minmax', ['minmax'], stream => {
    return delimeted(stream, or(
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
