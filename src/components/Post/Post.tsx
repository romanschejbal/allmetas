import { FC, ReactNode } from 'react';

interface IProps {
	title: string;
	description: string;
}

const Feed: FC<IProps> = ({ title, description }) => (
	<li className="grid w-[340px] gap-4">
		<div className="h-[192px] w-full rounded-lg bg-[url('/images/feed/post.jpg')]" />
		<div className="grid gap-1.5">
			<h3 className="text-lg font-bold text-darkTypo line-clamp-1">{title}</h3>
			<p className="text-darkTypo line-clamp-2">{description}</p>
		</div>
	</li>
);

export default Feed;
