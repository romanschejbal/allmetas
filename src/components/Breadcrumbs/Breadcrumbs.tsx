import { FC } from 'react';
import { HOMEPAGE } from '$mocks';
import Arrow from '/images/product/breadcrumb-arrow.svg';

interface IProps {
	moveBack: () => void;
	currentPage?: string | string[];
}

const Breadcrumbs: FC<IProps> = ({ moveBack, currentPage }) => (
	<div className="flex items-center gap-4 text-blackPearl/60">
		<h3 onClick={moveBack} className="cursor-pointer">
			{HOMEPAGE}
		</h3>
		<Arrow />
		<h3>{currentPage}</h3>
	</div>
);

export default Breadcrumbs;
