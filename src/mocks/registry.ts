import { da } from 'date-fns/locale';
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

const GRAPH = {
	decreased: false,
	data: [19, 8, 15, 29, 6, 21, 33, 21, 33, 25, 20, 22, 23, 9, 28, 7, 29, 33, 20, 15, 33],
};

const ROW = {
	id: '1',
	price: '$43,663.31',
	marketCap: '$806,936,551,216',
	volume: '$25,008,922,532',
	nftAmount: '250 000 ks',
	name: NAME,
	avatar: AVATAR,
	dayPercent: DECREASED_INDEX,
	weekPercent: INDEX,
	dayVolume: DECREASED_INDEX,
	weekVolume: INDEX,
	lastMonth: GRAPH,
};

const ROWS_AMOUNT = 1234;

export const ROWS = repeatMock(ROW, ROWS_AMOUNT);
