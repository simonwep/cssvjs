const percentage = require('../css/percentage');
const length = require('../css/length');

module.exports = stream => length(stream) || percentage(stream);
