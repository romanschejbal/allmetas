import classNames from 'classnames';
import { FC } from 'react';
import QuotationStatusUp from '/images/product/quatation-state-up.svg';
import QuotationStatusDown from '/images/product/quatation-state-down.svg';
import { QuotationStatus } from '$constants';

interface IProps {
	status: QuotationStatus;
	value: string;
}

const Quotation: FC<IProps> = ({ status, value }) => (
	<div
		className={classNames('items-center', 'flex', 'gap-1', 'rounded-[15px]', 'p-1', {
			['bg-limeGreen']: status === QuotationStatus.UP,
			['bg-cinnabar']: status === QuotationStatus.DOWN,
		})}
	>
		{status === QuotationStatus.UP && <QuotationStatusUp />}
		{status === QuotationStatus.DOWN && <QuotationStatusDown />}
		<p className="font-semibold text-white">{value}</p>
	</div>
);

export default Quotation;
