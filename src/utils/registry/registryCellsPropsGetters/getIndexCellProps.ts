import { CellProps } from 'react-table';
import { IRegistryRow, IRegistryRowIndex } from '$models';

export const getIndexCellProps = ({
	cell: {
		value: { decreased, text },
	},
}: CellProps<IRegistryRow, IRegistryRowIndex>) => ({ decreased, text });
