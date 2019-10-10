const percentage = require('../css/percentage');
const length = require('../css/length');

// TODO: 0 is a valid length!
module.exports = stream => length(stream) || percentage(stream);
