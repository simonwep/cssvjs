const optional = require('../../tools/optional');
const maybe = require('../../tools/maybe');
const percentage = require('../percentage');
const length = require('../length');
const number = require('../number');
const variable = require('../var');

module.exports = maybe(stream => {
    const simpleValue = variable(stream) ||
        length(stream) ||
        percentage(stream) ||
        number(stream);

    if (simpleValue) {
        return simpleValue;
    }

    const next = optional(stream, 'kw', 'calc') ||
        optional(stream, 'punc', '(');

    if (!next || (next.value === 'calc' && !optional(stream, 'punc', '('))) {
        return null;
    }

    const expression = require('./calc-sum')(stream);
    if (!expression || !optional(stream, 'punc', ')')) {
        return null;
    }

    return expression;
});
