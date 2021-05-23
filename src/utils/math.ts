const getPercentage = (newPrice: number, oldPrice: number) => (newPrice / oldPrice - 1) * 100;

const getChange = (newPrice: number, oldPrice: number) => ({
    price: newPrice - oldPrice,
    percent: getPercentage(newPrice, oldPrice),
});

export { getPercentage, getChange };
