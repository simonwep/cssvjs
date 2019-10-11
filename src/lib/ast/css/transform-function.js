const delimeted = require('../tools/delimeted');
const fn = require('../tools/function');
const number = require('./number');
const length = require('./length');
const angle = require('./angle');

const functions = [
    'matrix', 'matrix3d', 'perspective', 'rotate', 'rotate3d', 'rotatex', 'rotatey', 'rotatez', 'scale', 'scale3d',
    'scalex', 'scaley', 'scalez', 'skew', 'skewx', 'skewy', 'translate', 'translate3d', 'translatex', 'translatey', 'translatez'
];

module.exports = fn('transform-function', functions, (stream, name) => {
    switch (name) {

        // Single values
        case 'skewx':
        case 'skewy':
        case 'rotate':
        case 'rotatex':
        case 'rotatey':
        case 'rotatez': {
            return angle(stream);
        }

        case 'scalex':
        case 'scaley':
        case 'scalez': {
            return number(stream);
        }

        case 'translatex':
        case 'translatey':
        case 'translatez': {
            return length(stream);
        }

        // Double values
        case 'translate': {
            return delimeted(stream, length, 2);
        }

        case 'scale': {
            return delimeted(stream, number, 2);
        }

        case 'skew': {
            return delimeted(stream, angle, 2);
        }

        // Triple values
        case 'translate3d': {
            return delimeted(stream, length, 3);
        }

        case 'scale3d': {
            return delimeted(stream, number, 3);
        }

        case 'rotate3d': {
            return delimeted(stream, angle, 3);
        }

        case 'perspective': {
            return length(stream);
        }

        case 'matrix': {
            return delimeted(stream, number, 6, true);
        }

        case 'matrix3d': {
            return delimeted(stream, number, 16, true);
        }
    }
});
