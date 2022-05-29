import { FC } from 'react';
import classNames from 'classnames';
import ArrowNext from '/images/registry/arrow-next.svg';
import DisabledArrowNext from '/images/registry/disabled-arrow-next.svg';

interface IProps {
	canPage: boolean;
	reverted?: boolean;
	text: string;
}

const PageButton: FC<IProps> = ({ canPage, reverted, text }) => (
	<div
		className={classNames('flex items-center gap-3', {
			['flex-row-reverse']: reverted,
		})}
	>
		<div
			className={classNames({
				['pr-1']: reverted,
				['pl-1']: !reverted,
			})}
		>
			{text}
		</div>
		<div
			className={classNames({
				['rotate-180']: reverted,
			})}
		>
			{canPage ? <ArrowNext /> : <DisabledArrowNext />}
		</div>
	</div>
);

export default PageButton;
