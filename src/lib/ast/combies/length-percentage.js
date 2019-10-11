const percentage = require('../css/percentage');
const length = require('../css/length');

module.exports = stream => percentage(stream) || length(stream);
