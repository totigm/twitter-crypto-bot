const fetch = require("node-fetch");
const utils = require("./utils");

const pingServer = (serverUrl) =>
    fetch(serverUrl)
        .then((res) => res.text())
        .then(console.log("Alive at", new Date()));

// Heroku's server goes down after 30 minutes without incoming requests. This method is a workaround to keep it up.
const keepAlive = (serverUrl, minutes = 10) =>
    setInterval(() => pingServer(serverUrl), utils.minutesToMs(minutes));

module.exports = keepAlive;
