import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ParsedUrlQuery } from 'querystring';
import { FC } from 'react';
import Head from 'next/head';

import { EmptyInfo } from '@/entities/EmptyInfo';
import { Container, IDataKnowledgeById, IKnowledge, getKnowledge, getKnowledgeById } from '@/widgets/KnowledgeBase';
import { LayoutKnowledgeBase } from '@/widgets/Layout';

interface IKnowledgeBaseProps {
	data: IKnowledge;
	dataBySlug: IDataKnowledgeById;
	query: ParsedUrlQuery | null;
}

const KnowledgeBase: FC<IKnowledgeBaseProps> = ({ data, query, dataBySlug }) => {
	const { t: translate } = useTranslation('knowledge');

	return (
		<LayoutKnowledgeBase data={data} itemBySlug={!!dataBySlug} query={query}>
			<Head>
				<title>{dataBySlug.title}</title>
				<meta name="description" content="GetsMine Knowelage Base" />
			</Head>
			{dataBySlug ? (
				<Container data={dataBySlug} />
			) : (
				<EmptyInfo
					style={{
						minWidth: '40%',
						padding: '30px',
						textAlign: 'center',
					}}
					info={translate('Article not found')}
				/>
			)}
		</LayoutKnowledgeBase>
	);
};

export default KnowledgeBase;

export const getServerSideProps: GetServerSideProps = async ({ locale, query }) => {
	const translations = locale && (await serverSideTranslations(locale, ['knowledge']));

	const checkQuery = Number(query.slugs?.[0]);

	try {
		const response = await getKnowledge(locale);
		const data = response.data.data;
		const getFirstIndexArticle = Object.keys(data.articles)[0];
		const getFirstSlugArticle = data.articles[getFirstIndexArticle][0];

		if (!query.slugs?.length || isNaN(checkQuery)) {
			const destination = `/${getFirstSlugArticle.category}/${getFirstSlugArticle.slug}`;
			return {
				redirect: {
					destination,
					permanent: true,
				},
			};
		}

		const responseID = await getKnowledgeById(query.slugs[1], locale);
		const dataBySlug = responseID.data.data;

		return { props: { data, query, dataBySlug: dataBySlug, ...translations } };
	} catch (error: any) {
		return { props: { data: null, query: null, dataBySlug: null, ...translations } };
	}
};
