const identifier = require('../tools/identifier');
const optional = require('../tools/optional');
const check = require('../tools/check');
const fn = require('../tools/function');

module.exports = fn('environment-variable', ['env'], stream => {
    const name = identifier(stream);

    if (!name) {
        return null;
    }

    const values = [];
    if (optional(stream, 'punc', ',')) {
        const css = require('./');

        do {
            const value = css(stream, true);

            if (!value) {
                return null;
            }

            values.push(value);
            optional(stream, 'punc', ',');
        } while (!check(stream, 'punc', ')'));
    }

    return {name, values};
});
