const Koa = require('koa');
const webpack = require('webpack');
const convert = require('koa-convert')
const koaWebpackMiddleware = require('koa-webpack-middleware');
const webpackDevMiddleware = koaWebpackMiddleware.devMiddleware;
const webpackHotMiddleware = koaWebpackMiddleware.hotMiddleware;
const config = require('../build/webpack.config')
const compiler = webpack(config)
const wdm = webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
})

CA.use(convert(wdm))
CA.use(convert(webpackHotMiddleware(compiler)))