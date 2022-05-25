import { IProductInfo } from '$models';

export const HOMEPAGE = 'Home';

export const PRODUCT_TITLE = 'Decentraland';

export const productInfoLarge: IProductInfo = {
	title: 'NFT amount',
	amount: '42,663,586,000',
	btnValue: 'NFT markets',
	dailyQuotation: '0,25%',
	weeklyQuotation: '1,25%',
	callback: () => null,
};

export const productInfoSmall: IProductInfo = {
	title: 'Coin Price',
	amount: '$2.42',
	btnValue: 'Coin markets',
	dailyQuotation: '5,25%',
	weeklyQuotation: '0,25%',
	callback: () => null,
};
