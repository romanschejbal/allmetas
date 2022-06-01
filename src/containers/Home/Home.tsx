import { FC, useMemo } from 'react';
import { Column } from 'react-table';
import { RegistryColumnTitle } from '$constants';
import { RegistryCells } from '$components';
import { IPost, IRegistryRow } from '$models';
import {
	getAvatarCellProps,
	getDescriptionCellProps,
	getIndexCellProps,
	getTextCellProps,
} from '$utils';
import MainLayout from '../MainLayout';
import Feed from '../Feed';
import Registry from '../Registry';

const { ThText, TdText, TdAvatar, TdDescription, TdIndex } = RegistryCells;

interface IProps {
	posts: IPost[];
	rows: IRegistryRow[];
}

const Home: FC<IProps> = ({ posts, rows }) => {
	const getTextHeader = (title: RegistryColumnTitle) => <ThText text={title} />;

	const columns = useMemo(
		(): Column<IRegistryRow>[] => [
			{
				width: 50,
				accessor: 'id',
				Cell: (cellProps) => <TdText {...getTextCellProps(cellProps)} />,
				Header: getTextHeader(RegistryColumnTitle.ID),
			},
			{
				width: 48,
				accessor: 'avatar',
				Cell: (cellProps) => <TdAvatar {...getAvatarCellProps(cellProps)} />,
				Header: getTextHeader(RegistryColumnTitle.AVATAR),
			},
			{
				width: 130,
				accessor: 'name',
				Cell: (cellProps) => <TdDescription {...getDescriptionCellProps(cellProps)} />,
				Header: getTextHeader(RegistryColumnTitle.NAME),
			},
			{
				width: 108,
				accessor: 'price',
				Cell: (cellProps) => <TdText {...getTextCellProps(cellProps)} />,
				Header: getTextHeader(RegistryColumnTitle.PRICE),
			},
			{
				width: 68,
				accessor: 'dayPercent',
				Cell: (cellProps) => <TdIndex {...getIndexCellProps(cellProps)} />,
				Header: getTextHeader(RegistryColumnTitle.DAY_PERCENT),
			},
			{
				width: 68,
				accessor: 'weekPercent',
				Cell: (cellProps) => <TdIndex {...getIndexCellProps(cellProps)} />,
				Header: getTextHeader(RegistryColumnTitle.WEEK_PERCENT),
			},
			{
				width: 116,
				accessor: 'marketCap',
				Cell: (cellProps) => <TdText {...getTextCellProps(cellProps)} />,
				Header: getTextHeader(RegistryColumnTitle.MARKET_CAP),
			},
			{
				width: 116,
				accessor: 'volume',
				Cell: (cellProps) => <TdText {...getTextCellProps(cellProps)} />,
				Header: getTextHeader(RegistryColumnTitle.VOLUME),
			},
			{
				width: 84,
				accessor: 'nftAmount',
				Cell: (cellProps) => <TdText {...getTextCellProps(cellProps)} />,
				Header: getTextHeader(RegistryColumnTitle.NFT_AMOUNT),
			},
			{
				width: 68,
				accessor: 'dayVolume',
				Cell: (cellProps) => <TdIndex {...getIndexCellProps(cellProps)} />,
				Header: getTextHeader(RegistryColumnTitle.DAY_VOLUME),
			},
			{
				width: 68,
				accessor: 'weekVolume',
				Cell: (cellProps) => <TdIndex {...getIndexCellProps(cellProps)} />,
				Header: getTextHeader(RegistryColumnTitle.WEEK_VOLUME),
			},
			{
				width: 150,
				accessor: 'lastMonth',
				Cell: (cellProps) => <TdText {...getTextCellProps(cellProps)} />,
				Header: getTextHeader(RegistryColumnTitle.LATT_MONTH),
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
