import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderInfoItem from '../HeaderInfoItem';

export default {
	title: 'components/HeaderInfoItem',
	component: HeaderInfoItem,
} as ComponentMeta<typeof HeaderInfoItem>;

const Template: ComponentStory<typeof HeaderInfoItem> = (args) => <HeaderInfoItem {...args} />;
export const Default = Template.bind({});

Default.args = {
	title: 'Test title can change dynamicly',
	info: 'tooltip text',
	value: 12345,
	darkMode: true,
};
