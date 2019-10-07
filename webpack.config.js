const {version} = require('./package');
const webpack = require('webpack');

module.exports = {
    mode: 'production',

    entry: {
        'cssvjs.min.js': './src/index.js'
    },

    output: {
        publicPath: 'dist',
        filename: '[name]',
        library: 'CSSvJS',
        libraryExport: 'default',
        libraryTarget: 'umd'
    },

    plugins: [
        new webpack.BannerPlugin({
            banner: `CSSvJS ${version} MIT | https://github.com/Simonwep/cssvjs`
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: '[name].map'
        })
    ]
};
