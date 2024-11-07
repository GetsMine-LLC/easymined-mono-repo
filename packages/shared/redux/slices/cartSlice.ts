import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

// import { any } from '@/features/Cart/lib';

export type TTypeCartItemCountChange = 'increment' | 'decriment';

interface IItems {
	[id: number]: {
		count: number;
		type: any;
	};
}

interface IItem {
	id: number;
	type: any;
}
interface IPayloadCountChange {
	type: TTypeCartItemCountChange;
	id: number;
}
export interface ICartState {
	count: number;
	showAnimation: boolean;
	items: IItems;
}

const initialState: ICartState = {
	count: 0,
	showAnimation: true,
	items: {},
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCountCart(state, action: PayloadAction<number>) {
			if (state.count === 0 && action.payload > 0) {
				state.showAnimation = true;
			}
			state.count = action.payload;
		},
		setShowAnimationCart(state, action: PayloadAction<boolean>) {
			state.showAnimation = action.payload;
		},
		initialItems(state, action: PayloadAction<IItems>) {
			if (action.payload) {
				state.items = action.payload;
				state.count = Object.keys(action.payload).length;
			}
		},
		addItemCart(state, action: PayloadAction<IItem>) {
			if (state.items[action.payload.id]) return;
			state.items[action.payload.id] = { type: action.payload.type, count: 1 };
			state.count++;
		},
		itemCountChange(state, action: PayloadAction<IPayloadCountChange>) {
			const findItem = state.items[action.payload.id];
			if (findItem) {
				if (action.payload.type === 'decriment') {
					if (findItem.count <= 1) {
						delete state.items[action.payload.id];
					}
					state.count--;
					findItem.count--;
				}
				if (action.payload.type === 'increment') {
					findItem.count++;
					state.count++;
				}
			}
			return;
		},
		clearCartItems(state) {
			state.count = 0;
			state.items = {};
		},
	}
});

export default cartSlice.reducer;
export const { setCountCart, setShowAnimationCart, addItemCart, itemCountChange, initialItems, clearCartItems } =
	cartSlice.actions;
