import { repeatMock } from './utils';

const ROW = {
	id: '1',
	name: 'Decentraland',
	price: '$43,663.31',
	dayPercent: '3.74%',
	weekPercent: '7%',
	marketCap: '$806,936,551,216',
	volume: '250 000 ks',
	nftAmount: '250 000 ks',
	dayVolume: '3.74%',
	weekVolume: '7%',
	lastMonth: 'lastMonth',
};

const ROWS_AMOUNT = 50;

export const ROWS = repeatMock(ROW, ROWS_AMOUNT);
