const { dependencies } = require('./package.json');

module.exports = {
	name: 'homeApp',
	exposes: {
		'./App': './src/App',
		'./Card': './src/components/Card',
	},
	filename: 'remoteEntry.js',
	shared: {
		...dependencies,
		react: {
			singleton: true,
			requiredVersion: dependencies['react'],
		},
		'react-dom': {
			singleton: true,
			requiredVersion: dependencies['react-dom'],
		},
	},
};
