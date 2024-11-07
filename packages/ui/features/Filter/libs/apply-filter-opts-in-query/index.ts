import { FilterKeys, FilterOptsState } from '../../types/index';

export const applyFilterOptsInQuery = (queryOptions: object, filterOpts: FilterOptsState, filterKeys: FilterKeys) => {
	const queryOptionsCopy = { ...queryOptions };
	for (const idx in filterKeys) {
		delete queryOptionsCopy[filterKeys[idx]];
		if (filterOpts[idx] && Array.isArray(filterOpts[idx]) && filterOpts[idx].length) {
			if (filterOpts[idx].includes(null)) {
				queryOptionsCopy[filterKeys[idx]] = filterOpts[idx].map((el) => String(el)).join(',');
				continue;
			}
			queryOptionsCopy[filterKeys[idx]] = filterOpts[idx].join(',');
		}
	}
	return queryOptionsCopy;
};
