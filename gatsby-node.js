const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: { fs: 'empty' },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
  });
};
