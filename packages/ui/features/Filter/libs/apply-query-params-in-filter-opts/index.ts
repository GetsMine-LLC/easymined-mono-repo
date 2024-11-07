import { FilterKeys } from "../../types/index";

export const applyQueryParamsInFilterOpts = (queryParams: object, filterKeys: FilterKeys) => {
	const newFilterOpts = [];
	for (const [queryKey, queryValue] of Object.entries(queryParams)) {
		const filterKeyIdx = filterKeys.indexOf(queryKey);
		if (filterKeyIdx === -1) continue;
		newFilterOpts[filterKeyIdx] = queryValue.split(',').reduce((prev, cur) => {
			const parseNumber = ~~cur;
			if (parseNumber) prev.push(parseNumber);
			else if (cur === 'null') prev.push(null);
			else prev.push(cur);
			return prev;
		}, []);
	}
	return newFilterOpts;
};
