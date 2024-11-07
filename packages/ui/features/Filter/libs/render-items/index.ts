import { filterInstruction } from "../filter-instruction/index";
import { getAvailableFilters } from "../get-available-filters/index";

const compare = (
  mode: "default" | "reverse",
  type: string,
  a: number,
  b: number
) => {
  if (mode === "reverse") {
    if (["more", "expensive"].includes(type)) {
      if (a === b) return 0;
      if (a > b) return 1;
      if (a < b) return -1;
    }
    if (a === b) return 0;
    if (a < b) return 1;
    if (a > b) return -1;
  }
  if (["more", "expensive"].includes(type)) {
    if (a === b) return 0;
    if (a < b) return 1;
    if (a > b) return -1;
  }
  if (a === b) return 0;
  if (a > b) return 1;
  if (a < b) return -1;
};

export function renderItems(
  filters: any[][],
  minersDataOriginal: any[],
  filterKeys: string[]
): [string[], any[]] {
  // @ts-ignore
  let minersDataCopy = [...minersDataOriginal];
  for (const keyIdx in filterKeys) {
    const key = filterKeys[keyIdx];

    if (filterInstruction[key].type === "filter" && filters[keyIdx]?.length) {
      minersDataCopy = minersDataCopy.filter((el) =>
        filters[keyIdx].includes(el[key])
      );
    }
  }

  minersDataCopy.sort((a, b) => {
    for (const keyIdx in filterKeys) {
      const key = filterKeys[keyIdx];
      if (filterInstruction[key].type === "sort" && filters[keyIdx]?.length) {
        const result = compare(
          filterInstruction[key].mode,
          filters[keyIdx][0],
          Number(a[key]),
          Number(b[key])
        );
        if (result === 0) continue;
        return result;
      }
    }
    return 0;
  });

  const data = getAvailableFilters(minersDataCopy);
  return [data, minersDataCopy];
}
