'use strict';

module.exports = {
    context: `${ __dirname }/frontend`,

    entry: {
        app: './app'
    },

    output: {
        path: `${ __dirname }/public/js`,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /old\.js$/,
                // loader: 'expose?Work!imports?workSettings=>{delay:500}!exports?Work'
                loader: 'script'
            }
        ]
    },

    resolve: {
        root: __dirname + '/vendor',
        alias: {
            old: 'old/dist/old'
        }
    }
};