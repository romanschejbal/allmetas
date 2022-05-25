import { HeaderInfo, Logo, SearchInput } from '$components';
import { HEADER_ITEMS } from '$mocks';
import classNames from 'classnames';
import { FC } from 'react';

interface IProps {
	darkMode: boolean;
}

const Header: FC<IProps> = ({ darkMode }) => (
	<header
		className={classNames({
			['bg-[#131313]']: darkMode,
		})}
	>
		<div className="container m-auto grid grid-cols-4 items-center py-3.5">
			<Logo darkMode={darkMode} />
			<HeaderInfo items={HEADER_ITEMS} darkMode={darkMode} />
			<SearchInput darkMode={darkMode} />
		</div>
	</header>
);

export default Header;
