import { FC, useCallback, useMemo } from 'react';
import { useTable, Column, useFlexLayout, usePagination } from 'react-table';
import { REGISTRY_INITIAL_PAGE_INDEX, REGISTRY_PAGE_SIZE, REGISTRY_PAGE_SIZES } from '$constants';
import { IRegistryRow } from '$models';
import { getAvailablePageSizes, getRowsCounterText } from '$utils';
import RegistryHeader from './RegistryHeader';
import RegistryFooter from './RegistryFooter';

interface IProps {
	columns: Column<IRegistryRow>[];
	data: IRegistryRow[];
}

const Registry: FC<IProps> = ({ columns, data }) => {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		pageCount,
		prepareRow,
		gotoPage,
		setPageSize,
		canNextPage,
		canPreviousPage,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: REGISTRY_INITIAL_PAGE_INDEX, pageSize: REGISTRY_PAGE_SIZE },
		},
		useFlexLayout,
		usePagination,
	);

	const rowsAmount = data.length;

	const availablePageSizes = useMemo(
		() => getAvailablePageSizes(rowsAmount, REGISTRY_PAGE_SIZES),
		[rowsAmount],
	);

	const rowsCounterText = useMemo(
		() => getRowsCounterText(pageIndex, pageSize, rowsAmount),
		[pageIndex, pageSize, rowsAmount],
	);

	const onPageChange = useCallback(
		({ selected }: { selected: number }) => gotoPage(selected),
		[gotoPage],
	);

	return (
		<div className="container rounded-lg px-10 pb-6 pt-8 shadow-primary">
			<div className="grid gap-9">
				<div className="grid gap-6">
					<RegistryHeader
						pageSize={pageSize}
						availablePageSizes={availablePageSizes}
						setPageSize={setPageSize}
					/>
					<div className="w-full overflow-x-auto rounded border border-lavender">
						<table {...getTableProps()} className="w-full">
							<thead>
								{headerGroups.map((headerGroup) => (
									<tr
										{...headerGroup.getHeaderGroupProps()}
										key={headerGroup.id}
										className="border-b border-lavender bg-whisper text-left"
									>
										{headerGroup.headers.map((column) => (
											<th {...column.getHeaderProps()} key={column.id}>
												{column.render('Header')}
											</th>
										))}
									</tr>
								))}
							</thead>
							<tbody {...getTableBodyProps()}>
								{page.map((row) => {
									prepareRow(row);

									return (
										<tr
											{...row.getRowProps()}
											key={row.id}
											className="border-b border-lavender last:border-0 odd:bg-snow"
										>
											{row.cells.map((cell, index) => (
												<td {...cell.getCellProps()} key={index}>
													{cell.render('Cell')}
												</td>
											))}
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
				<RegistryFooter
					canPreviousPage={canPreviousPage}
					canNextPage={canNextPage}
					pageIndex={pageIndex}
					pageCount={pageCount}
					rowsCounterText={rowsCounterText}
					onPageChange={onPageChange}
				/>
			</div>
		</div>
	);
};

export default Registry;
