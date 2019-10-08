const createStream = require('../stream');
const sideOrCorner = require('./css/sideOrCorner');
const percentage = require('./css/percentage');
const position = require('./css/position');
const length = require('./css/length');
const string = require('./css/string');
const angle = require('./css/angle');
const ratio = require('./css/ratio');
const color = require('./css/color');
const time = require('./css/time');
const url = require('./css/url');
const flex = require('./css/flexValue');

const types = [
    url,
    color,
    string,
    sideOrCorner,
    percentage,
    length,
    ratio,
    flex,
    time,
    angle,
    position
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

