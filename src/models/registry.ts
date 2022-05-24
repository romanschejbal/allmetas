import { ID } from './general';

export interface IRegistryRow {
	id: ID;
	name: string;
	price: string;
	dayPercent: string;
	weekPercent: string;
	marketCap: string;
	volume: string;
	nftAmount: string;
	dayVolume: string;
	weekVolume: string;
	lastMonth: string;
}
