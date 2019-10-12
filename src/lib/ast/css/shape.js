const delimeted = require('../tools/delimeted');
const fn = require('../tools/function');
const length = require('./length');

module.exports = fn('shape', ['rect'], stream =>
    delimeted(stream, length, 4, true)
);
