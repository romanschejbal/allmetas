const ROWS_INCREMENT = 1;
const PAGE_INCREMENT = 1;

const getStartRow = (pageIndex: number, pageSize: number) => pageIndex * pageSize + ROWS_INCREMENT;

const getLastRow = (pageIndex: number, pageSize: number, rowsAmount: number) => {
	const lastRow = (pageIndex + PAGE_INCREMENT) * pageSize;

	return lastRow > rowsAmount ? rowsAmount : lastRow;
};

export const getRowsCounterText = (pageIndex: number, pageSize: number, rowsAmount: number) =>
	rowsAmount
		? `Showing ${getStartRow(pageIndex, pageSize)} - ${getLastRow(
				pageIndex,
				pageSize,
				rowsAmount,
		  )} out of ${rowsAmount}`
		: '';
