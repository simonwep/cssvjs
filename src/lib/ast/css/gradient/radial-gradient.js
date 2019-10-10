const lengthPercentage = require('../../combies/length-percentage');
const colorStopList = require('./color-stop-list');
const sequence = require('../../tools/sequence');
const optional = require('../../tools/optional');
const position = require('../position');

module.exports = stream => {
    let modifier = sequence(stream, ['kw', 'circle', 'ellipse']);

    if (!modifier) {

        // TODO: Simplify sequence parsing!
        modifier = sequence(
            stream,
            ['kw', 'closest', 'farthest'],
            ['punc', '-'],
            ['kw', 'side', 'corner']
        );

        if (modifier) {
            modifier = modifier.map(v => v.value).join('');
        }
    }

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
