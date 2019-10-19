const optional = require('../tools/optional');
const fn = require('../tools/function');
const customIdent = require('./custom-ident');
const symbols = require('./symbols');
const string = require('./string');

module.exports = fn('counters', ['counters'], stream => {
    const ident = customIdent(stream);
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
