var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var ImageminPlugin = require('imagemin-webpack-plugin').default
var imageminMozjpeg = require('imagemin-mozjpeg')
var env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.build.env

// 加速打包
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
var vueLoaderConfig = require('./vue-loader.conf')

// 加速打包


var webpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.productionSourceMap,
      extract: true
    })
  },
  devtool: config.build.productionSourceMap ? '#source-map' : false,
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),

    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: 'happyBabel',
      //如何处理  用法和loader 的配置一样
      loaders: [{
        loader: 'babel-loader?cacheDirectory=true',
      }],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
    }),


    // {
    //   test: /\.vue$/,
    //   loader: 'vue-loader',
    //   options: vueLoaderConfig
    // },

    new HappyPack({
      //用id来标识 happypack处理那里类文件
      id: 'happyVue',
      //如何处理  用法和loader 的配置一样
      loaders: [{
        loader: 'vue-loader',
        options: vueLoaderConfig
      }],
      //共享进程池
      threadPool: happyThreadPool,
      //允许 HappyPack 输出日志
      verbose: true,
    }),


    //   test: /\.vue$/,
    //   loader: 'vue-loader',
    //   options: vueLoaderConfig





    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      },
      sourceMap: true
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // generate dist index.html with correct asset hash for caching.
    // you can customize output by editing /index.html
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: process.env.NODE_ENV === 'testing'
        ? 'index.html'
        : config.build.index,
      template: 'index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    }),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.build.assetsSubDirectory,
        ignore: ['.*']
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../historicalLegacy'),
        to: path.resolve(__dirname, '../dist'),
        ignore: ['.*']
      }
    ]),
    // 图片压缩   用 loader  替换了
    //  new   ImageminPlugin({
    //  test: /\.(jpe?g|png|gif|svg)$/i,
    //   pngquant: {
    //     quality: '10-80'
    //   },
    //   optipng: {
    //     optimizationLevel: 6
    //   },
    //   plugins: [
    //     imageminMozjpeg({
    //       quality: 100,
    //       progressive: true
    //     })
    //   ]
    // })
  ]
})

// //  测试   如果是 build  就把这个 去掉  不上传服务器 了
// new WebpackSftpClient({
//   port: '22',
//   host: '106.15.228.80',
//   username: 'root',
//   password: 'jiCai-[licai#290812we223sa3',
//   path: './dist/',
//   remotePath:process.argv.splice(2)[0],
//   // Show details of uploading for files
//   verbose: true
// })
//  这个判断 不严谨   判断是是否服务器 地址

// console.log(Boolean(process.argv[2]))
// console.log(/^\/mnt\/.*dist$/.test(process.argv[2]))
// console.log(process.argv[2])

if  ( process.argv[2]  &&   /^\/mnt\/.*dist$/.test(process.argv[2])  ) {
  //  上传服务器
  var WebpackSftpClient = require('webpack-sftp-client');
  //  上传服务器
  webpackConfig.plugins.push(
    new WebpackSftpClient({
      port: '22',
      host: '106.15.228.80',
      username: 'root',
      password: 'jiCai-[licai#290812we223sa3',
      path: './dist/',
      remotePath: process.argv.splice(2)[0],
      // Show details of uploading for files
      verbose: true
    })
  )
}


if (config.build.productionGzip) {
  var CompressionWebpackPlugin = require('compression-webpack-plugin')
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
