module.exports = (arr, el) => {
    const index = arr.indexOf(el);

    if (~index) {
        arr.splice(index, 1);
    }

    return arr;
};
