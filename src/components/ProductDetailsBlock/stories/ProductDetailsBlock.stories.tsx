import { ComponentMeta } from '@storybook/react';
import ProductDetailsBlock from '../ProductDetailsBlock';

export default {
	title: 'components/ProductDetailsBlock',
	component: ProductDetailsBlock,
} as ComponentMeta<typeof ProductDetailsBlock>;

export const Default = () => <ProductDetailsBlock />;
