const optional = require('./optional');
const maybe = require('./maybe');

module.exports = (type, names, body) => maybe(stream => {
    const fn = optional(stream, 'kw', ...names);

    // Function needs to be followed by a open bracket
    if (!fn || !optional(stream, 'punc', '(')) {
        return null;
    }

    // Parse body
    const name = fn.value;
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
