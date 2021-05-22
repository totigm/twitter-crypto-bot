const dotenv = require("dotenv");
const NODE_ENV = process.argv.find((value) => value === "prod") ?? "dev";
const path = `.env${NODE_ENV === "prod" ? "" : ".dev"}`;

dotenv.config({
    path,
});

const config = {
    node_env: NODE_ENV,
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    server_url: process.env.SERVER_URL,
};

module.exports = config;
