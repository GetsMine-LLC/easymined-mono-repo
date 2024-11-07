import { axios } from '@/shared/lib';
import { IInitialKnowledge, IInitialKnowledgeById } from '../types';

export const getKnowledge = async (locale: string) => {
	const response = await axios.get<IInitialKnowledge>(`/api/v1/knowledge_base?locale=${locale}`);
	return response;
};
export const getKnowledgeById = async (slug: string | string[], locale: string) => {
	const response = await axios.get<IInitialKnowledgeById>(`/api/v1/knowledge_base/${slug}?locale=${locale}`);
	return response;
};
export const getKnowledgeBySearch = async (search: string, locale: string) => {
	const response = await axios.post<any>(`/api/v1/knowledge_base/search?query=${search}&locale=${locale}`);
	return response;
};
