import CryptoBot from "./classes";
import { config } from "./config";

const bot = new CryptoBot({
    coin: { name: "Bitcoin", symbol: "btc" },
    credentials: {
        consumer_key: config.consumer_key,
        consumer_secret: config.consumer_secret,
        access_token: config.access_token,
        access_token_secret: config.access_token_secret,
    },
    decimals: 0,
});

bot.scheduleTweets(0.08);
