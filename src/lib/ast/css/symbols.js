const optional = require('../tools/optional');
const oneOf = require('../tools/one-of');
const fn = require('../tools/function');
const string = require('./string');

const image = oneOf(
    require('./url'),
    require('./gradient'),
    require('./element'),
    require('./cross-fade'),
    require('./image-set')
);

const symbolTypes = [
    'cyclic', 'numeric', 'alphabetic', 'symbolic', 'fixed'
];

module.exports = fn('symbols', ['symbols'], stream => {
    const symbolType = optional(stream, 'kw', ...symbolTypes);
    const symbols = [];

    while (stream.hasNext() && stream.peek().value !== ')') {
        const symbol = string(stream) || image(stream);

        if (symbol) {
            symbols.push(symbol);
        } else {
            return null;
        }
    }

    if (!symbols.length) {
        return null;
    }

    return {
        symbolType: symbolType ? symbolType.value : null,
        symbols
    };
});
