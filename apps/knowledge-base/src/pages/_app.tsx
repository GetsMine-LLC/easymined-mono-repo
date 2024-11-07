import { appWithTranslation } from 'next-i18next';
import { DM_Sans, Open_Sans } from 'next/font/google';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import { getCookie } from 'cookies-next';

import { RIGHT_TO_LEFT_LANGS } from '@/shared/constants';
import type { AppProps } from 'next/app';
import '@/app/styles/globals.css';

const dm_sans = DM_Sans({ style: 'normal', subsets: ['latin'], weight: '500' });
const open_sans = Open_Sans({ style: 'normal', subsets: ['latin'], weight: '500' });

function MyApp({ Component, ...props }: AppProps) {
	const { locale } = useRouter();

	const token = getCookie('jwt');
	return (
		<>
			<NextNProgress color="var(--primary-hex)" options={{ showSpinner: false }} />
			<div
				className={`${locale && RIGHT_TO_LEFT_LANGS.includes(locale) ? 'body-rtl' : 'body-ltr'} ${
					locale == 'en' ? dm_sans.className : open_sans.className
				}`}
			>
				<div id="portal" />
				<Component {...props.pageProps} />
			</div>
		</>
	);
}

export default appWithTranslation(MyApp);
