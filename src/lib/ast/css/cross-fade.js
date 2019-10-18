const delimeted = require('../tools/delimeted');
const fn = require('../tools/function');
const percentage = require('./percentage');
const color = require('./color');
const url = require('./url');

module.exports = fn('cross-fade', ['cross-fade'], stream => {
    const parameters = delimeted(stream, () => {
        let u, a;

        if ((u = url(stream))) {
            a = percentage(stream);
        } else if ((a = percentage(stream))) {
            u = url(stream);
        }

        if (!u) {
            return null;
        }

        return {amount: a, url: u};
    });

    let finalImage = color(stream);
    if (!finalImage && parameters.length && parameters[parameters.length - 1].amount === null) {
        finalImage = parameters.splice(-1)[0].url;
    }

    return parameters.length ? {
        parameters,
        finalImage
    } : null;
});
