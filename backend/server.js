'use strict';

const staticServer = require('node-static');
const file = new staticServer.Server('.');

require('http').createServer(function (req, res) {
    req.addListener('end', function () {
        file.serve(req, res);
    }).resume();
}).listen(8080);