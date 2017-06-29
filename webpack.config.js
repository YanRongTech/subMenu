const path = require('path'),
    webpack = require('webpack');


module.exports = {
        entry: {
            'subMenu': './index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist/'),
            filename: "[name].js",
            libraryTarget: 'umd'
        },
        externals: {
            react: {
                commonjs: 'react',
                amd: 'react'
            },
            antd: {
                commonjs: "antd",
                amd: "antd"
            },
            'react-router': 'react-router'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.less$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => {
                                    require('autoprefixer')({browsers: ['ie >= 11', 'Edge >= 12', 'Safari >4', 'Chrome >= 21', 'Firefox >= 28']})
                                }
                            }
                        },
                        'less-loader'
                    ]
                }
            ]
        },
        plugins: [
            new webpack.optimize.UglifyJsPlugin()
        ]
};
