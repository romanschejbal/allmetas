import { FC } from 'react';
import ReactPaginate from 'react-paginate';
import { RegistryPageButton, REGISTRY_MARGIN_PAGES, REGISTRY_PAGE_RANGE } from '$constants';
import RowsCounter from './RowsCounter';
import PageButton from './PageButton';

interface IProps {
	canPreviousPage: boolean;
	canNextPage: boolean;
	pageIndex: number;
	pageCount: number;
	rowsCounterText: string;
	onPageChange: (value: { selected: number }) => void;
}

const RegistryFooter: FC<IProps> = ({
	canPreviousPage,
	canNextPage,
	pageIndex,
	pageCount,
	rowsCounterText,
	onPageChange,
}) => (
	<div className="grid grid-flow-col place-content-between items-center">
		<RowsCounter text={rowsCounterText} />
		<ReactPaginate
			pageRangeDisplayed={REGISTRY_PAGE_RANGE}
			marginPagesDisplayed={REGISTRY_MARGIN_PAGES}
			forcePage={pageIndex}
			pageCount={pageCount}
			onPageChange={onPageChange}
			disabledClassName="text-grayTypo"
			activeClassName="bg-aliceBlue rounded"
			className="grid grid-flow-col gap-0.5 text-sm leading-4 text-matisse child:p-2"
			previousLabel={
				<PageButton reverted canPage={canPreviousPage} text={RegistryPageButton.PREV} />
			}
			nextLabel={<PageButton canPage={canNextPage} text={RegistryPageButton.NEXT} />}
		/>
		<div />
	</div>
);

export default RegistryFooter;
