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
						'./posts': './pages/index.tsx',
						'./BannerNext': './components/BannerNext.js',
					},
					shared: {},
					extraOptions: {
						exposePages: true,
					},
				})
			);
		}
		return config;
	},

	reactStrictMode: true,
};
