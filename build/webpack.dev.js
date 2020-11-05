const path = require('path');
const webpack = require('webpack');
const {
    merge
} = require('webpack-merge');
const commonConfig = require('./webpack.common');


//导出一个webpack具有特殊属性的对象
const devConfig = {
    //开发
    mode: 'development', //指定模块配置
    devtool: 'eval-cheap-module-souce-map', //报错直接映射到源文件

    //启动一个服务器
    devServer: {
        contentBase: path.join(__dirname, "dist"), //服务器文件根路径
        compress: true, //启用gzip 压缩
        open: true, //启用时，开发服务器将打开浏览
        port: 8002, //提供访问的端口
        // hot: true, //热更新
        // hotOnly: true,
        historyApiFallback:true,//解决路由问题
        //跨域请求
        proxy: {
            '/api': {
                target: 'http//locahost:3000', //前缀加请求连接
                //https要配置secure:false
                pathRewrite: {
                    'header.json': 'demo.json' //替换请求文件
                },
                //突破代理转发
                changeOrigin: true

            }
        }
    },

    //配置插件
    // plugins: [
    //     //热更新
    //     new webpack.HotModuleReplacementPlugin()
    // ],

    //可以删除未使用的资源。
    optimization: {
        usedExports: true
    }

}

module.exports = merge(commonConfig, devConfig);