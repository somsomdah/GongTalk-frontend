module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo',],
    plugins:
      [
        ['react-native-reanimated/plugin'],
        [
          // https://github.com/tleunen/babel-plugin-module-resolver
          // https://github.com/tleunen/babel-plugin-module-resolver/issues/332#issuecomment-439346463
          // https://gist.github.com/nodkz/41e189ff22325a27fe6a5ca81df2cb91
      
          // require.resolve('babel-plugin-module-resolver'),
          "module-resolver",
          {
            root: ['./'],
            alias: {
              env: './environment',
              components: './src/components',
              screens: './src/screens',
              navigations: './src/navigations',
              colors: './src/common/colors',
              images: './src/common/colors',
      
            },
          }]
      ]
  };
};
