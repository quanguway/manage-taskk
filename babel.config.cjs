module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-typescript', {targets: {node: 'current'}}],
    ['@babel/preset-react', {targets: {node: 'current'}}] // add this
  ]
};