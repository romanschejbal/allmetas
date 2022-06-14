import { ComponentMeta } from '@storybook/react';
import QuotationCard from '../QuotationCard';

export default {
	title: 'components/QuotationCard',
	component: QuotationCard,
} as ComponentMeta<typeof QuotationCard>;

export const UP = () => (
	<div className="w-[200px]">
		<QuotationCard title="QuotationCard up" value="12 336$" quotationValue="66.4%" up />
	</div>
);

export const Down = () => (
	<div className="w-[200px]">
		<QuotationCard title="QuotationCard down" value="12 336$" quotationValue="66.4%" />
	</div>
);

export const Default = () => (
	<div className="container flex flex-wrap justify-between gap-2 pt-5 pb-5">
		<QuotationCard title="test value" value="$39,088,450" quotationValue="16%" up />
		<QuotationCard title="test value" value="$39,088,450" quotationValue="15.6%" />
		<QuotationCard title="test value" value="$39,088,450" quotationValue="6%" up />
		<QuotationCard title="test value" value="$39,088,450" quotationValue="12.6%" />
		<QuotationCard title="test value" value="$39,088,450" quotationValue="1.6%" up />
		<QuotationCard title="test value" value="$39,088,450" quotationValue="76%" />
	</div>
);
