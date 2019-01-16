const path = require("path");

module.exports = (storybookBaseConfig) => {
  storybookBaseConfig.module.rules.push({
    resolve: {
      alias: {
        components: path.resolve(__dirname, '../src/components/'),
        utils: path.resolve(__dirname, '../src/utils/')
      }
    }
  });

  return storybookBaseConfig;
};