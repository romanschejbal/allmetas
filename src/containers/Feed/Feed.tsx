import { FC, useRef } from 'react';
import useDraggableScroll from 'use-draggable-scroll';
import { Post } from '$components';
import { IPost } from '$models';
import { useHorizontalScrollControl } from '$hooks';

interface IProps {
	items: IPost[];
}

const Feed: FC<IProps> = ({ items }) => {
	const ref = useRef(null);

	const { onMouseDown } = useDraggableScroll(ref);

	const { srolledLeft, srolledRight, onScroll } = useHorizontalScrollControl(ref);

	return (
		<div className="relative overflow-hidden md:container">
			<ul
				ref={ref}
				onMouseDown={onMouseDown}
				className="grid snap-x auto-cols-min grid-flow-col gap-3 overflow-x-scroll px-4 scrollbar-hide md:snap-none md:gap-4 md:px-0"
				onScroll={onScroll}
			>
				{items.map(({ id, title, description }) => (
					<Post key={id} title={title} description={description} />
				))}
			</ul>
			<div className="child:absolute child:top-0 child:-bottom-2 child:w-20 child:from-white">
				{srolledLeft && <div className="left-0 bg-gradient-to-r" />}
				{srolledRight && <div className="right-0 bg-gradient-to-l" />}
			</div>
		</div>
	);
};

export default Feed;
