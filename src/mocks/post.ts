import { repeatMock } from './utils';

const POST = {
	id: '1',
	title: 'The 15 Biggest NFT Sales of All Time',
	description:
		'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

const POSTS_AMOUNT = 15;

export const POSTS = repeatMock(POST, POSTS_AMOUNT);
