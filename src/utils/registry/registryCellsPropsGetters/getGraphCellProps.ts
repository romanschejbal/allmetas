import { CellProps } from 'react-table';
import { IRegistryRow, IRegistryRowGraph } from '$models';

export const getGraphCellProps = ({
	cell: {
		value: { decreased, data },
	},
}: CellProps<IRegistryRow, IRegistryRowGraph>) => ({ decreased, data });
