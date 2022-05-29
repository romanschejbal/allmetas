import { IRegistryRow } from '$models';
import { CellProps } from 'react-table';

export const getTextCellProps = ({ cell: { value: text } }: CellProps<IRegistryRow, string>) => ({
	text,
});
