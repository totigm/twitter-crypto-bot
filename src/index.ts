import CryptoBot from './classes';

new CryptoBot('BTC').setTweetInterval(15);

new CryptoBot('BNB', {
    credentials: {
        access_token: process.env.ACCESS_TOKEN_BNB,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET_BNB,
    },
}).setTweetInterval(15);

new CryptoBot('ETH', {
    credentials: {
        access_token: process.env.ACCESS_TOKEN_ETH,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET_ETH,
    },
}).setTweetInterval(15);
