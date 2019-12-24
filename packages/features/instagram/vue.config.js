const path = require('path');
const cwd = process.cwd();
const pkg = require(path.join(cwd, 'package.json'));

const isProd = process.env.NODE_ENV === 'production';

const peerDeps = pkg.peerDependencies ? Object.keys(pkg.peerDependencies).reduce((list, dep) => {
  list[dep] = dep;
  return list;
}, {}) : {};

module.exports = {
  // Can fix issues with declaration files
  parallel: false,
  css: {
    extract: true,
    sourceMap: !isProd,
  },
  configureWebpack: (config) => {
    config.externals = {
      ...config.externals,
      ...peerDeps,
    };

    config.module.rules.forEach((rule) => {
      if (rule.use) {
        const idx = rule.use.findIndex((w) => w.loader === 'thread-loader');
        if (idx !== -1) {
          rule.use.splice(idx, 1);
        }
      }
    });
  },
  chainWebpack: (config) => {
    // fix vue issue not generateing declartation files
    config.module.rule('ts').uses.delete('cache-loader');
    config.module
      .rule('ts')
      .use('ts-loader')
      .loader('ts-loader')
      .tap((options) => {
        // options.transpileOnly = false;
        // options.happyPackMode = false;
        return options;
      });
  },
};
