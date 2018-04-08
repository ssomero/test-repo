const path = require('path')

module.exports = {
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react'],
            //     plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
            }
        }]
    },
    devtool: 'source-map',
    devServer: {
        // host must be set to enable accessing server from localhost:${PORT} when devServer running in docker
            host: '0.0.0.0',
            contentBase: path.join(__dirname, 'src'),
            historyApiFallback: true,
            port: process.env.PORT || 8000,
            watchOptions: {
                aggregateTimeout: 50,
                poll: 100,
            },
            proxy: {
                '/api': 'http://localhost:3000',
            },
            https: false,
        },
};