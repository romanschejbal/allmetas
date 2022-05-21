import { FC } from 'react';

interface IProps {
	title: string;
	info: string;
	value: number;
}

const Item: FC<IProps> = ({ title, info, value }) => (
	<div>
		<h3 className="text-lg font-bold text-darkTypo">{title}</h3>
		<p className="text-darkTypo">{value}</p>
		<p className="hidden">{info}</p>
	</div>
);

export default Item;
