const delimeted = require('../tools/delimeted');
const optional = require('../tools/optional');
const maybe = require('../tools/maybe');
const number = require('./number');
const length = require('./length');
const angle = require('./angle');

const functions = [
    'matrix', 'matrix3d', 'perspective', 'rotate', 'rotate3d', 'rotatex', 'rotatey', 'rotatez', 'scale', 'scale3d',
    'scalex', 'scaley', 'scalez', 'skew', 'skewx', 'skewy', 'translate', 'translate3d', 'translatex', 'translatey', 'translatez'
];

module.exports = maybe(stream => {
    const fn = optional(stream, 'kw', ...functions);

    // Function needs to be followed by a open bracket
    if (!fn || !optional(stream, 'punc', '(')) {
        return null;
    }

    // Parse function
    let value = null;
    switch (fn.value) {

        // Single values
        case 'skewx':
        case 'skewy':
        case 'rotate':
        case 'rotatex':
        case 'rotatey':
        case 'rotatez': {
            value = angle(stream);
            break;
        }

        case 'scalex':
        case 'scaley':
        case 'scalez': {
            value = number(stream);
            break;
        }

        case 'translatex':
        case 'translatey':
        case 'translatez': {
            value = length(stream);
            break;
        }

        // Double values
        case 'translate': {
            value = delimeted(stream, length, 2);
            break;
        }

        case 'scale': {
            value = delimeted(stream, number, 2);
            break;
        }

        case 'skew': {
            value = delimeted(stream, angle, 2);
            break;
        }

        // Triple values
        case 'translate3d': {
            value = delimeted(stream, length, 3);
            break;
        }

        case 'scale3d': {
            value = delimeted(stream, number, 3);
            break;
        }

        case 'rotate3d': {
            value = delimeted(stream, angle, 3);
            break;
        }

        case 'perspective': {
            value = length(stream);
            break;
        }

        case 'matrix': {
            value = delimeted(stream, number, 6, true);
            break;
        }

        case 'matrix3d': {
            value = delimeted(stream, number, 16, true);
            break;
        }
    }

    if (!value || !optional(stream, 'punc', ')')) {
        return null;
    }

    return {
        type: 'transform-function',
        function: fn.value,
        value
    };
});
