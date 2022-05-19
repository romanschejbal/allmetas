import { HeaderInfo, Logo, SearchInput } from '$components';
import { HEADER_ITEMS } from '$mocks';
import { FC } from 'react';

const Header: FC = () => {
	return (
		<div className="grid grid-cols-3 items-center">
			<Logo />
			<HeaderInfo items={HEADER_ITEMS} />
			<SearchInput />
		</div>
	);
};

export default Header;
