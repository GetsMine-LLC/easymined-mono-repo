/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ['store.getsmine.io', 'api.getsmine.io', 'new.getsmine.io', 'api-test.getsmine.io'],
	},
	i18n,
};

module.exports = nextConfig;
