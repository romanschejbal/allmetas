import { ComponentMeta } from '@storybook/react';
import ProductInfoBanner from '../ProductInfoBanner';

export default {
	title: 'components/ProductInfoBanner',
	component: ProductInfoBanner,
} as ComponentMeta<typeof ProductInfoBanner>;

export const Large = () => (
	<div className="w-[450px]">
		<ProductInfoBanner
			title="Banner title Large"
			amount="12 452"
			btnValue="click"
			dailyQuotation="12 523"
			weeklyQuotation="17 523"
			callback={() => null}
		/>
	</div>
);

export const Small = () => (
	<div className="w-[250px]">
		<ProductInfoBanner
			title="Banner title Small"
			amount="12 452"
			btnValue="click"
			dailyQuotation="12 523"
			weeklyQuotation="17 523"
			callback={() => null}
		/>
	</div>
);
