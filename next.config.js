const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	experimental: {
		reactRoot: true,
	},
	eslint: {
		dirs: ['src'],
	},
	webpack(config) {
		config.module.rules.push(
			{
				test: /\.svg$/,
				use: '@svgr/webpack',
			},
			{
				resolve: {
					alias: {
						'/images': path.resolve(__dirname, 'public/images'),
					},
				},
			},
			{
				test: /\.stories\.jsx?$/,
				use: [
					{
						loader: require.resolve('storybook-addon-package-json/loader'),
					},
				],
			},
		);
		return config;
	},
};
