import { FilterOpts } from './types';

export const requiredFieldMiner = ['part', 'status', 'turbo_mode'];

export const defaultFilterOpts: FilterOpts = {
	part: [],
	cost: ['expensive', 'cheap'], //sort
	status: [],
	turbo_mode: [],
	efficiency: ['more', 'less'], //sort
	payback_percent: ['more', 'less'], //sort
};
