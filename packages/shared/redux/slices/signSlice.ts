import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ITypeModalState = 'sign_in' | 'sign_up' | null

export interface ISignState {
	openModal: boolean;
	type?: ITypeModalState
}

const initialState: ISignState = {
	openModal: false,
	type: null
};

const signSlice = createSlice({
	name: 'sign',
	initialState,
	reducers: {
		setOpenModalSign(state, action: PayloadAction<{ status: boolean, type?: ITypeModalState }>) {
			state.openModal = action.payload.status;
			state.type = action.payload.type
		},
	},
});

export default signSlice.reducer;
export const { setOpenModalSign } = signSlice.actions;
