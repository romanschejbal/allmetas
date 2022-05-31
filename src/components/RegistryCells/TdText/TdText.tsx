import { FC } from 'react';
import Td from '../Td';

interface IProps {
	text: string;
}

const TdText: FC<IProps> = ({ text }) => (
	<Td>
		<span className="text-xs text-darkTypo line-clamp-1">{text}</span>
	</Td>
);

export default TdText;
