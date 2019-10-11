const optional = require('./optional');
const maybe = require('./maybe');

module.exports = (type, names, body) => maybe(stream => {

    // Function-names can contain the "-" character
    let name = '';
    while (stream.hasNext()) {
        const {type, value} = stream.peek();

        if (type === 'kw' || value === '-') {
            name += value;
            stream.next();
        } else {
            break;
        }
    }

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
