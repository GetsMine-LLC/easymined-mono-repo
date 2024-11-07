import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFavoritesState {
	count: number;
	update: boolean;
}

const initialState: IFavoritesState = {
	count: 0,
	update: true,
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		setCountFavorites(state, action: PayloadAction<number>) {
			state.count = action.payload;
		},
		setUpdateFavorites(state, action: PayloadAction<boolean>) {
			state.update = action.payload;
		},
	},
});

export default favoritesSlice.reducer;
export const { setCountFavorites, setUpdateFavorites } = favoritesSlice.actions;
