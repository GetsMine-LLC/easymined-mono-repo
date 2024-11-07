import { FC, useState, useRef, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';

import { useOnClickOutside } from '@/shared/lib';
import { EnFlag, RuFlag, HeFlag, DeFlag, UaFlag } from '@/shared/assets';

import styles from './SelectLanguage.module.css';

const renderFlag = (locale: string | undefined): StaticImageData => {
	switch (locale) {
		case 'ru':
			return RuFlag;
		case 'en':
			return EnFlag;
		default:
			return RuFlag;
	}
};

const renderLanguage = (locale: string | undefined): string => {
	switch (locale) {
		case 'ru':
			return 'Russian';
		case 'en':
			return 'English';
		default:
			return '';
	}
};

const renderReducedLanguage = (locale: string | undefined): string => {
	switch (locale) {
		case 'ru':
			return 'Ru';
		case 'en':
			return 'En';
		default:
			return '';
	}
};

interface SelectLanguageProps {
	reverse?: boolean;
	mobile?: boolean;
	setOpenMenu?: Dispatch<SetStateAction<boolean>>;
	base?: boolean;
}

export const SelectLanguage: FC<SelectLanguageProps> = ({ reverse, mobile, setOpenMenu, base }) => {
	const { locale, locales, asPath } = useRouter();

	const [open, setOpen] = useState<boolean>(false);

	const ref = useRef(null);

	useOnClickOutside(ref, () => setOpen(false));

	const onChangeLanguage = (l: string) => {
		setCookie('NEXT_LOCALE', l);
		setOpen(false);
		if (setOpenMenu) {
			setOpenMenu(false);
		}
	};

	return locales && locales.length > 1 ? (
		<div className={styles.wrapper} ref={ref}>
			<div className={styles.summary} onClick={() => setOpen((prev) => !prev)}>
				<div className={styles.flag}>
					<Image src={renderFlag(locale)} alt="en" />
				</div>
				<p>{locale && renderReducedLanguage(locale)}</p>
				<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
					<path d="M1 1.54492L6 6.54492L11 1.54492" stroke="black" strokeOpacity="0.24" strokeWidth="2" />
				</svg>
			</div>
			{open && (
				<div
					className={`${
						mobile ? styles.detalsMobile : reverse ? styles.detalsReverse : base ? styles.base : styles.detals
					}`}
				>
					{locales?.map((l) => (
						<Link key={l} className={styles.item} href={asPath} locale={l} onClick={() => onChangeLanguage(l)}>
							<div className={styles.summary}>
								<div className={styles.flag}>
									<Image src={renderFlag(l)} alt="en" />
								</div>
								<p>{renderLanguage(l)}</p>
							</div>
						</Link>
					))}
				</div>
			)}
		</div>
	) : (
		<></>
	);
};
