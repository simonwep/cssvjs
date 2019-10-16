const match = require('../tools/match');
const maybe = require('../tools/maybe');

const singleValues = ['repeat', 'space', 'round', 'no-repeat'];
module.exports = maybe(stream => {
    let raw = null;
    let xval = null;
    let yval = null;

    // Shorhand syntax
    switch (raw = match(stream, 'repeat-x', 'repeat-y')) {
        case 'repeat-x': {
            xval = 'repeat';
            yval = 'no-repeat';
            break;
        }
        case 'repeat-y': {
            xval = 'no-repeat';
            yval = 'repeat';
            break;
        }
    }

    if (!raw) {
        xval = match(stream, ...singleValues);
        yval = match(stream, ...singleValues);
        raw = `${xval} ${yval || ' '}`.trim();
    }

    return (xval || yval) ? {
        type: 'repeat-style',
        raw,
        value: {
            x: xval,
            y: yval || xval
        }
    } : null;
});
