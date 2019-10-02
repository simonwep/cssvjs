const createStream = require('../stream');
const {sideOrCorner, position, angle, length, time, percentage} = require('./css');

const types = [
    sideOrCorner,
    percentage,
    length,
    time,
    angle,
    position
];

module.exports = tokens => {
    const stream = createStream(tokens);

    for (const parser of types) {
        stream.stash();
        const parsed = parser(stream);

        if (parsed && !stream.hasNext()) {
            return parsed;
        }

        stream.pop();
    }

    return null;
};

