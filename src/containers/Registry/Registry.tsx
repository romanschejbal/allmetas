import { FC } from 'react';
import { useTable, Column, useFlexLayout } from 'react-table';
import { IRegistryRow } from '$models';

interface IProps {
	columns: Column<IRegistryRow>[];
	data: IRegistryRow[];
}

const Registry: FC<IProps> = ({ columns, data }) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
		{
			columns,
			data,
		},
		useFlexLayout,
	);

	return (
		<div className="container m-auto rounded-lg px-10 pb-6 pt-8 shadow-[0_6px_25px_rgba(0,0,0,0.15)]">
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
						{rows.map((row, index) => {
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
	);
};

export default Registry;
