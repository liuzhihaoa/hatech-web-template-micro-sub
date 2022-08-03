/*
 * @Author: dwb
 * @Date: 2021-05-28 17:43:26
 * @LastEditors: dwb
 * @LastEditTime: 2021-08-03 13:32:56
 * @Description: file content
 */
const Path = require('path')
const CopyWebpackPlugin = require("copy-webpack-plugin")
const mockApiUrl = 'http://localhost:6666'
const chalk = require('chalk');

// 如果运行的时候 css 资源不显示,请检查此配置
const port = 9191
let publicPath = `http://localhost:${port}`
if(process.env.NODE_ENV === 'production'){
  // 此处替换成打包之后项目的运行地址 location.origin
  publicPath = ''
}
if(!publicPath){
  console.log(chalk.yellowBright.bold('[警告,警告]：没有配置打包后css资源地址'));
}

/**
 * 设置绝对路径
 * @param {String} dir 路径
 */
function resolve(dir) {
  return Path.join(__dirname, dir)
}


module.exports = {
  devServer: {
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        target: mockApiUrl,
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/': '/'
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    output: {
      library: 'system-[name]',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_system`
    },
    plugins: [
      new CopyWebpackPlugin([
        // 如果有多个文件，再增加一个对象即可
        {
          from: Path.resolve(__dirname, "./Release Notes.txt"),
        },
      ])
    ]
  },
  chainWebpack: (config) => {
    config.module
      .rule('fonts')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 4096, // 小于4kb将会被打包成 base64
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[hash:8].[ext]',
            publicPath,
          },
        },
      })
      .end();
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: 4096, // 小于4kb将会被打包成 base64
        fallback: {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]',
            publicPath,
          },
        },
      });
  },
}
