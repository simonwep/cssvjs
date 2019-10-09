const shapeRadius = require('../../combies/shape-radius');
const optional = require('../../tools/optional');
const position = require('../position.js');

module.exports = stream => {
    const ra = shapeRadius(stream);
    const rb = shapeRadius(stream);

    if (!ra || !rb) {
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
        type: 'ellipse',
        radius: [ra, rb],
        position: pos
    };
};
