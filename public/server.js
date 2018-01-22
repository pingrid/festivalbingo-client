/* eslint-disable */

const path = require('path');
const http = require('http');
const faye = require('faye');
const express = require('express');
const httpProxy = require('http-proxy');
const cors = require('cors');
const bodyParser = require('body-parser');


const proxy = httpProxy.createProxyServer();
const app = express();
const bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 90});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const expressConfig = {
    api_uri: process.env.BACKEND_ORDERS_PORT || "http://localhost:5000",
    root_path: path.normalize(__dirname + '/')
};

app.route('/publicroute/*').get(function(req, res) {
    req.url = req.url.replace(/\/publicroute/, '');
    proxy.web(req, res, {target: expressConfig.api_uri});
});


app.use(express.static(__dirname + '/'));
app.route('/*').get(function response(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
});

proxy.on('error', function (err, req, res) {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end(err.message);
});

//create actual server and attach faye
const server = http.createServer(app);
const port = 8081;
bayeux.attach(server);
server.listen(port);
server.timeout = 180000;
console.log("server up and listen on port: " + port);
