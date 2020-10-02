const webpack = require('webpack')
const config = require('./webpack.config')

const build = () => {
  return new Promise((resolve, reject) => {
    webpack(config(), (err, stats) => {
      if (err) reject(err)
      else if (stats.hasErrors()) reject(new Error(stats.toString({ colors: true })))
      else resolve()
    })
  })
}

module.exports = build
