import { FC } from 'react';
import MainLayout from '../MainLayout';
import { Breadcrumbs, ProductDetailsBlock, ProductInfoBanner } from '$components';
import { BannerSize } from '$constants';
import { productInfoLarge, productInfoSmall } from '$mocks';
import { useRouter } from 'next/router';

const Product: FC = () => {
	const { back, query } = useRouter();

	return (
		<MainLayout>
			<div className="container m-auto pt-5">
				<Breadcrumbs moveBack={back} currentPage={query.productId} />
			</div>
			<div className="container m-auto flex items-center justify-between">
				<div>
					<ProductDetailsBlock />
				</div>
				<div className="flex gap-5">
					<ProductInfoBanner size={BannerSize.LARGE} bannerInfo={productInfoLarge} />
					<ProductInfoBanner size={BannerSize.SMALL} bannerInfo={productInfoSmall} />
				</div>
			</div>
		</MainLayout>
	);
};

export default Product;
