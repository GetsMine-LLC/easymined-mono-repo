import axios from 'axios';

export interface IGetGeoInfo {
	countryName: string;
}

export const getGeoInfo = async () => {
	try {
		const { data } = await axios.get('https://ipapi.co/json/');
		return {
			data: {
				countryName: data.country_name,
				countryCode: data.country,
			},
		};
	} catch (error) {
		return {
			data: null,
		};
	}
};
