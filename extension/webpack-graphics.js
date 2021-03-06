const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const nodecg = require('./util/nodecg-api-context').get();

const bowerModulesPath = `${path.dirname(__dirname)}/node_modules/@bower_components`;
const gfxJsPath = `${path.dirname(__dirname)}/graphics/`;
const nodeModulesPath = `${path.dirname(__dirname)}/node_modules`;

module.exports = [
  {
    entry: `${gfxJsPath}src/lowerbar.js`,
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.otf$/,
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
        {
          test: /\.png$/,
          loader: 'file-loader',
        },
      ],
    },
    output: {
      path: `${gfxJsPath}dist`,
      filename: 'lowerbar.bundle.js',
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
    resolveLoader: {
      modules: [nodeModulesPath, bowerModulesPath],
    },
  },
  {
    entry: `${gfxJsPath}src/idle.js`,
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.png$/,
          loader: 'file-loader',
        },
      ],
    },
    output: {
      path: `${gfxJsPath}dist`,
      filename: 'idle.bundle.js',
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
    resolveLoader: {
      modules: [nodeModulesPath, bowerModulesPath],
    },
  },
  {
    entry: `${gfxJsPath}src/notifications.js`,
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
        {
          test: /\.otf$/,
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      ],
    },
    output: {
      path: `${gfxJsPath}dist`,
      filename: 'notifications.bundle.js',
    },
    plugins: [
      new VueLoaderPlugin(),
    ],
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        vue$: 'vue/dist/vue.esm.js',
      },
    },
    resolveLoader: {
      modules: [nodeModulesPath, bowerModulesPath],
    },
  },
];
