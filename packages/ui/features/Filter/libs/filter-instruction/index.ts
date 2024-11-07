export type FilterInstruction = {
	[x: string]: {
		type: 'filter' | 'sort';
		includes?: string[];
		mode?: 'reverse' | 'default';
	};
};

export const filterInstruction: FilterInstruction = {
	part: {
		type: 'filter',
	},
	cost: {
		type: 'sort',
	},
	status: {
		type: 'filter',
		includes: ['started', 'stopped', 'blocked', 'freezed'],
	},
	turbo_mode: {
		type: 'filter',
	},
	efficiency: {
		type: 'sort',
		mode: 'reverse',
	},
	payback_percent: {
		type: 'sort',
	},
};
