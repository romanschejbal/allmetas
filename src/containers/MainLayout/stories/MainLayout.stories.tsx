import { ComponentMeta } from '@storybook/react';
import MainLayout from '../MainLayout';

export default {
	title: 'containers/MainLayout',
	component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

export const Default = () => (
	<MainLayout>
		<div className="flex justify-center">Children inside components</div>
	</MainLayout>
);
