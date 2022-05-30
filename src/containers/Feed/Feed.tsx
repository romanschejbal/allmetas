import { FC, useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';
import { Post } from '$components';
import { IPost } from '$models';

interface IProps {
	items: IPost[];
}

const Feed: FC<IProps> = ({ items }) => {
	const ref = useRef(null);

	const { onMouseDown } = useDraggableScroll(ref);

	return (
		<ul
			ref={ref}
			onMouseDown={onMouseDown}
			className="grid grid-flow-col gap-3 md:gap-4 overflow-x-scroll px-8 md:px-12 scrollbar-hide snap-x md:snap-none"
		>
			{items.map(({ id, title, description }) => (
				<Post key={id} title={title} description={description} />
			))}
		</ul>
	);
};

export default Feed;
