const dotenv = require("dotenv");

const NODE_ENV = process.env.NODE_ENV;

dotenv.config({
    path: `.env.${NODE_ENV}`,
});

const config = {
    node_env: NODE_ENV,
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    server_url: process.env.SERVER_URL,
};

export { config };
