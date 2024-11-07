// import { IMyMiner } from '@/entities/MyMinerCard';

export const getAvailableFilters = (items: any[]) => {
	const availableFilters: string[] = [];

	const innerMiner = [
		{ fieldName: 'part', newFieldName: 'part' },
		{ fieldName: 'status', newFieldName: 'status' },
		{ fieldName: 'turbo_mode', newFieldName: 'turbo_mode' },
	];
	for (const item of items) {
		innerMiner.forEach((el) => {
			const fieldValue = item[el.fieldName];
			if (!availableFilters.includes(`${el.newFieldName}.${fieldValue}`)) {
				availableFilters.push(`${el.newFieldName}.${fieldValue}`);
			}
		});
	}

	return availableFilters;
};
