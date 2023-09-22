const { dependencies } = require('./package.json');

module.exports = {
	name: 'host',
	remotes: {
		home: 'homeApp@http://localhost:3002/remoteEntry.js',
		posts: 'posts@http://localhost:3003/_next/static/chunks/remoteEntry.js',
	},
	shared: {
		...dependencies,
		react: {
			singleton: true,
			eager: true,
			requiredVersion: dependencies['react'],
		},
		'react-dom': {
			singleton: true,
			requiredVersion: dependencies['react-dom'],
		},
	},
};
