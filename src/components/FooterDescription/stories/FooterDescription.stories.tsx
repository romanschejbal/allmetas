import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DEFAULT_LONG_TEXT } from '$mocks';
import FooterDescription from '../FooterDescription';

export default {
	title: 'components/Description',
	component: FooterDescription,
} as ComponentMeta<typeof FooterDescription>;

const Template: ComponentStory<typeof FooterDescription> = (args) => (
	<div className="w-[400px]">
		<FooterDescription {...args} />
	</div>
);

export const Default = Template.bind({});

Default.args = {
	text: DEFAULT_LONG_TEXT,
};
