import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum UIShowAppInfo {
	ACTIVE = 'ACTIVE',
	DISABLE = 'DISABLE',
	INACTIVE = 'INACTIVE',
}

export interface IUIState {
	showAppInfo: UIShowAppInfo;
	showWelcomeModal: boolean;
	showMarketplaceAgreement: boolean;
	disableScroll: boolean;
}

const initialState: IUIState = {
	showAppInfo: UIShowAppInfo.INACTIVE,
	showWelcomeModal: false,
	showMarketplaceAgreement: true,
	disableScroll: false,
};

const UISlice = createSlice({
	name: 'UI',
	initialState,
	reducers: {
		setShowAppInfo(state, action: PayloadAction<UIShowAppInfo>) {
			state.showAppInfo = action.payload;
		},
		setShowWelcomeModal(state, action: PayloadAction<boolean>) {
			state.showWelcomeModal = action.payload;
		},
		setShowMarketplaceAgreement(state, action: PayloadAction<boolean>) {
			state.showMarketplaceAgreement = action.payload;
		},
		setDisableScroll(state, action: PayloadAction<boolean>) {
			state.disableScroll = action.payload;
		},
	},
});

export default UISlice.reducer;
export const { setShowAppInfo, setShowWelcomeModal, setShowMarketplaceAgreement, setDisableScroll } = UISlice.actions;
