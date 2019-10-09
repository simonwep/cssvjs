const isHexChar = c => (c >= '0' && c <= '9') || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F');
module.exports = stream => {
    let hex = '';

    while (stream.hasNext(true)) {
        const node = stream.peek(true);

        if (node.type === 'ws') {
            break;
        } else {
            const {type, value} = node;

            if (type === 'kw' || type === 'num') {
                hex += value;

                if (value.length >= 8) {
                    break;
                }
            } else {
                break;
            }
        }

        stream.next(true);
    }

    const valLength = hex.length;
    const alphaValue = valLength === 4 || valLength === 8;

    // Validate length
    if (valLength !== 3 && valLength !== 6 && !alphaValue) {
        return null;
    }

    // Validate character-set
    for (const ch of hex) {
        if (!isHexChar(ch)) {
            return null;
        }
    }

    return {
        type: 'color',
        format: alphaValue ? 'hexa' : 'hex',
        value: hex
    };
};
