import { filterInstruction } from "../filter-instruction/index";

export const recalculateFilterOptions = (
  filterOptsState: any[][],
  selectedFilterOption: string | number,
  filterKeys: string[],
  filterIdx: number
) => {
  // @ts-ignore
  const filterOptionsCopy = [...filterOptsState];
  const key = filterKeys[filterIdx];

  if (filterInstruction[key].type === "sort") {
    if (filterOptionsCopy[filterIdx]?.[0] === selectedFilterOption)
      filterOptionsCopy[filterIdx] = [];
    else filterOptionsCopy[filterIdx] = [selectedFilterOption];
  } else {
    if (!Array.isArray(filterOptionsCopy[filterIdx]))
      filterOptionsCopy[filterIdx] = [selectedFilterOption];
    else {
      const valueIndex =
        filterOptionsCopy[filterIdx].indexOf(selectedFilterOption);
      if (valueIndex < 0)
        filterOptionsCopy[filterIdx].push(selectedFilterOption);
      else filterOptionsCopy[filterIdx].splice(valueIndex, 1);
    }
  }

  return filterOptionsCopy;
};
