import { ComponentStory, ComponentMeta } from '@storybook/react';
import Subscription from '../Subscription';

export default {
	title: 'containers/Subscription',
	component: Subscription,
} as ComponentMeta<typeof Subscription>;

const Template: ComponentStory<typeof Subscription> = (args) => <Subscription {...args} />;
export const Default = Template.bind({});

Default.args = {
	title: 'Subscription banner title',
	text: 'Subscription banner main text',
};
