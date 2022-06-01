import { RefObject, SyntheticEvent, useCallback, useLayoutEffect, useState } from 'react';

const INIT_SCROLL_VALUE = 0;

export const useHorizontalScrollControl = (ref: RefObject<HTMLElement>) => {
	const [srolledLeft, setSrolledLeft] = useState(false);
	const [srolledRight, setSrolledRight] = useState(false);

	useLayoutEffect(() => {
		if (ref?.current) {
			const { scrollWidth, clientWidth } = ref.current;
			const rightStauts = scrollWidth > clientWidth;

			setSrolledRight(rightStauts);
		}
	}, [ref]);

	const onScroll = useCallback(
		({ currentTarget: { scrollLeft, scrollWidth, clientWidth } }: SyntheticEvent) => {
			const leftStatus = scrollLeft !== INIT_SCROLL_VALUE;
			const rightStatus = (scrollWidth - scrollLeft).toFixed() !== clientWidth.toFixed();

			setSrolledLeft(leftStatus);
			setSrolledRight(rightStatus);
		},
		[setSrolledLeft, setSrolledRight],
	);

	return { srolledLeft, srolledRight, onScroll };
};
