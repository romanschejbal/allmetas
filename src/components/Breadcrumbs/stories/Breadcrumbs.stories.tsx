import { ComponentStory, ComponentMeta } from '@storybook/react';
import Breadcrumbs from '../Breadcrumbs';

export default {
	title: 'components/Breadcrumbs',
	component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const Template: ComponentStory<typeof Breadcrumbs> = (args) => <Breadcrumbs {...args} />;
export const Default = Template.bind({});

Default.args = {
	moveBack: () => null,
	currentPage: 'decentraland.org',
};
