import { FC } from 'react';
import SiteLogo from '/images/header/logo.svg';
import DarkSiteLogo from '/images/header/dark-logo.svg';

interface IProps {
	darkMode: boolean;
}
const Logo: FC<IProps> = ({ darkMode }) => (darkMode ? <DarkSiteLogo /> : <SiteLogo />);

export default Logo;
