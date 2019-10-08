module.exports = (min, max, ...values) => {
    return values.every(v => v >= min && v <= max);
};
