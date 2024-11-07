import { FilterOpts } from '../types';
import { filterInstruction } from '../filter-instruction/index';

export const checkOnDisabled = (
	minersLength: number,
	filterOpts: FilterOpts,
	key: string,
	idx: number,
	fieldName: string,
	availableFilterOpts: string[],
) => {
	// more readable in few lines
	if (filterOpts[idx]?.includes(key)) return false;
	if (minersLength === 0) return true;
	if (filterInstruction[fieldName].type === 'sort') return false;
	if (availableFilterOpts.includes(`${fieldName}.${key}`)) return false;
	return true;
};
