const {sideOrCorner, position, angle, length, ratio, color, url, string, time, percentage} = require('./css');
const createStream = require('../stream');

const types = [
    url,
    color,
    string,
    sideOrCorner,
    percentage,
    length,
    ratio,
    time,
    angle,
    position
];

module.exports = tokens => {
    const stream = createStream(tokens);

    for (const parser of types) {
        stream.stash();

        // TODO: Case-insenstitiv?!
        // TODO: Silent errors?
        const parsed = parser(stream);
        if (parsed && !stream.hasNext()) {
            return parsed;
        }

        stream.pop();
    }

    return null;
};

