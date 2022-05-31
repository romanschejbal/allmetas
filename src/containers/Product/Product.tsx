import { FC, useState } from 'react';
import MainLayout from '../MainLayout';
import { Breadcrumbs, ProductDetailsBlock, ProductInfoBanner } from '$components';
import { useRouter } from 'next/router';
import { productInfoLarge, productInfoSmall } from '$mocks';
import { Tabs as TabsItem, TABS } from '$constants';
import Tabs from '../Tabs';
import Overview from '../Overview';

const Product: FC = () => {
	const { back, query } = useRouter();
	const [activeTab, setActiveTab] = useState<TabsItem>(TabsItem.Overview);
	return (
		<MainLayout>
			<div className="container m-auto pt-6">
				<Breadcrumbs moveBack={back} currentPage={query.productId} />
			</div>
			<div className="container m-auto flex items-center justify-between">
				<div>
					<ProductDetailsBlock />
				</div>
				<div className="flex gap-5">
					<ProductInfoBanner
						full
						title={productInfoLarge.title}
						amount={productInfoLarge.amount}
						btnValue={productInfoLarge.btnValue}
						dailyQuotation={productInfoLarge.dailyQuotation}
						weeklyQuotation={productInfoLarge.weeklyQuotation}
						callback={productInfoLarge.callback}
					/>
					<ProductInfoBanner
						title={productInfoSmall.title}
						amount={productInfoSmall.amount}
						btnValue={productInfoSmall.btnValue}
						dailyQuotation={productInfoSmall.dailyQuotation}
						weeklyQuotation={productInfoSmall.weeklyQuotation}
						callback={productInfoSmall.callback}
					/>
				</div>
			</div>
			<div className="container m-auto pt-6">
				<Tabs setActiveTab={setActiveTab} tabs={TABS} />
			</div>
			<div className="container m-auto pt-4">{activeTab === TabsItem.Overview && <Overview />}</div>
		</MainLayout>
	);
};

export default Product;
