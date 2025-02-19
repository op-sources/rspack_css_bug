const { resolve } = require('path');
const CssExtractWebpackPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/main.jsx',
    output: {
        path: resolve(__dirname, 'webpack-dist'),
        filename: 'main.js',
    },
    resolve: {
		extensions: [".ts", ".tsx", ".jsx", ".js"]
	},
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ["@babel/preset-env"],
                                "@babel/preset-react", // 可以转换JSX语法
                            ],
                        },
                    },
                ],
            },
            { test: /\.css$/, use: ['style-loader', CssExtractWebpackPlugin.loader, 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
        ],
    },
    plugins: [
        new CssExtractWebpackPlugin()
    ]
}