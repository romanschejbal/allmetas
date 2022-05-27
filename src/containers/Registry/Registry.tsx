import { FC, useMemo } from 'react';
import { useTable, Column, useFlexLayout, usePagination } from 'react-table';
import { REGISTRY_INITIAL_PAGE, REGISTRY_PAGE_SIZE, REGISTRY_PAGE_SIZES } from '$constants';
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
		prepareRow,
		setPageSize,
		state: { pageIndex, pageSize },
	} = useTable(
		{
			columns,
			data,
			initialState: { pageIndex: REGISTRY_INITIAL_PAGE, pageSize: REGISTRY_PAGE_SIZE },
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

	return (
		<div className="container m-auto rounded-lg px-10 pb-6 pt-8 shadow-[0_6px_25px_rgba(0,0,0,0.15)]">
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
				<RegistryFooter rowsCounterText={rowsCounterText} />
			</div>
		</div>
	);
};

export default Registry;
