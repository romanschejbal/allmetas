import { repeatMock } from './utils';

export const FOOTER_TITLE = 'Header';
export const FOOTER_SOCIAL_NETWORK = [
	{
		id: '1',
		title: 'logo',
		href: '#',
		src: '/images/footer/dribbble.svg',
	},
	{
		id: '2',
		title: 'logo',
		href: '#',
		src: '/images/footer/facebook.svg',
	},
	{
		id: '3',
		title: 'logo',
		href: '#',
		src: '/images/footer/figma.svg',
	},
	{
		id: '4',
		title: 'logo',
		href: '#',
		src: '/images/footer/whatsapp.svg',
	},
	{
		id: '5',
		title: 'logo',
		href: '#',
		src: '/images/footer/youtube.svg',
	},
];

const FOOTER_LINK_ITEM = {
	id: '1',
	title: 'Link',
	href: '#',
};

const FOOTER_LINK_AMOUNT = 6;

export const FOOTER_LINK = repeatMock(FOOTER_LINK_ITEM, FOOTER_LINK_AMOUNT);
