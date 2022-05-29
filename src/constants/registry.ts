export const REGISTRY_INITIAL_PAGE_INDEX = 0;
export const REGISTRY_PAGE_SIZE = 10;
export const REGISTRY_PAGE_RANGE = 5;
export const REGISTRY_MARGIN_PAGES = 1;

export const REGISTRY_PAGE_SELECT_PREFIX = 'Show rows';
export const REGISTRY_FILTERS_BTN_TEXT = 'Filters';

export enum RegistryPageButton {
	PREV = 'Previous',
	NEXT = 'Next',
}

export enum RegistryColumnTitle {
	ID = '#',
	AVATAR = '',
	NAME = 'Name',
	PRICE = 'Price',
	DAY_PERCENT = '24h %',
	WEEK_PERCENT = '7d %',
	MARKET_CAP = 'Market Cap',
	VOLUME = 'Volume (24h)',
	NFT_AMOUNT = 'NFT amount',
	DAY_VOLUME = '24h volume',
	WEEK_VOLUME = '7d volume',
	LATT_MONTH = 'Last month',
}

export const REGISTRY_PAGE_SIZES = [10, 25, 50];
