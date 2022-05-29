import { repeatMock } from './utils';

const NAME = {
	title: 'Decentraland',
	description: 'Mana',
};

const AVATAR = {
	path: '/images/registry/avatar.png',
	alt: 'avatar',
};

const INDEX = {
	decreased: false,
	text: '7%',
};

const DECREASED_INDEX = {
	decreased: true,
	text: '3.74%',
};

const ROW = {
	id: '1',
	price: '$43,663.31',
	marketCap: '$806,936,551,216',
	volume: '250 000 ks',
	nftAmount: '250 000 ks',
	lastMonth: 'Last month graph',
	name: NAME,
	avatar: AVATAR,
	dayPercent: DECREASED_INDEX,
	weekPercent: INDEX,
	dayVolume: DECREASED_INDEX,
	weekVolume: INDEX,
};

const ROWS_AMOUNT = 1234;

export const ROWS = repeatMock(ROW, ROWS_AMOUNT);
