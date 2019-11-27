{
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  output: {
    path: '/Users/stanleyxu/Documents/ff/google/dist',
    filename: 'js/[name].[hash:8].js',
    publicPath: '',
    library: 'other',
    libraryTarget: 'umd'
  },
  resolve: {
    alias: {
      '@': '/Users/stanleyxu/Documents/ff/google/src',
      '@P': '/Users/stanleyxu/Documents/ff/google/src/pages',
      '@A': '/Users/stanleyxu/Documents/ff/google/src/asset'
    },
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
      '.vue',
      '.jsx'
    ]
  },
  module: {
    rules: [
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        use: [
          /* config.module.rule('less').use('mini') */
          {
            loader: '/Users/stanleyxu/Documents/ff/google/node_modules/mini-css-extract-plugin/dist/loader.js',
            options: {
              hmr: true,
              fallback: {
                loader: '/Users/stanleyxu/Documents/ff/google/node_modules/style-loader/dist/index.js',
                options: {
                  singleton: true
                }
              }
            }
          },
          /* config.module.rule('less').use('css') */
          {
            loader: 'css-loader'
          },
          /* config.module.rule('less').use('postcss') */
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: function () { /* omitted long function */ }
            }
          },
          /* config.module.rule('less').use('less') */
          {
            loader: 'less-loader'
          },
          /* config.module.rule('less').use('style-resources-loader') */
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                '/Users/stanleyxu/Documents/ff/google/node_modules/easy-plugins-less/assets/variables/*.less',
                '/Users/stanleyxu/Documents/ff/google/node_modules/easy-plugins-less/assets/variables/*.scss'
              ],
              injector: 'append'
            }
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.s[ac]ss$/i,
        use: [
          /* config.module.rule('sass').use('mini') */
          {
            loader: '/Users/stanleyxu/Documents/ff/google/node_modules/mini-css-extract-plugin/dist/loader.js',
            options: {
              hmr: true,
              fallback: {
                loader: '/Users/stanleyxu/Documents/ff/google/node_modules/style-loader/dist/index.js',
                options: {
                  singleton: true
                }
              }
            }
          },
          /* config.module.rule('sass').use('css') */
          {
            loader: 'css-loader'
          },
          /* config.module.rule('sass').use('postcss') */
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: function () { /* omitted long function */ }
            }
          },
          /* config.module.rule('sass').use('sass') */
          {
            loader: 'sass-loader'
          },
          /* config.module.rule('sass').use('style-resources-loader') */
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                '/Users/stanleyxu/Documents/ff/google/node_modules/easy-plugins-sass/asset/variables/*.less',
                '/Users/stanleyxu/Documents/ff/google/node_modules/easy-plugins-sass/asset/variables/*.scss'
              ],
              injector: 'append'
            }
          }
        ]
      },
      /* config.module.rule('babel') */
      {
        test: /\.js|jsx|mjs$/,
        include: [
          '/Users/stanleyxu/Documents/ff/google/src'
        ],
        exclude: [
          /(node_modules|bower_components)/
        ],
        use: [
          /* config.module.rule('babel').use('babel') */
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-proposal-class-properties',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-transform-react-jsx-self'
              ]
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          /* config.module.rule('images').use('urlloader') */
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              quality: 85,
              name: 'images/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        test: /\.js$/,
        enforce: 'pre',
        include: [
          '/Users/stanleyxu/Documents/ff/google/node_modules/src'
        ],
        exclude: [
          /(node_modules|bower_components)/
        ],
        use: [
          /* config.module.rule('eslint').use('eslint-loader') */
          {
            loader: 'eslint-loader',
            options: {
              formatter: function () { /* omitted long function */ }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    /* config.plugin('MiniCssExtractPlugin') */
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ),
    /* config.plugin('OptimizeCssAssetsPlugin') */
    new OptimizeCssAssetsWebpackPlugin(
      {
        cssProcessorOptions: {
          parser: function () { /* omitted long function */ }
        }
      }
    ),
    /* config.plugin('htmlwebpackplugin') */
    new HtmlWebpackPlugin(
      {
        inject: true,
        template: '/Users/stanleyxu/Documents/ff/google/public/index.html',
        favicon: '/Users/stanleyxu/Documents/ff/google/public/favicon.ico'
      }
    ),
    /* config.plugin('HotModuleReplacementPlugin') */
    new HotModuleReplacementPlugin()
  ],
  entry: {
    index: [
      '/Users/stanleyxu/Documents/ff/google/src/index.js'
    ]
  }
}