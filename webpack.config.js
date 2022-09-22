const path = require('path');
const fs = require('fs');
const resolve = relativePath => path.resolve(__dirname, relativePath);
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const friendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin');
const  MiniCssExtractPlugin= require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const DEPLOY_ENV = process.env.DEPLOY_ENV;
const envPublicUrl = process.env.PUBLIC_URL;

function ensureSlash(path, needsSlash) {
  const hasSlash = path.endsWith('/');
  if (hasSlash && !needsSlash) {
    return path.substr(path, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  } else {
    return path;
  }
}
const getPublicUrl = appPackageJson =>
  envPublicUrl || require(appPackageJson).homepage;

function getServedPath(appPackageJson) {
  const publicUrl = getPublicUrl(appPackageJson);
  const servedUrl =
    envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
  return ensureSlash(servedUrl, true);
}
const paths = {appSrc:resolveApp('src'),servedPath: getServedPath(resolveApp('package.json'))}
const cssFilename = 'static/css/[name].[contenthash:8].css';
const publicPath = paths.servedPath;
const shouldUseRelativeAssetPaths = publicPath === './';
const extractTextPluginOptions = shouldUseRelativeAssetPaths
  ? // Making sure that the publicPath goes back to to build folder.
  { publicPath: Array(cssFilename.split('/').length).join('../') }
  : {};

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, './dist'),
    open: false,
    hot: true,
    quiet: true,
    port: 3008,
  },
  entry: {
    app: '/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js'

  },
  module: {
    strictExportPresence: true,
    rules: [
      // {
      //   test: /\.(js|jsx|mjs)$/,
      //   enforce: 'pre',
      //   use: [
      //     {
      //       options: {
      //         formatter: eslintFormatter,
      //         eslintPath: require.resolve('eslint'),
      //
      //       },
      //       loader: require.resolve('eslint-loader'),
      //     },
      //   ],
      //   include: paths.appSrc,
      // },
      {
        // "oneOf" will traverse all following loaders until one will
        // match the requirements. When no loader matches it will fall
        // back to the "file" loader at the end of the loader list.
        oneOf: [
          // "url" loader works just like "file" loader but it also embeds
          // assets smaller than specified size as data URLs to avoid requests.
          {
            test: /\.(bmp|gif|jpeg|jpg|png)$/,
            loader: require.resolve('url-loader'),
            options: {
              limit: 8 * 1024,
              esModule:false,
              name: 'static/img/[name].[hash:8].[ext]',
            },
            type:'javascript/auto'
          },
          // Process JS with Babel.
          {
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            loader: require.resolve('babel-loader'),
            options: {
              compact: true,
            },
          },
          {
            test: /\.css/,
            use: [MiniCssExtractPlugin.loader,'css-loader']
          },
          {
            test: /\.less/,
            use: [MiniCssExtractPlugin.loader,'css-loader','less-loader']
          },
          // "file" loader makes sure assets end up in the `build` folder.
          // When you `import` an asset, you get its filename.
          // This loader doesn't use a "test" so it will catch all modules
          // that fall through the other loaders.
          {
            loader: require.resolve('file-loader'),
            // Exclude `js` files to keep "css" loader working as it injects
            // it's runtime that would otherwise processed through "file" loader.
            // Also exclude `html` and `json` extensions so they get processed
            // by webpacks internal loaders.
            exclude: /\.(js|jsx|mjs|html|json)$/,
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          // ** STOP ** Are you adding a new loader?
          // Make sure to add the new loader(s) before the "file" loader.
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Metro VPN',
      //模板路径，注意需要和index.html路径对应
      template: path.resolve(__dirname, './public/index.html'),
      //文件名称
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new friendlyErrorsWebpackPlugin(),
    // new ExtractTextPlugin({
    //   filename: cssFilename,
    // }),
    new MiniCssExtractPlugin({
      filename:'static/css/[name].[hash:8].css'
    }),
    //new OptimizeCSSAssetsPlugin(),
    // new ManifestPlugin({
    //   fileName: 'asset-manifest.json',
    // }),
  ],
  resolve: {
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      '@src': resolve('src')
    }
  }
}
