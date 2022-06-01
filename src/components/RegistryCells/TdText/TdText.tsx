import { FC } from 'react';
import Td from '../Td';

interface IProps {
	text: string;
}

const TdText: FC<IProps> = ({ text }) => (
	<Td>
		<span className="overflow-hidden text-ellipsis whitespace-pre text-xs text-darkTypo">
			{text}
		</span>
	</Td>
);

export default TdText;
