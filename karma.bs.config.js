/* eslint-env node */
const merge = require('webpack-merge'),
	bsSettings = require('@open-wc/testing-karma-bs/bs-settings.js'),
	createBaseConfig = require('./karma.conf.js');

module.exports = config => {
	config.set(
		merge(bsSettings(config), createBaseConfig(config), {
			browserStack: {
				project: 'your-name'
			}
		}),
	);

	return config;
};
