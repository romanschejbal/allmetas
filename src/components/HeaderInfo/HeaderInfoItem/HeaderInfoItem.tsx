import classNames from 'classnames';
import { FC } from 'react';
import { Tooltip } from '@nextui-org/react';
import InfoIcon from '/images/header/info.svg';

interface IProps {
	title: string;
	info: string;
	value: number;
	darkMode: boolean;
}

const HeaderInfoItem: FC<IProps> = ({ title, info, value, darkMode }) => (
	<div>
		<div className="flex items-center gap-1.5">
			<h3
				className={classNames('text-lg', 'font-bold', 'whitespace-nowrap', {
					['text-darkTypo']: !darkMode,
					['text-lunarRock']: darkMode,
				})}
			>
				{title}
			</h3>
			<Tooltip content={<p className="max-w-[150px]">{info}</p>} placement="bottom">
				<InfoIcon className="cursor-pointer" />
			</Tooltip>
		</div>
		<p
			className={classNames({
				['text-darkTypo']: !darkMode,
				['text-lunarRock']: darkMode,
			})}
		>
			{value}
		</p>
	</div>
);

export default HeaderInfoItem;
