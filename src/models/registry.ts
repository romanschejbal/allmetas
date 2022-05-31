import { ID } from './general';

export interface IRegistryRowName {
	title: string;
	description: string;
}

export interface IRegistryRowAvatar {
	path: string;
	alt: string;
}

export interface IRegistryRowIndex {
	decreased: boolean;
	text: string;
}

export interface IRegistryRow {
	id: ID;
	price: string;
	marketCap: string;
	volume: string;
	nftAmount: string;
	lastMonth: string;
	name: IRegistryRowName;
	avatar: IRegistryRowAvatar;
	dayPercent: IRegistryRowIndex;
	weekPercent: IRegistryRowIndex;
	dayVolume: IRegistryRowIndex;
	weekVolume: IRegistryRowIndex;
}
