const createStream = require('../stream');
const sideOrCorner = require('./css/side-or-corner');
const percentage = require('./css/percentage');
const resolution = require('./css/resolution');
const blendMode = require('./css/blend-mode');
const position = require('./css/position');
const integer = require('./css/integer');
const flex = require('./css/flex-value');
const number = require('./css/number');
const length = require('./css/length');
const string = require('./css/string');
const angle = require('./css/angle');
const ratio = require('./css/ratio');
const color = require('./css/color');
const time = require('./css/time');
const url = require('./css/url');

const types = [
    url,
    color,
    string,
    sideOrCorner,
    percentage,
    resolution,
    length,
    ratio,
    flex,
    time,
    angle,
    position,
    blendMode,
    integer,
    number
];

module.exports = tokens => {
    const stream = createStream(tokens);

    for (const parser of types) {

        // TODO: Case-insenstitiv?!
        const parsed = parser(stream);
        if (parsed && !stream.hasNext()) {
            return parsed;
        }
    }

    return null;
};

