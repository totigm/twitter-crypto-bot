const fetch = require("node-fetch");
const utils = require("./utils");

const getPriceData = async (coin) => {
    const {
        lastPrice: price,
        priceChange: dayChange,
        priceChangePercent: dayChangePercent,
    } = await fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${coin}USDT`
    ).then((res) => res.json());

    const priceData = {
        price,
        dayChange,
        dayChangePercent,
    };

    for (let property in priceData)
        priceData[property] = utils.getTwoDecimalsFloat(priceData[property]);

    return priceData;
};

module.exports = getPriceData;
