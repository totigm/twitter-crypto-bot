import dotenv from 'dotenv';

dotenv.config();

const config = {
    node_env: process.env.NODE_ENV,
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
};

export default config;
