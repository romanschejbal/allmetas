import { Quotation } from '$components';
import { FC } from 'react';

interface IProps {
	title: string;
	value: string;
	quotationValue: string;
	up?: boolean;
}

const QuotationCard: FC<IProps> = ({ title, value, quotationValue, up }) => (
	<div className="rounded-lg border border-veryLightGrey py-4 px-5 shadow-primary">
		<h4 className="text-safetyOrange">{title}</h4>
		<h3 className="text-2xl">{value}</h3>
		<div className="w-3/6">
			<Quotation value={quotationValue} up={up} />
		</div>
	</div>
);

export default QuotationCard;
