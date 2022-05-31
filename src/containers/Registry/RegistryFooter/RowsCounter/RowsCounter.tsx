import { FC } from 'react';

interface IProps {
	text: string;
}

const RowsCounter: FC<IProps> = ({ text }) => <p className="text-sm text-horizon">{text}</p>;

export default RowsCounter;
