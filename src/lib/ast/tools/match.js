const maybe = require('./maybe');

module.exports = maybe((stream, ...combies) => {
    let result = '';
    let prev = null;

    while (stream.hasNext()) {
        const {value} = stream.peek();
        const newResult = result + value;

        // Reduce possibilites by sorting out string which don't start with the current result
        combies = combies.filter(str => str.startsWith(newResult));
        if (!combies.length) {
            return prev && prev.find(v => v === result) || null;
        }

        prev = combies;
        result = newResult;
        stream.next();
    }

    return prev && prev.find(v => v === result) || null;
});
