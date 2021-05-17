import CryptoBot from './classes';
import Config from './config';

const bot = new CryptoBot(
    { name: 'Bitcoin', symbol: 'btc' },
    {
        consumer_key: Config.consumer_key,
        consumer_secret: Config.consumer_secret,
        access_token: Config.access_token,
        access_token_secret: Config.access_token_secret,
    },
    0,
);

bot.scheduleTweets(1);
