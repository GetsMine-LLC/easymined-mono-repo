export interface IInitialKnowledge {
	status: string;
	data: IKnowledge;
}
export interface IInitialKnowledgeById {
	status: string;
	data: IDataKnowledgeById;
}
export interface IKnowledge {
	articles: {
		[key: string]: IDataKnowledge[];
	};
	categories: {
		id: number;
		slug: string;
		title: string;
	}[];
}
export interface IDataKnowledge {
	id: number;
	slug: string;
	title: string;
	category: string;
}
export interface IDataKnowledgeById {
	body: string;
	image_url: string;
	title: string;
}
