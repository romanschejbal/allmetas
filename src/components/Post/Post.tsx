import { FC, ReactNode } from 'react';

interface IProps {
	title: string;
	description: string;
}

const Feed: FC<IProps> = ({ title, description }) => (
	<div className="w-[340px]">
		<div className="h-[192px] w-full rounded-lg bg-darkTypo" />
		<h3 className="text-lg font-bold text-darkTypo line-clamp-1">{title}</h3>
		<p className="text-darkTypo line-clamp-2">{description}</p>
	</div>
);

export default Feed;
