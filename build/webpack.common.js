//引入node中path模块，处理文件路径的小工具
const path = require('path')
//引入plugin可以在webpack运行到某个时刻的时候，帮你做一些事情
const HtmlWebpackPlugin = require('html-webpack-plugin');
//打包前删除之前的打包文件
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');



//分离css代码
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//压缩css代码
const opimizeCss = require('optimize-css-assets-webpack-plugin');


const TerserJSPlugin = require('terser-webpack-plugin');

//压缩js代码
const uglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')


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
                },
                {
                  tag: 'img',
                  attribute: 'data-srcset',
                  type: 'srcset',
                },
              ]
            }
          }
        }
      },
      //样式文件
      {
        test: /\.(sa|sc|c)ss$/, // 可以打包后缀为sass/scss/css的文件
        use: [{
            //提取js中的css成单独文件
            loader: MiniCssExtractPlugin.loader,
            options: {
              // css中的图片路径增加前缀
              publicPath: '../'
            }


          }, {
            loader: "css-loader", //将 css 装载到 javascript
            options: {
              importLoaders: 2,
            } //避免scss引用其他scss,没有解析引用的scss
          },

          {
            loader: "postcss-loader", //添加前缀的，解决浏览器兼容问题
            // options: {
            //   ident: 'postcss',
            //   plugins: () => [
            //     require('postcss-preset-env')(),
            //   ],
            // },
          },

          {
            loader: "sass-loader" //解析scss文件
          },

        ],
      },

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
      },
      //字体文件处理
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            // 输出到dist/fonts/目录
            outputPath: 'fonts',

          }
        }]
      },

      //音频文件
      {
        test: /\.(mp3|mp4|avi|mov)$/,
        loader: 'url-loader',
        options: {
          name: 'audios/[name].[ext]',
          limit: 10
        }
      },


      //es6解决兼用性问题
      {
        test: /\.js$/,
        // 只在 src 文件夹下查找
        //include: [resolve('src')],
        // 不会去查找的路径
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
      template: './index.html', // html模板文件
      filename: 'index.html', // 打包后的文件名称
      favicon: './favicon.ico', // 添加小图标
      //hash: true, // 添加哈希,避免缓存
      minify: { // 对html也进行压缩
        // 删除双引号
        removeAttributeQuotes: true,
        // 折叠为一行
        collapseWhitespace: true,
        // 移除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true
      }
    }),
    //打包前清除dist文件夹
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),

    new MiniCssExtractPlugin({
      filename: 'css/[name].css', // 抽离出的css文件名
      chunkFilename: '[id].css',
    }),



  ],

  //可以删除未使用的资源。
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        sourceMap: true,
      }),

      //压缩js代码
      new opimizeCss(),

      //压缩js代码
      new uglifyJsWebpackPlugin({
        cache: true, //是否缓存
        parallel: true, //是否并发打包，同时打包多个文件
        sourceMap: true //打包后的代码与源码的映射，方便调试
      })
    ],
  },

  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, '../dist'), //打包文件路径
    //publicPath: 'https://cdn2020.xiaolong0418.com/navigation//'

  },



}