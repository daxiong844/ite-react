module.exports = {
  experiments: {
    topLevelAwait: true
  },
  webpack: {
    configure: {
      experiments: {
        topLevelAwait: true
      }
    }
  }
}

// module.exports = {
//   experimental: { appDir: true },
//   webpack(config) {
//     config.experiments = { ...config.experiments, topLevelAwait: true }
//     return config
//   }
// }
