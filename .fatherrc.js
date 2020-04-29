export default {
  entry: 'src/index.js',
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cssModules: {
    generateScopedName: 'foo-bar_[name]__[local]___[hash:base64:5]',
  },
  cjs: 'babel',
};