import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface INotitificationsState {
	subscribe: boolean;
}

const initialState: INotitificationsState = {
	subscribe: false,
};

const notificationsSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		setSubscribe(state, action: PayloadAction<boolean>) {
			state.subscribe = action.payload;
		},
	},
});

export default notificationsSlice.reducer;
export const { setSubscribe } = notificationsSlice.actions;
