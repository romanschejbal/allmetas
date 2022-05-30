import classNames from 'classnames';
import { FC } from 'react';
import QuotationStatusUp from '/images/product/quatation-state-up.svg';
import QuotationStatusDown from '/images/product/quatation-state-down.svg';

interface IProps {
	up?: boolean;
	value: string;
}

const Quotation: FC<IProps> = ({ up, value }) => (
	<div
		className={classNames('items-center', 'flex', 'gap-1', 'rounded-[15px]', 'p-1', {
			['bg-limeGreen']: up,
			['bg-cinnabar']: !up,
		})}
	>
		{up ? <QuotationStatusUp /> : <QuotationStatusDown />}
		<p className="font-semibold text-white">{value}</p>
	</div>
);

export default Quotation;
