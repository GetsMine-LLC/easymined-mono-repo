import { i18n } from 'next-i18next';
import { useRouter } from 'next/router';
import { FC, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';

import { SelectLanguage } from '@/features/Language';
import { BlueCircleLogoIcon, CloseIcon, EasyLogo, LinesIcon, SearchIcon } from '@/shared/assets';
import { useOnClickOutside } from '@/shared/lib';
import { Button, Input, VariantsButton } from '@/shared/ui';
import { getKnowledgeBySearch } from '../../lib';

import styles from './Header.module.css';
import Image from 'next/image';

interface IHeaderProps {
	state: {
		openBurger: boolean;
		setOpenBurger: (value: boolean) => void;
	};
	search: {
		openSearch: boolean;
		setOpenSearch: (value: boolean) => void;
	};
}

export const Header: FC<IHeaderProps> = ({ state, search }) => {
	const [searchMenu, setSearchMenu] = useState([]);
	const [openSearchMenu, setOpenSearchMenu] = useState(false);
	const { t: translate } = useTranslation('knowledge');
	const router = useRouter();
	const { openBurger, setOpenBurger } = state;
	const { openSearch, setOpenSearch } = search;
	const ref = useRef(null);
	const ref1 = useRef(null);
	const searchRef = useRef(null);
	useOnClickOutside(ref, () => setOpenBurger(false));
	useOnClickOutside(ref1, () => setOpenSearch(false));
	useOnClickOutside(searchRef, () => setOpenSearchMenu(false));

	const handleSearch = async (search: string) => {
		if (search.length < 3) {
			setOpenSearchMenu(false);
			return;
		}
		const response = await getKnowledgeBySearch(search, i18n.language);
		setSearchMenu(response.data.data);
		if (response.data.data.length) {
			setOpenSearchMenu(true);
		}
	};

	return (
		<header className={`${styles.header} ${openBurger && styles.reverse}`}>
			<div className={styles.container}>
				{!openSearch && (
					<div className={styles.burgerMenu} onClick={() => setOpenBurger(!openBurger)}>
						{!openBurger ? <LinesIcon /> : <CloseIcon />}
					</div>
				)}
				<div className={`${styles.menuContainer} ${openBurger ? styles.open : ''}`} ref={ref}>
					<SelectLanguage setOpenMenu={setOpenBurger} base={true} />
					<div className={styles.buttonWrapper}>
						<Button
							variant={VariantsButton.OUTLINE}
							className={styles.button}
							onClick={() => router.push(`${process.env.NEXT_PUBLIC_PLATFORM_URI}/`)}
						>
							{translate('Home')}
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.title}>
				{/* <BlueCircleLogoIcon /> */}
				<div
					style={{
						width: 60,
						height: 60,
					}}
				>
					<Image layout="responsive" width={60} height={50} alt="Logo" src={EasyLogo} />
				</div>
				<div className={styles.name}>
					<p>
						{translate('Knowledge Base')} <span>EasyMined</span>
					</p>
				</div>
			</div>
			<search className={styles.search}>
				<SearchIcon />
				<Input
					className={styles.input}
					placeholder={translate('Search')}
					onChange={(e) => handleSearch(e.target.value)}
				/>
				{openSearchMenu && searchMenu.length ? (
					<div className={styles.searchMenu} ref={searchRef}>
						{searchMenu.map((el, idx) => (
							<div
								key={idx}
								className={styles.elementMenu}
								onClick={() => {
									setOpenSearchMenu(false);
									const newUrl = `/${el.category.id}/${el.slug}`;
									router.push(newUrl, undefined, { shallow: false });
								}}
							>
								{el.title}
							</div>
						))}
					</div>
				) : null}
			</search>
			<div className={styles.rightBlock}>
				<Button
					className={styles.buttonWrapper}
					onClick={() => router.push(`${process.env.NEXT_PUBLIC_PLATFORM_URI}/`)}
				>
					{translate('Home')}
				</Button>
				<SelectLanguage setOpenMenu={setOpenBurger} />
			</div>

			{!openSearch && !openBurger ? (
				<>
					<div className={styles.searchMobile} onClick={() => setOpenSearch(!openSearch)}>
						<SearchIcon />
					</div>
				</>
			) : (
				<div className={styles.mobile}></div>
			)}
			{openSearch && (
				<div className={`${styles.menuSearch} ${openSearch ? styles.open : ''}`} ref={ref1}>
					<search className={styles.searchBurger}>
						<SearchIcon />
						<Input
							className={styles.input}
							placeholder={translate('Search')}
							onChange={(e) => handleSearch(e.target.value)}
						/>
					</search>
					{openSearchMenu && searchMenu.length ? (
						<div className={styles.searchMenuMobile}>
							<div className={styles.searchMenu} ref={searchRef}>
								{searchMenu.map((el, idx) => (
									<div
										className={styles.elementMenu}
										key={idx}
										onClick={() => {
											setOpenSearchMenu(false);
											const newUrl = `/knowledge-base/${el.category.id}/${el.slug}`;
											router.push(newUrl, undefined, { shallow: true });
										}}
									>
										{el.title}
									</div>
								))}
							</div>
						</div>
					) : null}
				</div>
			)}
		</header>
	);
};
