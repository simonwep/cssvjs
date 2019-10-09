const lengthPercentage = require('./length-percentage');
const sequence = require('../tools/sequence');

module.exports = stream => {
    const lp = lengthPercentage(stream);

    if (lp) {
        return lp;
    }

    const seq = sequence(
        stream,
        ['kw', 'closest', 'farthest'],
        ['punc', '-'],
        ['kw', 'side']
    );

    if (seq) {
        return seq.map(v => v.value).join('');
    }

    return null;
};
