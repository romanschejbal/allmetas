const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	staticDirs: ['../public'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		{
			/**
			 * NOTE: fix Storybook issue with PostCSS@8
			 * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
			 */
			name: '@storybook/addon-postcss',
			options: {
				postcssLoaderOptions: {
					implementation: require('postcss'),
				},
			},
		},
	],
	core: {
		builder: 'webpack5',
	},
	webpackFinal: (config) => {
		const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
		fileLoaderRule.exclude = /\.svg$/;

		config.resolve.plugins = config.resolve.plugins || [];
		config.resolve.plugins.push(
			new TsconfigPathsPlugin({
				configFile: path.resolve(__dirname, '../tsconfig.json'),
			}),
		);

		config.module.rules.push({
			test: /\.svg$/,
			enforce: 'pre',
			loader: require.resolve('@svgr/webpack'),
		});
		/**
		 * Add support for alias-imports
		 * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
		 */
		config.resolve.alias = {
			...config.resolve?.alias,
			'@': [path.resolve(__dirname, '../src/'), path.resolve(__dirname, '../')],
		};

		/**
		 * Fixes font import with /
		 * @see https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
		 */
		config.resolve.roots = [path.resolve(__dirname, '../public'), 'node_modules'];

		return config;
	},
};
