import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useState } from 'react';
import { Tabs as TabsItem, TABS } from '$constants';
import Tabs from '../Tabs';

export default {
	title: 'containers/Tabs',
	component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Template: ComponentStory<typeof Tabs> = () => {
	const [, setActiveTab] = useState<TabsItem>(TabsItem.Overview);
	return <Tabs setActiveTab={setActiveTab} tabs={TABS} />;
};
