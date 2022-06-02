import { FC } from 'react';
import { HeaderInfoItem } from './HeaderInfoItem';
import { IHeaderItem } from '$models';

interface IProp {
	items: IHeaderItem[];
	darkMode: boolean;
}

const HeaderInfo: FC<IProp> = ({ items, darkMode }) => (
	<div className="col-span-2 hidden grid-cols-4 gap-3 justify-self-center lg:grid">
		{items.map(({ id, title, info, value }) => (
			<HeaderInfoItem key={id} title={title} info={info} value={value} darkMode={darkMode} />
		))}
	</div>
);

export default HeaderInfo;
