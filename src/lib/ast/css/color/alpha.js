const optional = require('../../tools/optional');
const percentage = require('../percentage');
const number = require('../number');

module.exports = (stream, commaSeperation) => {

    if (commaSeperation ? !optional(stream, 'punc', ',') : !optional(stream, 'punc', '/')) {
        return null;
    }

    // The alpha value can always be either a number or percentage value
    return percentage(stream) || number(stream);
};
