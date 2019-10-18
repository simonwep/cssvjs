const delimeted = require('../tools/delimeted');
const fn = require('../tools/function');
const resolution = require('./resolution');
const string = require('./string');

module.exports = fn('image-set', ['image-set'], stream => {
    const options = delimeted(stream, () => {
        const img = string(stream);
        const res = resolution(stream);

        if (!img || !res) {
            return null;
        }

        return {img, res};
    });

    return options.length ? options : null;
});
