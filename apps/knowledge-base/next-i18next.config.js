module.exports = {
	i18n: {
		defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'ru',
		locales: (process.env.NEXT_PUBLIC_LOCALES || 'ru').split(','),
	},
};
