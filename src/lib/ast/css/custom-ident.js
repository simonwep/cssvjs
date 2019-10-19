const maybe = require('../tools/maybe');

module.exports = maybe(stream => {
    let ident = '';
    let escaped = false;

    while (stream.hasNext(true)) {
        const {type, value} = stream.peek(true);

        if (type === 'ws') {
            if (ident.length) {
                break;
            } else {
                stream.next(true);
                continue;
            }
        } else if (type === 'num' && (!ident.length || ident === '-')) {
            return null;
        } else if (type === 'punc') {
            if (value === '\\') {
                escaped = true;
            } else if (value === '-') {
                if (ident === '-') {
                    return null;
                }
            } else if (!escaped) {
                break;
            } else {
                ident = ident.slice(0, ident.length - 1);
                escaped = false;
            }
        }

        ident += value;
        stream.next(true);
    }

    return ident.length ? {
        type: 'custom-ident',
        value: ident
    } : null;
});
