const path = require('path');

const isProd = process.env.NODE_ENV === 'production';
const example = path.resolve('example');
const context = path.resolve('src');

const webpackConfig = {
    resolve: { symlinks: false },

    node: {
      fs: 'empty',
      net: 'empty'
    },

    entry: {
        example,
        search: context
    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve('dist')
    },

    context,

    devtool: isProd ? false : 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                    }
                }
            }
        ]

    },

    devServer: {
        contentBase: './example',
        disableHostCheck: true
    }
};


module.exports = webpackConfig;
