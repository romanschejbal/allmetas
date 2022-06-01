import { FC } from 'react';

interface IProps {
	title: string;
	description: string;
}

const Post: FC<IProps> = ({ title, description }) => (
	<li className="grid w-[255px] snap-center gap-3 md:w-[340px] md:snap-none md:gap-4">
		<div className="h-[144px] w-full rounded-lg bg-[url('/images/feed/post.jpg')] md:h-[192px]" />
		<div className="grid gap-1 md:gap-1.5">
			<h3 className="font-bold text-darkTypo line-clamp-1 md:text-lg">{title}</h3>
			<p className="text-sm text-darkTypo line-clamp-2 md:text-base">{description}</p>
		</div>
	</li>
);

export default Post;
