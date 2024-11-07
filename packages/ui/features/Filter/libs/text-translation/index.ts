// import { TFunction } from 'next-i18next';

export const textTranslate = (t: any) => {
	return {
		part: (part: number) => {
			if (part === 100) return t('miner-info:full_miner');
			return `1 / ${100 / part}`;
		},
		cost: {
			expensive: t('utils:expensive'),
			cheap: t('utils:cheap'),
		}, //sort
		status: {
			turbo_mode_on: t('miner-info:turbo_mode_on'),
			started: t('miner-info:started'),
			preorder: t('miner-info:preorder'),
			stopped: t('miner-info:stopped'),
			stopping: t('miner-info:stopping'),
			freezed: t('miner-info:freezed'),
		},
		turbo_mode: {
			true: t('utils:enabled'),
			null: t('utils:disabled'),
		},
		efficiency: {
			more: t('utils:more'),
			less: t('utils:less'),
		}, //sort
		payback_percent: {
			more: t('utils:more'),
			less: t('utils:less'),
		}, //sort,
	};
};
