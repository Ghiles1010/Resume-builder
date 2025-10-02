// vue.config.js
module.exports = {
    css: {
        extract: false,
    },
    configureWebpack: {
      optimization: {
        splitChunks: false // makes there only be 1 js file - leftover from earlier attempts but doesn't hurt
      }
    }
  }