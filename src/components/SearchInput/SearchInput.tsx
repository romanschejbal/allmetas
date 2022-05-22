import classNames from 'classnames';
import { FC } from 'react';
import SearchLogo from '/images/header/icon-search.svg';
import DarkSearchLogo from '/images/header/dark-icon-search.svg';

interface IProps {
	darkMode: boolean;
}
const SearchInput: FC<IProps> = ({ darkMode }) => {
	return (
		<div className="max-w-[391px]">
			<div className="relative justify-self-end">
				{darkMode ? (
					<DarkSearchLogo className="absolute top-2/4 left-2 box-border translate-y-[-50%]" />
				) : (
					<SearchLogo className="absolute top-2/4 left-2 box-border translate-y-[-50%]" />
				)}
				<input
					className={classNames('h-[45px]', 'w-full', 'rounded-lg', 'pl-[30px]', 'box-border', {
						['border-[#004168]/[.28]']: !darkMode,
						['border-[#9f9f9f]']: darkMode,
						['bg-[#131313]']: darkMode,
						['text-[#9f9f9f]']: darkMode,
					})}
					placeholder="Search"
					type="text"
				/>
			</div>
		</div>
	);
};

export default SearchInput;
