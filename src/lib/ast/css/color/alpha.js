const inRange = require('../../../utils/inRange');
const optional = require('../../tools/optional');
const percentage = require('../percentage');

module.exports = (stream, commaSeperation) => {

    if (commaSeperation ? !optional(stream, 'punc', ',') : !optional(stream, 'punc', '/')) {
        return null;
    }

    // The alpha value can always be either a number or percentage value
    const a = percentage(stream) || optional(stream, 'num');

    // Validate range and parsed value
    if (a === null || !inRange(0, a.type === 'percentage' ? 100 : 1, a.value)) {
        return null;
    }

    return a;
};
