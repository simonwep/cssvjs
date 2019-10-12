const inRange = require('../../utils/in-range');
const delimeted = require('../tools/delimeted');
const optional = require('../tools/optional');
const match = require('../tools/match');
const maybe = require('../tools/maybe');
const fn = require('../tools/function');
const integer = require('./integer');
const number = require('./number');

module.exports = maybe(stream => {
    const kw = match(stream, 'linear', 'ease', 'ease-in', 'ease-in-out', 'ease-out');

    if (kw) {
        return {
            type: 'timing-function',
            value: kw
        };
    }

    return fn('timing-function', ['cubic-bezier', 'steps'], (stream, name) => {
        switch (name) {
            case 'cubic-bezier': {
                const vals = delimeted(stream, number, 4, true);
                if (vals && inRange(-1, 1, ...vals.map(v => v.value))) {
                    return vals;
                }

                return null;
            }
            case 'steps': {
                const steps = integer(stream);

                if (!steps || steps.value < 1 || !optional(stream, 'punc', ',')) {
                    return null;
                }

                const direction = match(stream, 'jump-start', 'jump-end', 'jump-both', 'jump-none', 'start', 'end');
                return direction ? {
                    direction,
                    steps: steps.value
                } : null;
            }
        }
    })(stream);
});
