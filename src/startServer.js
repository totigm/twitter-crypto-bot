const createUpdatedMessage = require("./createUpdatedMessage");
const keepAlive = require("./keepAlive");
const config = require("./config");

const express = require("express");
const app = express();

const startServer = (coin) => {
    app.set("port", process.env.PORT || 5000);

    const port = app.get("port");

    app.listen(port, () => {
        console.log(
            "App is running, server is listening on port",
            port
        );
    });

    app.get("/", async (req, res) => {
        const messageData = await createUpdatedMessage(coin);
        res.send(messageData.message);
    });

    const serverUrl = config.server_url;
    if (serverUrl) keepAlive(serverUrl, 10);
};

module.exports = startServer;
