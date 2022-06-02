import { FC } from 'react';
import SiteLogo from '/images/header/logo.svg';
import DarkSiteLogo from '/images/header/dark-logo.svg';
import Link from 'next/link';

interface IProps {
	darkMode: boolean;
}
const Logo: FC<IProps> = ({ darkMode }) =>
	darkMode ? (
		<Link href="/" passHref>
			<DarkSiteLogo />
		</Link>
	) : (
		<Link href="/" passHref>
			<SiteLogo />
		</Link>
	);

export default Logo;
