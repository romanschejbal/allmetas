import { CellProps } from 'react-table';
import { IRegistryRow, IRegistryRowAvatar } from '$models';

export const getAvatarCellProps = ({
	cell: {
		value: { path, alt },
	},
}: CellProps<IRegistryRow, IRegistryRowAvatar>) => ({ path, alt });
