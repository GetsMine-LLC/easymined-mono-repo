import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TypeStatusOrder = 'wait' | 'payed' | 'complete' | 'cancel' | 'confirmation' | 'prepayed' | 'charge' | null;
export interface IPaymentsState {
	count: number;
	showAnimation: boolean;
	update: boolean;
	status: TypeStatusOrder,
	id: number | null;
}

const initialState: IPaymentsState = {
	count: 0,
	showAnimation: true,
	update: true,
	status: null,
	id: null,
};

const paymentsSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCountPayments(state, action: PayloadAction<number>) {
			if (state.count === 0 && action.payload > 0) {
				state.showAnimation = true;
			}
			state.count = action.payload;
		},
		setShowAnimationPayments(state, action: PayloadAction<boolean>) {
			state.showAnimation = action.payload;
		},
		setUpdatePayments(state, action: PayloadAction<boolean>) {
			state.update = action.payload;
		},
		setStatusPayment(state, action: PayloadAction<TypeStatusOrder>) {
			state.status = action.payload
		},
		setIdPayment(state, action: PayloadAction<number>) {
			state.id = action.payload
		},
		resetPaymentState(state) {
			state = {
				count: 0,
				showAnimation: true,
				update: true,
				status: null,
				id: null,
			}
		}
	},
});

export default paymentsSlice.reducer;
export const { setCountPayments, setShowAnimationPayments, setUpdatePayments, setStatusPayment, setIdPayment, resetPaymentState } = paymentsSlice.actions;
