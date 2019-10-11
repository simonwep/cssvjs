const numberPercentage = require('../combies/number-percentage');
const fn = require('../tools/function');
const length = require('./length');
const angle = require('./angle');
const color = require('./color');

const functions = [
    'blur', 'brightness', 'contrast', 'drop-shadow',
    'grayscale', 'hue-rotate', 'invert', 'opacity', 'saturate', 'sepia'
];

module.exports = fn('filter-function', functions, (stream, name) => {
    switch (name) {
        case 'drop-shadow': {
            const offsetX = length(stream);
            const offsetY = offsetX && length(stream);

            if (!offsetY) {
                return null;
            }

            // Optional parameters
            const blurRadius = length(stream);
            const spreadRadius = blurRadius && length(stream) || null;
            const c = color(stream) || null;
            return {
                offsetX,
                offsetY,
                blurRadius,
                spreadRadius,
                color: c
            };
        }
        case 'blur': {
            return length(stream);
        }
        case 'hue-rotate': {
            return angle(stream);
        }
        case 'brightness':
        case 'contrast':
        case 'sepia':
        case 'grayscale':
        case 'saturate':
        case 'opacity':
        case 'invert': {
            return numberPercentage(stream);
        }
    }
});
