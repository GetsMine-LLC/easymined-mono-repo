import { FC, ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

import { Header, IKnowledge, SideBar } from '@/widgets/KnowledgeBase';
import { Button, VariantsButton } from '@/shared/ui';
import { ChevronRight } from '@/shared/assets';

import styles from './LayoutKnowledgeBase.module.css';

interface LayoutKnowledgeBaseProps {
	children: ReactNode;
	data: IKnowledge;
	itemBySlug: boolean;
	query: ParsedUrlQuery | null;
}

export const LayoutKnowledgeBase: FC<LayoutKnowledgeBaseProps> = ({ children, data, itemBySlug, query }) => {
	const { t: translate } = useTranslation('knowledge');
	const router = useRouter();
	const categoryId = query.slugs?.[0];
	const articleSlug = query.slugs?.[1];

	const [openBurger, setOpenBurger] = useState(false);
	const [openSearch, setOpenSearch] = useState(false);

	const articles = data.articles;
	const categories = data.categories;

	const getNavigationInfo = (action: 'prev' | 'next' = 'next') => {
		if (!articles[categoryId]) {
			// eslint-disable-next-line no-console
			console.log('[SYSTEM] Error - not found articles for category id - ', categoryId);
			return;
		}

		const curIndex = articles[categoryId].findIndex((article) => article.slug === articleSlug);
		const articlesLength = articles[categoryId].length - 1;

		if (action === 'next') {
			let curCatIndex = categories.findIndex((category) => category.id === Number(categoryId));

			if (articlesLength === curIndex) {
				curCatIndex++;

				if (!categories[curCatIndex]) return { article: null, categoryId: null };

				const newArticle = articles[categories[curCatIndex].id][0];
				return { article: newArticle, categoryId: categories[curCatIndex].id };
			}

			const curArticleIndex = articles[categories[curCatIndex].id].findIndex((article) => article.slug === articleSlug);
			const newArticle = articles[categories[curCatIndex].id][curArticleIndex + 1];
			return { article: newArticle, categoryId: categories[curCatIndex].id };
		}

		if (action === 'prev') {
			let curCatIndex = categories.findIndex((category) => category.id === Number(categoryId));

			if (curIndex === 0) {
				curCatIndex--;

				if (!categories[curCatIndex]) return { article: null, categoryId: null };

				const newArticle = articles[categories[curCatIndex].id][articles[categories[curCatIndex].id].length - 1];
				return { article: newArticle, categoryId: categories[curCatIndex].id };
			}

			const curArticleIndex = articles[categories[curCatIndex].id].findIndex((article) => article.slug === articleSlug);
			const newArticle = articles[categories[curCatIndex].id][curArticleIndex - 1];
			return { article: newArticle, categoryId: categories[curCatIndex].id };
		}

		throw new Error('[SYSTEM] Undefined call props, supported - next, prev. Current - ', action);
	};

	const [prevArticle, nextArticle] = [getNavigationInfo('prev'), getNavigationInfo('next')];

	return (
		<div className={styles.content}>
			<div>
				<Header state={{ openBurger, setOpenBurger }} search={{ openSearch, setOpenSearch }} />
				<main className={`${styles.container} ${openBurger && styles.brightness} ${openSearch && styles.brightness}`}>
					<SideBar data={data} categoryId={categoryId}>
						{children}
					</SideBar>
					<div className={styles.wrapper}>
						{' '}
						<div className={`${styles.answer} ${!itemBySlug ? styles.center : ''} `}>{children}</div>
						{itemBySlug ? (
							<div className={styles.buttonWrapper}>
								{!prevArticle?.article ? (
									<></>
								) : (
									<Button
										variant={VariantsButton.LIGHT_BLUE}
										className={`${styles.button}`}
										onClick={() => {
											router.push(`/${prevArticle.categoryId}/${prevArticle.article.slug}`, undefined, {
												shallow: false,
											});
										}}
									>
										<div className={styles.left}>
											<ChevronRight />
										</div>
										<div className={`${styles.buttonContent} `}>
											<p>{translate('Back')}</p>
											<p>{prevArticle.article.title}</p>
										</div>
									</Button>
								)}
								{!nextArticle?.article ? (
									<></>
								) : (
									<Button
										variant={VariantsButton.LIGHT_BLUE}
										className={`${styles.button} ${styles.buttonRevert}`}
										onClick={() => {
											router.push(`/${nextArticle.categoryId}/${nextArticle.article.slug}`, undefined, {
												shallow: false,
											});
										}}
									>
										<ChevronRight />
										<div className={`${styles.buttonContent} ${styles.buttonContentRevert}`}>
											<p>{translate('Next')}</p>
											<p>{nextArticle.article.title}</p>
										</div>
									</Button>
								)}
							</div>
						) : null}
					</div>
				</main>
			</div>
		</div>
	);
};
