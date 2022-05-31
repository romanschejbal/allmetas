import { FC } from 'react';
import Th from '../Th';

interface IProps {
	text: string;
}

const ThText: FC<IProps> = ({ text }) => (
	<Th>
		<span className="text-xs font-bold leading-4 text-darkTypo line-clamp-2">{text}</span>
	</Th>
);

export default ThText;
