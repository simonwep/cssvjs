const fn = require('../../tools/function.js');
const calcSum = require('./calc-sum');

module.exports = fn('calculation', ['calc'], stream => {
    return calcSum(stream);
});
