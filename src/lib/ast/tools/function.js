const optional = require('./optional');
const match = require('./match');
const maybe = require('./maybe');

module.exports = (type, names, body) => maybe(stream => {
    const name = match(stream, ...names);

    // Function needs to be followed by a open bracket
    if (!name || !optional(stream, 'punc', '(')) {
        return null;
    }

    // Parse body
    const value = body(stream, name);

    // Expect closing bracked and a result
    if (!value || !optional(stream, 'punc', ')')) {
        return null;
    }

    return {
        function: name,
        type,
        value
    };
});
