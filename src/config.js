const dotenv = require("dotenv");
const NODE_ENV = process.argv.find((value) => value === "prod") ?? "dev";
const path = `.env${NODE_ENV === "prod" ? "" : ".dev"}`;

dotenv.config({
    path,
});

process.env.NODE_ENV = NODE_ENV;

const config = process.env;
module.exports = config;
