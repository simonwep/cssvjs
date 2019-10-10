const sideOrCorner = require('../../combies/side-or-corner');
const angle = require('../angle');
const optional = require('../../tools/optional');
const colorStopList = require('./color-stop-list');

module.exports = stream => {
    let modifier = null;

    if (optional(stream, 'kw', 'to')) {
        modifier = sideOrCorner(stream);
    } else {
        modifier = angle(stream);
    }

    if (modifier && !optional(stream, 'punc', ',')) {
        return null;
    }

    const stops = colorStopList(stream);
    if (!stops) {
        return null;
    }

    return {
        type: 'linear',
        modifier,
        stops
    };
};
