const createStream = require('../stream');
const sideOrCorner = require('./css/sideOrCorner');
const percentage = require('./css/percentage');
const resolution = require('./css/resolution');
const blendMode = require('./css/blendMode');
const position = require('./css/position');
const flex = require('./css/flexValue');
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
    blendMode
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

