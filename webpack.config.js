const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(gif|svg|jpg|png)$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        port: 3000,
        historyApiFallback: true,
        hotOnly: true
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            inject: true,
            filename: 'index.html'
        })
    ]
};
