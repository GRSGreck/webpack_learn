'use strict';

module.exports = {
    context: `${ __dirname }/frontend`,

    entry: {
        main: './main'
    },

    output: {
        path: `${ __dirname }/public`,
        publicPath: '/',
        filename: '[name].js'
    },

    watch: true,

    module: {
        loaders: [
            {
                test: /\.js$/,
                include: __dirname + '/frontend',
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.pug$/,
                include: __dirname + '/frontend',
                loader: 'pug-loader'
            },
            {
                test: /\.css$/,
                include: __dirname + '/frontend',
                loaders: [
                    'style',
                    'css',
                    'autoprefixer-loader?browsers=last 10 version'
                ]
            },
            {
                test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file?name=[path][name].[ext]'
            }
        ]
    }
};