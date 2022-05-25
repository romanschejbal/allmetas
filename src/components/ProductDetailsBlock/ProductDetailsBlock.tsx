import { FC } from 'react';
import { PRODUCT_TITLE } from '$mocks';
import Favorite from '/images/product/favorites.svg';
import Share from '/images/product/share.svg';

const ProductDetailsBlock: FC = () => (
	<div className="flex gap-4">
		<div>
			<img src="/images/product/image-example.png" alt="product logo" />
		</div>
		<div>
			<div>
				<h2 className="text-3xl font-bold">{PRODUCT_TITLE}</h2>
			</div>
			<div>
				<img src="/images/product/tag-example.png" alt="tag" />
			</div>
		</div>
		<div className="flex gap-2">
			<Favorite className="cursor-pointer" />
			<Share className="cursor-pointer" />
		</div>
	</div>
);

export default ProductDetailsBlock;
