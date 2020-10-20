//引入node中path模块，处理文件路径的小工具
const path = require('path')
//引入plugin可以在webpack运行到某个时刻的时候，帮你做一些事情
const HtmlWebpackPlugin = require('html-webpack-plugin');
//打包前删除之前的打包文件
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV !== 'production'



module.exports = {
    //打包多个js文件
    entry: {
        main: './src/js/main.js',
        data: './src/js/data.js',
        rem: './src/js/rem.js'
    },

    module: {
        rules: [
          //index文件
          {
                test: /\.(htm|html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attributes: {
                            list: [{
                                    tag: 'img',
                                    attribute: "src",
                                    type: 'src'
                                },
                                {
                                    tag: 'img',
                                    attribute: 'data-original',
                                    type: 'src',
                                }
                            ]
                        }
                    }
                }
            },
            //样式文件
            {
                test: /\.(sa|sc|c)ss$/, // 可以打包后缀为sass/scss/css的文件
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // 这里可以指定一个 publicPath
                            // 默认使用 webpackOptions.output中的publicPath
                            // publicPath的配置，和plugins中设置的filename和chunkFilename的名字有关
                            // 如果打包后，background属性中的图片显示不出来，请检查publicPath的配置是否有误
                            name: 'css/[name].[ext]',
                            // publicPath: devMode ? './' : '../',   // 根据不同环境指定不同的publicPath
                            hmr: devMode, // 仅dev环境启用HMR功能
                        },
                    }, {
                        loader: "css-loader", //将 css 装载到 javascript
                        options: {
                            importLoaders: 2,
                        } //避免scss引用其他scss,没有解析引用的scss
                    }, {
                        loader: "sass-loader" //解析scss文件
                    },
                    {
                        loader: "postcss-loader" //添加前缀的，解决浏览器兼容问题
                    }
                ],
            },

            //图片文件
            {
                test: /\.(bmp|png|jpg|jpeg|ico|gif|webp|svg)$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            /* 图片大小小于1000字节限制时会自动转成 base64 码引用*/
                            name: 'images/[name].[ext]',
                        }
                    },
                    /*对图片进行压缩*/
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            //字体文件处理
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'font/[name].[ext]',
                            
                        }
                    }
                ]
            },

            //es6解决兼用性问题
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",

            }
        ]

    },
    //配置插件
    plugins: [
        new HtmlWebpackPlugin({
            // 此插件作用是将 index.html 打包到 bundle.js 所在目录中,
            // 同时也会在 index.html 中自动的 <script> 引入 bundle.js
            // 注意：其中的文件名 bundle 取决于上面output.filename中指定的名称
            template: './index.html',
            favicon: './favicon.ico', // 添加小图标
        }),
        //打包前清除dist文件夹
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist']
        }),
        new MiniCssExtractPlugin({
            // 这里的配置和webpackOptions.output中的配置相似
            // 即可以通过在名字前加路径，来决定打包后的文件存在的路径
            filename: devMode ? 'css/[name].css' : 'css/[name].[hash].css',
            // chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
        }),

    ],

    //可以删除未使用的资源。
    optimization: {
        usedExports: true
    },

    output: {
        filename: 'js/[name].js',
        path: path.join(__dirname, '../dist/'), //打包文件路径
        //publicPath: 'https://cdn2020.xiaolong0418.com/navigation', //文件前面加cdn地址

    },

}