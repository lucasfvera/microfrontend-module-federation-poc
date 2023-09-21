/** @type {import('next').NextConfig} */
const nextConfig = {};

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
	webpack(config, options) {
		if (!options.isServer) {
			config.plugins.push(
				new NextFederationPlugin({
					name: 'posts',
					remotes: {},
					filename: 'static/chunks/remoteEntry.js',
					exposes: {
						'./Posts': './pages/index.tsx',
					},
					shared: {
						react: {
							requiredVersion: false,
							singleton: true,
						},
					},
					extraOptions: {
						skipSharingNextInternals: true,
					},
				})
			);
		}
		return config;
	},

	reactStrictMode: true,
};
