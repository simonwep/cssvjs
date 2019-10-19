const delimeted = require('../tools/delimeted');
const or = require('../tools/or');
const fn = require('../tools/function');

module.exports = fn('min-max-clamp', ['min', 'max', 'clamp'], (stream, name) => {
    let parameters = null;

    const expression = or(
        require('./length'),
        require('./frequency'),
        require('./angle'),
        require('./time'),
        require('./percentage'),
        require('./number'),
        require('./integer'),
        require('./attr'),
        require('./calc'),
        require('./min-max-clamp')
    );

    switch (name) {
        case 'min':
        case 'max': {
            parameters = delimeted(stream, expression);
            break;
        }
        case 'clamp': {
            parameters = delimeted(stream, expression, 3, true);
        }
    }

    return parameters && parameters.length ? parameters : null;
});
