'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: `${ __dirname }/frontend`,

    entry: {
        app: './app'
    },

    output: {
        path: `${ __dirname }/public/js`,
        filename: '[name].js'
    },
    //
    // externals: {
    //     lodash: '_'
    // },

    watch: NODE_ENV === 'development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV === 'development' ? '#cheap-inline-module-source-map' : null,

    plugins: [
        // new webpack.ProvidePlugin({
        //     _: 'lodash'
        // })
        // new webpack.NoErrorsPlugin(),
        // new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /ru|en-gb/)
        // new webpack.IgnorePlugin(/\.\/locale/, /zh-/)
    ],

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                }
            }
        ]
    }
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true
        }
    }));
}