const path = require('path');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');



//导出一个webpack具有特殊属性的对象
const prodConfig = {
    //上线
    mode: 'production', //指定模块配置
    devtool: 'cheap-module+-source-map', //报错直接映射到源文件

    
}

module.exports = merge(commonConfig,prodConfig);