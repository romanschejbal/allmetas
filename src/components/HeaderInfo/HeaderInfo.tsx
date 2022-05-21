import { FC } from 'react';
import { Item } from './Item';
import { IHeaderItem } from '$models';

interface IProp {
	items: IHeaderItem[];
}

const HeaderInfo: FC<IProp> = ({ items }) => (
	<div className="grid grid-cols-4 gap-3">
		{items.map(({ id, title, info, value }) => (
			<Item key={id} title={title} info={info} value={value} />
		))}
	</div>
);

export default HeaderInfo;
