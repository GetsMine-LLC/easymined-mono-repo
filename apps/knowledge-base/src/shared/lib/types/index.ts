export interface IMinerModelType {
	id: number;
	name: string;
	brand: string;
	for_rent?: {
		price_for_rent: number;
	};
	model_type?: {
		id: number;
		for_rent?: {
			price_for_rent: number;
		};
		name: string;
		brand: string;
		hashrate: number;
		watts: number;
		price: string;
		part: number;
		efficiency: number;
		roi: string;
		day_revenue: string;
		month_revenue: string;
		day_hosting_cost: string;
		month_hosting_cost: string;
		day_profit: string;
		month_profit: string;
		preorder: boolean;
		preorder_amount: string;
		preorder_percent: string;
		picture_url: string;
		picture_brand_url: string;
	};
	hashrate: number;
	watts: number;
	price: string;
	picture_url: string;
	picture_brand_url: string;
	day_hosting_cost: string;
	day_profit: string;
	month_hosting_cost: string;
	month_profit: string;
	day_revenue: string;
	month_revenue: string;
	efficiency: number;
	roi: string;
}

export interface IMiner {
	id: number;
	for_rent?: {
		price_for_rent: string;
	};
	for_preorder: {
		prepayment: string;
	};
	part: number;
	preorder: boolean;
	name: string;
	brand: string;
	hashrate: number;
	efficiency: number;
	roi: string;
	watts: number;
	price: string;
	day_revenue: string;
	month_revenue: string;
	picture_url: string;
	preorder_amount: string;
	preorder_percent: string;
	picture_brand_url: string;
	day_hosting_cost: string;
	day_profit: string;
	month_hosting_cost: string;
	month_profit: string;
	marketplace_id?: number;
	available?: boolean;
}

export interface IMinerMarketplace {
	id: number;
	for_rent?: {
		price_for_rent: string;
	};
	part: number;
	name: string;
	brand: string;
	hashrate: number;
	watts: number;
	price: string;
	picture_url: string;
	picture_brand_url: string;
	day_hosting_cost: string;
	day_profit: string;
	month_hosting_cost: string;
	month_profit: string;
}

export interface IRentData {
	// days_for_rent: number;
	price_for_rent: string;
}

export interface ICloud {
	amount: string;
	of_month: string;
}

export interface IRefreshResponse {
	status: string;
	data: {
		session_token: string;
		refresh_token: string;
	};
}

export type PaymentMethodType =
	| 'btcpay'
	| 'nimera'
	| 'tranzilla'
	| 'zero_processing'
	| 'wire'
	| 'payeer'
	| 'advcash'
	| 'user_balance'
	| 'stripe';
