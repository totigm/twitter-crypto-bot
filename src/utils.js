const getTwoDecimalsFloat = (number) => parseFloat(number).toFixed(2);

const getPercentage = (newPrice, oldPrice) =>
    getTwoDecimalsFloat((newPrice / oldPrice - 1) * 100);

const minutesToMs = (minutes) => minutes * 60 * 1000;

module.exports = { getPercentage, getTwoDecimalsFloat, minutesToMs };
