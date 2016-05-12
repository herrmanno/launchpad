"use strict";
const http = require("http");
const express = require("express");
const proxyClient = require("Proxy/lib/client");

const PORT = 12345;

const app = express();

app.use(express.static(__dirname + "/public"));
app.get("*", (req, res) => res.sendFile(__dirname + "/public/index.html"));
var server = app.listen(PORT, () => {
    process.nextTick(() => console.log(server.address().port));
});

proxyClient.register("Launchpad", PORT);