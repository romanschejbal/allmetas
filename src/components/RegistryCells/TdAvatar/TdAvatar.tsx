import { FC } from 'react';
import Td from '../Td';

interface IProps {
	path: string;
	alt: string;
}

const TdAvatar: FC<IProps> = ({ path, alt }) => (
	<Td>
		<img src={path} alt={alt} className="h-[24px] w-[22px] rounded-full" />
	</Td>
);

export default TdAvatar;
