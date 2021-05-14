import CryptoBot from "./classes";
import { config } from "./config";

const bot = new CryptoBot(
    { name: "Bitcoin", symbol: "btc" },
    {
        consumer_key: config.consumer_key,
        consumer_secret: config.consumer_secret,
        access_token: config.access_token,
        access_token_secret: config.access_token_secret,
    },
    0
);

bot.scheduleTweets(1);
