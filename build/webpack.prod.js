const path = require('path');
const {
    merge
} = require('webpack-merge');
const commonConfig = require('./webpack.common');

//打包前删除之前的打包文件
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

//压缩css代码
const opimizeCss = require('optimize-css-assets-webpack-plugin');

//压缩es6语法
const TerserJSPlugin = require('terser-webpack-plugin');

//压缩js代码
const uglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');



//导出一个webpack具有特殊属性的对象
const prodConfig = {
    //上线
    mode: 'production', //指定模块配置
    devtool: 'eval-cheap-module-souce-map', //报错直接映射到源文件

    module: {
        rules: [
            //图片文件
            {
                test: /\.(bmp|png|jpg|jpeg|ico|gif|webp|svg)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            limit: 1, // 当图片小于1 k时 自动用base64转换
                            name: '[name].[ext]',
                            // 图片输出的实际路径(相对于dist)
                            outputPath: 'images',
                            publicPath: './images'
                            //publicPath: 'https://cdn2020.xiaolong0418.com/navigation/images'
                        }
                    },
                    /*对图片进行压缩*/
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            // 压缩 jpeg 的配置
                            mozjpeg: {
                                progressive: true,
                            },
                            // 使用 imagemin**-optipng 压缩 png，enable: false 为关闭
                            optipng: {
                                enabled: false,
                            },
                            // 使用 imagemin-pngquant 压缩 png
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            // 压缩 gif 的配置
                            gifsicle: {
                                interlaced: false,
                            },
                            // 开启 webp，会把 jpg 和 png 图片压缩为 webp 格式,建议不要开启，ios14以下系统不支持webp
                            // webp: {
                            //   quality: 75
                            // }
                        }
                    }
                ]
            }
        ]
    },
    //配置插件
    plugins: [

        //打包前清除dist文件夹
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),





    ],


    //可以删除未使用的资源。
    optimization: {
        minimizer: [

            // 压缩CSS
            new opimizeCss(),

            //压缩es6语法
            new TerserJSPlugin({
                cache: true, //是否缓存
                parallel: true, //是否并发打包，同时打包多个文件
                sourceMap: true //打包后的代码与源码的映射，方便调试
            }),


            //压缩js代码
            new uglifyJsWebpackPlugin({
                cache: true, //是否缓存
                parallel: true, //是否并发打包，同时打包多个文件
                sourceMap: true, //打包后的代码与源码的映射，方便调试
                uglifyOptions: {
                    // 在UglifyJs删除没有用到的代码时不输出警告
                    warnings: false,
                    output: {
                        // 删除所有的注释
                        comments: false,
                        // 最紧凑的输出
                        beautify: false
                    },
                    compress: {
                        // 删除所有的 `console` 语句
                        // 还可以兼容ie浏览器
                        drop_console: true,
                        // 内嵌定义了但是只用到一次的变量
                        collapse_vars: true,
                        // 提取出出现多次但是没有定义成变量去引用的静态值
                        reduce_vars: true,
                    }
                }
            })
        ],
    },

}

module.exports = merge(commonConfig, prodConfig);