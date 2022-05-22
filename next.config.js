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
		);
		return config;
	},
};
