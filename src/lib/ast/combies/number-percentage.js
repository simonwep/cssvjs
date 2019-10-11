const percentage = require('../css/percentage');
const number = require('../css/number');

module.exports = stream => percentage(stream) || number(stream);
