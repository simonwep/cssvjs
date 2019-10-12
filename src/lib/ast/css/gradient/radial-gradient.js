const lengthPercentage = require('../../combies/length-percentage');
const colorStopList = require('./color-stop-list');
const sequence = require('../../tools/sequence');
const optional = require('../../tools/optional');
const match = require('../../tools/match');
const position = require('../position');

module.exports = stream => {
    let modifier = sequence(stream, ['kw', 'circle', 'ellipse']) ||
        match(stream, 'closest-side', 'closest-corner', 'farthest-side', 'farthest-corner');

    if (!modifier) {
        modifier = lengthPercentage(stream);

        const next = lengthPercentage(stream);
        if (modifier && next) {
            modifier = [modifier, next];
        }
    }

    let pos = null;
    if (optional(stream, 'kw', 'at')) {
        pos = position(stream);
    }

    if ((pos || modifier) && !optional(stream, 'punc', ',')) {
        return null;
    }

    const stops = colorStopList(stream);
    if (!stops) {
        return null;
    }

    return {
        type: 'radial',
        modifier: modifier ? modifier : null,
        position: pos,
        stops
    };
};
