// import { IMyMiner } from '@/entities/MyMinerCard';
import { FilterConst, filterInstruction, FilterTypes } from "../..";

export const getFilters = (
  item: any,
  filterOpts: FilterTypes.FilterOpts,
  availableFilterOps: string[]
) => {
  FilterConst.requiredFieldMiner.forEach((fieldName) => {
    const fieldValue = item[fieldName];
    if (
      (fieldValue || fieldValue === null) &&
      !filterOpts[fieldName].includes(fieldValue) &&
      (filterInstruction[fieldName].type === "filter" &&
      filterInstruction[fieldName]?.includes
        ? filterInstruction[fieldName]?.includes.includes(fieldValue)
        : true)
    ) {
      availableFilterOps.push(`${fieldName}.${fieldValue}`);
      filterOpts[fieldName].push(fieldValue);
    }
  });
};
