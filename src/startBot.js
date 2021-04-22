const startServer = require("./startServer");
const startTwitterBot = require("./startTwitterBot");

const startBot = (coin, invervalMinutes = 15) => {
    coin = coin.toUpperCase();
    startServer(coin);
    startTwitterBot(coin, invervalMinutes);
};

module.exports = startBot;
