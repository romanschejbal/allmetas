import { FC, useMemo } from 'react';
import { Column } from 'react-table';
import { IPost, IRegistryRow } from '$models';
import MainLayout from '../MainLayout';
import Feed from '../Feed';
import Registry from '../Registry';

interface IProps {
	posts: IPost[];
	rows: IRegistryRow[];
}

const Home: FC<IProps> = ({ posts, rows }) => {
	const columns = useMemo(
		(): Column<IRegistryRow>[] => [
			{
				Header: '#',
				accessor: 'id',
			},
			{
				Header: 'Name',
				accessor: 'name',
			},
			{
				Header: 'Price',
				accessor: 'price',
			},
			{
				Header: '24h %',
				accessor: 'dayPercent',
			},
			{
				Header: '7d %',
				accessor: 'weekPercent',
			},
			{
				Header: 'Market Cap',
				accessor: 'marketCap',
			},
			{
				Header: 'Volume (24h)',
				accessor: 'volume',
			},
			{
				Header: 'NFT amount',
				accessor: 'nftAmount',
			},
			{
				Header: '24h volume',
				accessor: 'dayVolume',
			},
			{
				Header: '7d volume',
				accessor: 'weekVolume',
			},
			{
				Header: 'Last month',
				accessor: 'lastMonth',
			},
		],
		[],
	);

	return (
		<MainLayout>
			<div className="grid gap-7 py-14">
				<Feed items={posts} />
				<Registry columns={columns} data={rows} />
			</div>
		</MainLayout>
	);
};

export default Home;
