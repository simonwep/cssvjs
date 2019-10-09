module.exports = arr => {
    switch (arr.length) {
        case 1: {
            const [a] = arr;
            return [a, a, a, a];
        }
        case 2:
            return [...arr, ...arr];
        case 3:
            return [...arr, arr[1]];
        case 4:
            return arr;
        default:
            return null;
    }
};
