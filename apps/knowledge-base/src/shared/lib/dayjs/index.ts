import initDayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import updatelocale from 'dayjs/plugin/updateLocale';

initDayjs.extend(utc);
initDayjs.extend(duration);
initDayjs.extend(updatelocale);

const dayjs = (data: string) => {
	return initDayjs(data).utc();
};

export { dayjs };
