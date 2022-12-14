module.exports = {
  stories: [
    "../packages/**/*.stories.@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          postcssOptions: {
            config: './postcss.config.js',
          },
          implementation: require('postcss'),
        },
      },
    }
  ],
  core: {
    builder: 'webpack5',
  },
  framework: "@storybook/react"
}