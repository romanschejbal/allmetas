import { FC, ReactNode } from 'react';
import { SUBSCR_TEXT, SUBSCR_TITLE } from '$mocks';
import Header from '../Header';
import Subscription from '../Subscription';

interface IProps {
	children?: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => (
	<>
		<Header />
		{children}
		<Subscription title={SUBSCR_TITLE} text={SUBSCR_TEXT} />
	</>
);

export default MainLayout;
