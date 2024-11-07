import { toast } from 'react-toastify';
import { i18n } from 'next-i18next';

import { RIGHT_TO_LEFT_LANGS } from '@/shared/constants';

interface IShowToast {
	message: string | undefined;
	status: string;
	timer?: number | false;
}

export const showToast = ({ message, status, timer = 5000 }: IShowToast) => {
	const originalKey = `toast:${message}`;
	const sanitizedKey = originalKey.replace(/ /g, '_').replace(',', '');

	const currentLocale = i18n?.language;
	const rtl = currentLocale && RIGHT_TO_LEFT_LANGS.includes(currentLocale);

	const translatedMessage = i18n?.t(sanitizedKey);
	if (status === 'ok') {
		toast.success(translatedMessage, {
			theme: 'colored',
			position: rtl ? 'top-left' : 'top-right',
			autoClose: timer,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	} else if (status === 'error') {
		toast.error(translatedMessage, {
			theme: 'colored',
			position: rtl ? 'top-left' : 'top-right',
			autoClose: timer,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
		});
	} else if (status === 'warn') {
		toast.warn(translatedMessage, {
			theme: 'colored',
			position: rtl ? 'top-left' : 'top-right',
			autoClose: timer,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
		});
	}
};
