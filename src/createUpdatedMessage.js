const getPriceData = require("./getPriceData");
const config = require("./config");
const utils = require("./utils");

const getComparisonMessage = (intro, change, percent) =>
    `${change > 0 ? "🟢" : "🔴"} ${intro} the price has ${
        change > 0 ? "increased" : "dropped"
    } by $${Math.abs(change)} (${percent}%).\n`;

const getHashtags = () => "#Bitcoin #BTC";

const createMessage = (coin, priceData, lastTweetPrice = 0) => {
    let message = `The $${coin} price is at $${priceData.price} right now.\n`;
    if (lastTweetPrice != 0)
        message += getComparisonMessage(
            "Compared to the last tweet,",
            utils.getTwoDecimalsFloat(priceData.price - lastTweetPrice),
            utils.getPercentage(priceData.price, lastTweetPrice)
        );
    message += getComparisonMessage(
        "In the last 24 hours",
        priceData.dayChange,
        priceData.dayChangePercent
    );
    message += "\n" + getHashtags();
    if (config.NODE_ENV === "dev") message = message.replaceAll(/\$|#/g, "[DEV]") 
    return message;
};

const createUpdatedMessage = async (coin, lastTweetPrice) => {
    const priceData = await getPriceData(coin);
    const message = createMessage(coin, priceData, lastTweetPrice);
    return { message, price: priceData.price };
};

module.exports = createUpdatedMessage;
