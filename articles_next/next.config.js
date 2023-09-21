/** @type {import('next').NextConfig} */
const nextConfig = {};

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
	webpack(config, options) {
		if (!options.isServer) {
			config.plugins.push(
				new NextFederationPlugin({
					name: 'articles',
					remotes: {
						homeApp: 'homeApp@http://localhost:3002/remoteEntry.js',
					},
					filename: 'static/chunks/remoteEntry.js',
					exposes: {},
					shared: {},
					extraOptions: {},
				})
			);
		}
		return config;
	},
	...nextConfig,
	reactStrictMode: true,
};
