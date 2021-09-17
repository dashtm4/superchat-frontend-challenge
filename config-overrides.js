const {
  override,
  addWebpackAlias,
  addWebpackPlugin,
} = require('customize-cra');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = override(
  addWebpackAlias({
    'src': path.resolve(__dirname, 'src/'),
    '@': path.resolve(__dirname, 'src/'),
  }),
  addWebpackPlugin(
    new TsconfigPathsPlugin(),
  ),
);
