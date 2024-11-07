import initAxios, { AxiosError } from 'axios';
import { getCookie, deleteCookie, setCookie } from 'cookies-next';

import { IRefreshResponse } from '../types';

let isRefreshing = false;
let failedQueue = [];

const token = getCookie('jwt');

const processQueue = (error, token) => {
	failedQueue.forEach((prom) => {
		if (error) {
			prom.reject(error);
		} else {
			prom.resolve(token);
		}
	});

	failedQueue = [];
};

export const axios = initAxios.create({
	baseURL: `${process.env.NEXT_PUBLIC_API_URL}/`,
});

axios.interceptors.request.use(
	(config) => {
		const country = getCookie('country');
		const token = getCookie('jwt');
		if (token) {
			config.headers.Authorization = token;
		}
		if (country) {
			config.headers['current-country'] = country;
		}
		return config;
	},
	(err) => {
		return Promise.reject(err);
	},
);

axios.interceptors.response.use(
	(response) => {
		return response;
	},
	async function (error) {
		const originalRequest = error.config;
		if (error instanceof AxiosError) {
			const status = error?.response?.status;

			// if (error.config.url === '/api/v1/users/login') {
			// 	deleteCookie('jwt');
			// 	deleteCookie('refresh');
			// 	return Promise.reject(error);
			// }

			if ((status === 422 || status === 401) && !!token && !originalRequest._retry) {
				// originalRequest._retry = true;
				if (isRefreshing) {
					return new Promise(function (resolve, reject) {
						failedQueue.push({ resolve, reject });
					})
						.then((token) => {
							originalRequest.headers['Authorization'] = token;
							return axios(originalRequest);
						})
						.catch((err) => {
							return Promise.reject(err);
						});
				}
				originalRequest._retry = true;
				isRefreshing = true;

				const refresh = getCookie('refresh');

				const refreshData = {
					refresh_token: refresh,
				};

				return new Promise(function (resolve, reject) {
					axios
						.patch<IRefreshResponse>('/api/v1/users/login', refreshData)
						.then(({ data }) => {
							setCookie('jwt', `Bearer ${data.data.session_token}`);
							setCookie('refresh', data.data.refresh_token);
							axios.defaults.headers.common['Authorization'] = data.data.session_token;
							originalRequest.headers['Authorization'] = data.data.session_token;
							processQueue(null, data.data.session_token);
							resolve(axios(originalRequest));
						})
						.catch((err) => {
							processQueue(err, null);
							reject(err);
						})
						.finally(() => {
							isRefreshing = false;
						});
				});

				// try {
				// 	const data = await axios.patch<IRefreshResponse>('/api/v1/users/login', refreshData);
				// 	setCookie('jwt', `Bearer ${data.data.data.session_token}`);
				// 	setCookie('refresh', data.data.data.refresh_token);
				// 	return axios(originalRequest);
				// } catch (refreshError) {
				// 	console.error('Token refresh failed:', refreshError);
				// 	deleteCookie('jwt');
				// 	deleteCookie('refresh');
				// 	// window.location.href = '/login';
				// 	return Promise.reject(refreshError);
				// }
			}
		}
		return Promise.reject(error);
	},
);
