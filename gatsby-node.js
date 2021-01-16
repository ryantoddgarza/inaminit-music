const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
        '@resources': path.resolve(__dirname, 'src/resources/'),
        '@styles': path.resolve(__dirname, 'src/styles/'),
      },
    },
  })
};
