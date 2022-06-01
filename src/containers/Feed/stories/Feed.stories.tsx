import { ComponentMeta } from '@storybook/react';
import Feed from '../Feed';

export default {
	title: 'containers/Feed',
	component: Feed,
} as ComponentMeta<typeof Feed>;

const oneFeedPost = [
	{
		id: 'id',
		title: 'Feed title',
		description: 'Feed description',
	},
];

const manyFeedPoss = [
	{
		id: 'id',
		title: 'Feed title',
		description: 'Feed description',
	},
	{
		id: 'id-1',
		title: 'Feed title',
		description: 'Feed description',
	},
	{
		id: 'id-2',
		title: 'Feed title',
		description: 'Feed description',
	},
	{
		id: 'id-3',
		title: 'Feed title',
		description: 'Feed description',
	},
	{
		id: 'id-4',
		title: 'Feed title',
		description: 'Feed description',
	},
	{
		id: 'id-5',
		title: 'Feed title',
		description: 'Feed description',
	},
	{
		id: 'id-6',
		title: 'Feed title',
		description: 'Feed description',
	},
];

export const onePost = () => <Feed items={oneFeedPost} />;

export const manyPosts = () => <Feed items={manyFeedPoss} />;
