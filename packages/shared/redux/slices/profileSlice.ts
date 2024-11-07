import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserType = 'persona' | 'company';
interface IProfileData {
	email: string;
	confirmed_at: string | null;
	phone_confirmed_at?: string | null;
	user_hash?: string;
	address?: string;
	company_name?: string | null;
	company_tax_id?: string | null;
	country?: string;
	first_name?: string;
	last_name?: string;
	phone?: string;
	test_period?: boolean;
	user_tax_id?: string;
	user_type: UserType;
}

export interface IProfileState {
	data: IProfileData | null;
	impersonation: boolean;
	walletConfirm: boolean;
	showAnimation: boolean;
}

const initialState: IProfileState = {
	data: null,
	impersonation: false,
	walletConfirm: false,
	showAnimation: true,
};

const profileSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setDataProfile(state, action: PayloadAction<IProfileData | null>) {
			state.data = action.payload;
		},
		setShowAnimationProfile(state, action: PayloadAction<boolean>) {
			state.showAnimation = action.payload;
		},
		setShowImpersonation(state, action: PayloadAction<boolean>) {
			state.impersonation = action.payload;
		},
		setShowWalletConfirm(state, action: PayloadAction<boolean>) {
			state.walletConfirm = action.payload;
		},
		changeUserProfileType(state, action: PayloadAction<UserType>) {
			if (state.data) {
				state.data.user_type = action.payload;
			}
		},
		resetProfileState(state) {
			state = {
				data: null,
				impersonation: false,
				walletConfirm: false,
				showAnimation: true,
			};
		},
	},
});

export default profileSlice.reducer;
export const {
	setDataProfile,
	setShowAnimationProfile,
	setShowWalletConfirm,
	setShowImpersonation,
	changeUserProfileType,
	resetProfileState,
} = profileSlice.actions;
export type { UserType };
