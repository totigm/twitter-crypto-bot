import CryptoBot from './classes';
import Config from './config';

const bot = new CryptoBot({
    coin: { name: 'Bitcoin', symbol: 'btc' },
    credentials: {
        consumer_key: Config.consumer_key,
        consumer_secret: Config.consumer_secret,
        access_token: Config.access_token,
        access_token_secret: Config.access_token_secret,
    },
    decimals: 0,
});

bot.scheduleTweets(15);
