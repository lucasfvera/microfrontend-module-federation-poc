const { ModuleFederationPlugin } = require('webpack').container;

const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

/**
 * @returns {string}
 */
function getPublicPath() {
	let publicPath = 'auto';
	const providedPath = process.env.PUBLIC_URL;

	if (
		providedPath &&
		providedPath.length >= 0 &&
		providedPath.startsWith('http')
	) {
		publicPath = providedPath.endsWith('/')
			? providedPath
			: providedPath + '/';
	} else {
		console.error('Invalid provided path or non existent');
	}
	return publicPath;
}

const override = (config) => {
	config.plugins.push(
		new ModuleFederationPlugin(require('../../modulefederation.config.js'))
	);

	config.output.publicPath = 'http://localhost:3000/';

	return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = (env) =>
	override(webpackConfig(env));

module.exports = require(webpackConfigPath);
