const percentage = require('../css/percentage');
const angle = require('../css/angle');

module.exports = stream => angle(stream) || percentage(stream);
