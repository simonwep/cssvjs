const isHexChar = c => (c >= '0' && c <= '9') || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F');
module.exports = stream => {
    let value = '';

    while (stream.hasNext()) {
        const peek = stream.peek();
        stream.next();

        if (peek.type === 'kw' || isHexChar(peek.value)) {
            value += peek.value;

            if (value.length >= 8) {
                break;
            }
        } else {
            break;
        }
    }

    const valLength = value.length;
    const alphaValue = valLength === 4 || valLength === 8;

    // Validate length
    if (valLength !== 3 && valLength !== 6 && !alphaValue) {
        return null;
    }

    // Validate character-set
    for (const ch of value) {
        if (!isHexChar(ch)) {
            return null;
        }
    }

    return {
        type: 'color',
        format: alphaValue ? 'hexa' : 'hex',
        value
    };
};
