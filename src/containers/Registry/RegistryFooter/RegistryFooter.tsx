import { FC } from 'react';
import RowsCounter from './RowsCounter';

interface IProps {
	rowsCounterText: string;
}

const RegistryFooter: FC<IProps> = ({ rowsCounterText }) => (
	<div className="grid place-content-start">
		<RowsCounter text={rowsCounterText} />
	</div>
);

export default RegistryFooter;
