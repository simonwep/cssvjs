const optional = require('../../tools/optional');
const maybe = require('../../tools/maybe');

const shapes = {
    polygon: require('./polygon'),
    ellipse: require('./ellipse'),
    circle: require('./circle'),
    inset: require('./inset'),
    path: require('./path')
};

module.exports = maybe(stream => {
    const kw = optional(stream, 'kw');

    if (kw && (kw.value in shapes) && optional(stream, 'punc', '(')) {

        const parsed = shapes[kw.value](stream);

        if (parsed && optional(stream, 'punc', ')')) {
            return {
                type: 'basic-shape',
                value: parsed
            };
        }
    }

    return null;
});
