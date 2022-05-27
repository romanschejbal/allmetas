import { FC, ReactNode } from 'react';
import { DARK_MODE_DEFAULT_STATE, SUBSCR_TEXT, SUBSCR_TITLE } from '$mocks';
import Header from '../Header';
import Subscription from '../Subscription';
import Footer from '../Footer';

interface IProps {
	children?: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => (
	<>
		<Header darkMode={DARK_MODE_DEFAULT_STATE} />
		{children}
		<Subscription title={SUBSCR_TITLE} text={SUBSCR_TEXT} />
		<Footer />
	</>
);

export default MainLayout;
