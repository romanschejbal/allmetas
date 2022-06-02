import { Column } from 'react-table';
import { ComponentMeta } from '@storybook/react';
import { RegistryCells } from '$components';
import { RegistryColumnTitle } from '$constants';
import { ROWS } from '$mocks';
import { IRegistryRow } from '$models';
import {
	getGraphCellProps,
	getAvatarCellProps,
	getDescriptionCellProps,
	getIndexCellProps,
	getTextCellProps,
} from '$utils';

import Registry from '../Registry';

export default {
	title: 'containers/Registry',
	component: Registry,
} as ComponentMeta<typeof Registry>;

const { ThText, TdText, TdAvatar, TdDescription, TdIndex, TdGraph } = RegistryCells;

const getTextHeader = (title: RegistryColumnTitle) => <ThText text={title} />;

const columns: Column<IRegistryRow>[] = [
	{
		width: 40,
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
		width: 140,
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
		width: 140,
		accessor: 'lastMonth',
		Cell: (cellProps) => <TdGraph {...getGraphCellProps(cellProps)} />,
		Header: getTextHeader(RegistryColumnTitle.LAST_MONTH),
	},
];

export const Default = () => <Registry columns={columns} data={ROWS} />;
