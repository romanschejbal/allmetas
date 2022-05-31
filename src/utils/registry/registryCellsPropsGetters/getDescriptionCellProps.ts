import { IRegistryRow, IRegistryRowName } from '$models';
import { CellProps } from 'react-table';

export const getDescriptionCellProps = ({
	cell: {
		value: { title, description },
	},
}: CellProps<IRegistryRow, IRegistryRowName>) => ({
	title,
	description,
});
