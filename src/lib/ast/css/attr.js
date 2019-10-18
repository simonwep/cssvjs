const identifier = require('../tools/identifier');
const optional = require('../tools/optional');
const match = require('../tools/match');
const fn = require('../tools/function');


const typeAndUnits = [
    [
        ['string'], require('./string')
    ],
    [
        ['color'], require('./color')
    ],
    [
        ['url'], require('./url')
    ],
    [
        ['integer'], require('./integer')
    ],
    [
        ['number'], require('./number')
    ],
    [
        ['length', 'cap', 'ch', 'em', 'ex', 'ic', 'lh', 'rlh', 'rem', 'vb', 'vi', 'vw', 'vh', 'vmin', 'vmax', 'mm', 'Q', 'cm', 'in', 'pt', 'pc', 'px'],
        require('./length')
    ],
    [
        ['angle', 'deg', 'grad', 'rad', 'turn'], require('./angle')
    ],
    [
        ['time', 'ms', 's'], require('./time')
    ],
    [
        ['frequency', 'Hz', 'kHz'], require('./frequency')
    ],
    [
        ['%'], require('./percentage')
    ]
];

module.exports = fn('attribute', ['attr'], stream => {
    const attribute = identifier(stream);

    if (!attribute) {
        return null;
    }

    let typeOrUnit = null;
    let fallback = null;

    for (const [types, parser] of typeAndUnits) {
        typeOrUnit = match(stream, ...types);

        if (typeOrUnit) {

            if (optional(stream, 'punc', ',') && !(fallback = parser(stream))) {
                return null;
            }

            break;
        }
    }

    return {
        attribute,
        typeOrUnit,
        fallback
    };
});
