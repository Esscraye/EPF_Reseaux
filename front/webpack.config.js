const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'src/[name].[fullhash].js'
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        historyApiFallback: true,
        host: '127.0.0.1',
        port: 9090,
        open: true,
        hot: true,
        client: {
            logging: 'info',
            overlay: true,
            progress: true,
            webSocketTransport: 'ws'
        },
        webSocketServer: 'ws'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [['@babel/preset-env', { targets: "defaults" }], '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  path.resolve(__dirname, 'src/index.html'),
            inject: 'body',
            hash: true
        }),
        new ESLintPlugin({
            extensions: 'js',
            exclude: 'node_modules',
            files: './src/'
        })
    ],
};
