import { FC } from 'react';
import { REGISTRY_FILTERS_BTN_TEXT, REGISTRY_PAGE_SELECT_PREFIX } from '$constants';
import ControlButton from './ControlButton';
import SelectControl from './SelectControl';

interface IProps {
	pageSize: number;
	availablePageSizes: number[];
	setPageSize: (value: number) => void;
}

const RegistryHeader: FC<IProps> = ({ pageSize, availablePageSizes, setPageSize }) => (
	<div className="grid place-content-end">
		<div className="grid w-fit grid-flow-col gap-2">
			{Boolean(availablePageSizes.length) && (
				<SelectControl
					prefix={REGISTRY_PAGE_SELECT_PREFIX}
					value={pageSize}
					items={availablePageSizes}
					onChange={setPageSize}
				/>
			)}
			<ControlButton>{REGISTRY_FILTERS_BTN_TEXT}</ControlButton>
		</div>
	</div>
);

export default RegistryHeader;
