const shapeRadius = require('../../combies/shape-radius');
const optional = require('../../tools/optional');
const position = require('../position.js');

module.exports = stream => {
    const sr = shapeRadius(stream);

    if (!sr) {
        return null;
    }

    let pos = null;
    if (optional(stream, 'kw', 'at')) {
        pos = position(stream);

        if (!pos) {
            return null;
        }
    }

    return {
        type: 'circle',
        radius: sr,
        position: pos
    };
};
