import { FC, useEffect, useState } from "react";
// import { useTranslation } from 'react-i18next';
// import { useRouter } from 'next/router';
// import { useDispatch, useSelector } from 'react-redux';

// import { FilterOpts } from '../../libs/types';
// import { textTranslate } from '../../libs/text-translation';
// import { renderItems } from '../../libs/render-items';
// import { CloseModalIcon, FilterIcon } from '@/shared/assets';
// import { FilterOptionButton } from '../FilterOptionButton';
// import { recalculateFilterOptions } from '../../libs/recalculate-filter-options';
// import { IMyMiner } from '@/entities/MyMinerCard';
// import { FilterKeys, FilterOptsState } from '../../types';
// import { existFilterOptions } from '../../libs/exist-filters-options';
// import { applyFilterOptsInQuery } from '../../libs/apply-filter-opts-in-query';
// import { applyQueryParamsInFilterOpts } from '../../libs/apply-query-params-in-filter-opts';
// import { FilterMobileHeader } from '../FilterMobileHeader';
// import { Button, SizesButton } from '@/shared/ui';
// import { IRootReducer } from '@/shared/redux';
// import { setDisableScroll, UIShowAppInfo } from '@/shared/redux/slices/UISlice';
// import { useIsMobile } from '@/shared/hooks';

// import styles from './Filter.module.css';

// interface FilterProps {
// 	filterOpts: FilterOpts;
// 	minersData: IMyMiner[];
// 	minersDataOriginal: IMyMiner[];
// 	setMinersData: (number: IMyMiner[]) => void;
// 	availableFilterOps: string[];
// }

export const Filter: FC = (
  {
    // filterOpts,
    // minersData,
    // availableFilterOps,
    // minersDataOriginal,
    // setMinersData,
  }
) => {
  <div>TEST</div>;
  // const { t } = useTranslation(['utils', 'miner-info']);
  // const router = useRouter();

  // const [filterModal, setFilterModal] = useState(false);
  // const [availableFilterOpts, setAvailableFilterOpts] = useState(availableFilterOps);
  // const [filterOptsState, setFilterOptsState] = useState<FilterOptsState>([]);

  // // constant
  // const filterKeys = Object.keys(filterOpts) as FilterKeys;
  // const textTranslateOpts = textTranslate(t);

  // // hooks
  // const isMobile = useIsMobile();
  // const dispatch = useDispatch();
  // const { showAppInfo } = useSelector((store: IRootReducer) => store.ui);

  // const openCloseModal = () => {
  // 	setFilterModal(!filterModal);
  // 	if (!isMobile) return;
  // 	if (!filterModal) {
  // 		dispatch(setDisableScroll(true));
  // 		return;
  // 	}

  // 	dispatch(setDisableScroll(false));
  // };

  // const resetFilters = () => {
  // 	window.history.pushState(null, '', '?');
  // 	setFilterOptsState([]);
  // 	setAvailableFilterOpts(availableFilterOps);
  // 	setMinersData(minersDataOriginal);
  // };

  // const updateOpts = (filterIdx: number, selectedFilterOption: string | number) => {
  // 	const newFilterOpts = recalculateFilterOptions(filterOptsState, selectedFilterOption, filterKeys, filterIdx);

  // 	setFilterOptsState(newFilterOpts);

  // 	// update query
  // 	const newQueries = applyFilterOptsInQuery(router.query, newFilterOpts, filterKeys);
  // 	const urlSearchParams = new URLSearchParams(newQueries);
  // 	window.history.pushState(null, '', '?' + urlSearchParams.toString());

  // 	const [newAvailableFilterOpts, newMinersData] = renderItems(newFilterOpts, minersDataOriginal, filterKeys);

  // 	setAvailableFilterOpts(newAvailableFilterOpts);
  // 	setMinersData(newMinersData);
  // };

  // useEffect(() => {
  // 	const filterOptionsFromQuery = applyQueryParamsInFilterOpts(router.query, filterKeys);

  // 	const [newAvailableFilterOpts, newMinersData] = renderItems(filterOptionsFromQuery, minersDataOriginal, filterKeys);

  // 	// if miners 0 or not correct query params then remove all filters and clear add query params
  // 	if (newMinersData.length === 0) {
  // 		window.history.pushState(null, '', '?');
  // 		setAvailableFilterOpts(availableFilterOps);
  // 		setMinersData(minersDataOriginal);
  // 		setFilterOptsState([]);
  // 		return;
  // 	}
  // 	setFilterOptsState(filterOptionsFromQuery);
  // 	setAvailableFilterOpts(newAvailableFilterOpts);
  // 	setMinersData(newMinersData);
  // }, []);

  return (
    <div>
      {/* <button type="button" className={styles.filter_button} onClick={() => openCloseModal()}>
				<FilterIcon />
				{t('utils:filter')}
			</button>
			{filterModal && (
				<div>
					<div className={styles.box_wrapper} style={{ top: showAppInfo === UIShowAppInfo.ACTIVE && '74px' }}>
						<FilterMobileHeader openCloseModal={openCloseModal} />
						<div style={{ padding: '24px 14px 31px' }}>
							<div className={styles.right_side}>
								<div className={styles.right_side_count_wrapper}>
									<p>
										{t('utils:count')}: {minersData.length}
									</p>
								</div>
								<div>
									<button type="button" className={styles.button_close_modal} onClick={() => openCloseModal()}>
										<CloseModalIcon color="black" />
									</button>
								</div>
							</div>
							<div>
								{filterKeys.map(
									(filterKey, filterIdx) =>
										filterOpts[filterKey].length && (
											<div key={`filter-props-${filterKey}`} style={{ marginTop: filterIdx !== 0 && '13px' }}>
												<p className={styles.filter_sub_title}>{t(`miner-info:${filterKey}`)}</p>
												<div className={styles.filter_options_scrollbar}>
													{availableFilterOpts &&
														filterOpts[filterKey].map((filterOption) => {
															return (
																// eslint-disable-next-line react/jsx-key
																<FilterOptionButton
																	updateOpts={updateOpts}
																	minersLength={minersData.length}
																	filterOpts={filterOpts}
																	availableFilterOpts={availableFilterOpts}
																	filterOption={filterOption}
																	filterIdx={filterIdx}
																	filterKey={filterKey}
																	filterOptsState={filterOptsState[filterIdx]}
																>
																	{typeof textTranslateOpts[filterKey] === 'function'
																		? textTranslateOpts[filterKey](filterOption)
																		: textTranslateOpts[filterKey][filterOption]}
																</FilterOptionButton>
															);
														})}
												</div>
											</div>
										),
								)}
							</div>
							<div className={styles.right_side}>
								<div>
									<button
										type="button"
										className={`${existFilterOptions(filterOptsState) && styles.disabled_button} ${styles.button_reset_filters}`}
										onClick={() => resetFilters()}
									>
										{t('utils:reset_filters')}
									</button>
								</div>
							</div>
							<div className={`${styles.footer} ${styles.filter_title}`}>
								<Button
									size={SizesButton.ML}
									type="button"
									onClick={() => openCloseModal()}
									style={{ maxWidth: '312px', width: '100%' }}
								>
									{t('button:show')}
								</Button>
							</div>
						</div>
					</div>
				</div>
			)} */}
    </div>
  );
};
