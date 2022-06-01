import { RefObject, SyntheticEvent, useCallback, useLayoutEffect, useState } from 'react';

const INIT_SCROLL_VALUE = 0;

export const useHorizontalScrollControl = (ref: RefObject<HTMLElement>) => {
	const [srolledLeft, setSrolledLeft] = useState(false);
	const [srolledRight, setSrolledRight] = useState(false);

	useLayoutEffect(() => {
		if (ref?.current) {
			const { scrollWidth, clientWidth } = ref.current;

			setSrolledRight(scrollWidth > clientWidth);
		}
	}, [ref]);

	const onScroll = useCallback(
		({ currentTarget: { scrollLeft, scrollWidth, clientWidth } }: SyntheticEvent) => {
			setSrolledLeft(scrollLeft !== INIT_SCROLL_VALUE);
			setSrolledRight(scrollWidth - scrollLeft !== clientWidth);
		},
		[setSrolledLeft, setSrolledRight],
	);

	return { srolledLeft, srolledRight, onScroll };
};
