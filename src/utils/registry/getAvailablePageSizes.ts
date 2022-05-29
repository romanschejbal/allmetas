const MIN_OPTIONS_AMOUNT = 2;

const filterAvailablePageSizes = (rowsAmount: number, pageSizes: number[]) =>
	pageSizes.filter((pageSizes) => rowsAmount >= pageSizes);

export const getAvailablePageSizes = (rowsAmount: number, pageSizes: number[]) => {
	const availablePageSizes = filterAvailablePageSizes(rowsAmount, pageSizes);

	return availablePageSizes.length >= MIN_OPTIONS_AMOUNT ? availablePageSizes : [];
};
