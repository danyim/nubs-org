/* eslint-disable */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const slash = require('slash');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        Components: path.resolve(__dirname, 'src/components'),
        Constants: path.resolve(__dirname, 'src/constants'),
        Images: path.resolve(__dirname, 'src/images'),
        Utils: path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};
