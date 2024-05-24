const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const here = __dirname
const config = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    mode: 'production',
    target: [
        'web',
        'es5'
    ],
    output: {
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,

                exclude: [
                    /\bcore-js\b/,
                ],
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ]
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader'
                ]
              }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            filename: path.join(__dirname, 'dist/index.html'),
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
    },
}

module.exports = config