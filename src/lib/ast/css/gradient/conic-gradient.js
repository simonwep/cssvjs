const angularColorStopList = require('./angular-color-stop-list');
const optional = require('../../tools/optional');
const position = require('../position');
const angle = require('../angle');

module.exports = stream => {
    let agl = null;
    let pos = null;

    if (optional(stream, 'kw', 'from')) {
        agl = angle(stream);
    }

    if (optional(stream, 'kw', 'at')) {
        pos = position(stream);
    }

    if ((agl || pos) && !optional(stream, 'punc', ',')) {
        return null;
    }

    const stops = angularColorStopList(stream);
    if (!stops) {
        return null;
    }

    return {
        type: 'conic',
        angle: agl,
        position: pos,
        stops
    };
};
