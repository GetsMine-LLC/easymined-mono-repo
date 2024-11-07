export const existFilterOptions = (filterOpts: any[][]) => {
	let exist = true;
	for (const key of filterOpts) {
		if (key && Array.isArray(key) && key.length) {
			exist = false;
			break;
		}
	}
	return exist;
};
