import { Tab } from '@headlessui/react';
import { Dispatch, FC, SetStateAction } from 'react';
import { Tabs as TabsItem } from '$constants';

interface IProps {
	setActiveTab: Dispatch<SetStateAction<TabsItem>>;
	tabs: Array<{ id: TabsItem; title: string }>;
}

const Tabs: FC<IProps> = ({ setActiveTab, tabs }) => (
	<Tab.Group manual>
		<Tab.List className="flex gap-10">
			{tabs.map(({ id, title }) => (
				<Tab
					key={id}
					onClick={() => setActiveTab(id)}
					className={({ selected }) =>
						`p-3 font-bold outline-none ${
							selected ? 'rounded-lg bg-safetyOrange text-white' : 'text-black'
						}`
					}
				>
					{title}
				</Tab>
			))}
		</Tab.List>
	</Tab.Group>
);

export default Tabs;
