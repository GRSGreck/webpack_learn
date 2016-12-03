'use strict';

let moduleName = location.pathname.slice(1);

console.log(moduleName);

require('bundle-loader!./routes/' + moduleName)(function (route) {
    route();
});