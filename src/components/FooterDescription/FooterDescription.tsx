import { FC, useCallback, useLayoutEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { DEFAULT_LONG_TEXT } from '$mocks';

const FooterDescription: FC = () => {
	const [showMore, setShowMore] = useState(false);
	const [showFull, setShowFull] = useState(true);
	const contentRef = useRef(null);

	const isTextClamped = useCallback(
		(element: Element) => element.scrollHeight > element.clientHeight,
		[],
	);

	const showFullDescription = useCallback(() => {
		setShowFull(false);
		setShowMore(false);
	}, []);

	useLayoutEffect(() => {
		if (contentRef.current) {
			if (isTextClamped(contentRef.current)) {
				setShowMore(true);
			}
		}
	}, [isTextClamped]);

	return (
		<div>
			<p
				className={classNames('inline', 'text-sm', 'text-grayTypo', {
					['line-clamp-4']: showFull,
				})}
				ref={contentRef}
			>
				{DEFAULT_LONG_TEXT}
			</p>
			{showMore && (
				<span
					className="text-md cursor-pointer font-bold text-royalBlue"
					onClick={showFullDescription}
				>
					Read More
				</span>
			)}
		</div>
	);
};

export default FooterDescription;
