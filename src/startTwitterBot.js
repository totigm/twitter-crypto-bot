const Twit = require("twit");
const utils = require("./utils");
const config = require("./config");
const createUpdatedMessage = require("./createUpdatedMessage");

let lastPrice;

const tweet = async (coin, Twitter) => {
    const messageData = await createUpdatedMessage(coin, lastPrice);

    lastPrice = messageData.price;

    Twitter.post(
        "statuses/update",
        { status: messageData.message },
        (err, data, response) => {
            console.log(data);
        }
    );
};

const startTwitterBot = (coin, intervalMinutes) => {
    const Twitter = new Twit({
        consumer_key: config.consumer_key,
        consumer_secret: config.consumer_secret,
        access_token: config.access_token,
        access_token_secret: config.access_token_secret,
    });

    const intervalMs = utils.minutesToMs(intervalMinutes);

    tweet(coin, Twitter);
    setInterval(() => tweet(coin, Twitter), intervalMs);
};

module.exports = startTwitterBot;
