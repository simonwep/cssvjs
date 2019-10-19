const numberPercentage = require('../combies/number-percentage');
const optional = require('../tools/optional');
const fn = require('../tools/function');
const length = require('./length');
const angle = require('./angle');
const color = require('./color');
const string = require('./string');
const customIdent = require('./custom-ident');
const symbols = require('./symbols');

module.exports = fn('counters', ['counters'], stream => {
    const ident = customIdent(stream)
    if (!ident || !optional(stream, 'punc', ',')) {
        return null;
    }

    const str = string(stream);
    let counterStyle = null;

    if (optional(stream, 'punc', ',')) {
        counterStyle = symbols(stream) || customIdent(stream);

        if (!counterStyle) {
            return null;
        }
    }

    return {
        ident,
        str,
        counterStyle
    };
});
