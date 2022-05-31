import { FC } from 'react';
import Td from '../Td';

interface IProps {
	title: string;
	description: string;
}

const TdDescription: FC<IProps> = ({ title, description }) => (
	<Td>
		<span className="text-sm font-semibold text-darkTypo line-clamp-1">{title}</span>
		<span className="text-xs text-comet line-clamp-1">{description}</span>
	</Td>
);

export default TdDescription;
