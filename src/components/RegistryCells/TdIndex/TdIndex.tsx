import classNames from 'classnames';
import { FC } from 'react';
import IncreaseArrow from '/images/registry/increase-arrow.svg';
import DecreaseArrow from '/images/registry/decrease-arrow.svg';
import Td from '../Td';

interface IProps {
	decreased: boolean;
	text: string;
}

const TdDescription: FC<IProps> = ({ decreased, text }) => (
	<Td>
		<div className="grid auto-cols-min grid-flow-col items-center gap-0.5">
			{decreased ? <DecreaseArrow /> : <IncreaseArrow />}
			<span
				className={classNames('text-xs text-green line-clamp-1', {
					['text-cinnabar']: decreased,
				})}
			>
				{text}
			</span>
		</div>
	</Td>
);

export default TdDescription;
