'use strict';

let moduleName = location.pathname.slice(1);

let req = require.context('./routes', true, /\.js$/);

req.keys().forEach(function (path) {
    let module = req(path);
    module();
});

