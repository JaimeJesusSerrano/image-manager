module.exports = [
  ['use-babel-config', '.babelrc'],
  config => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    })
    return config
  },
]
