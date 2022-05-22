import Header from '../Header';
import { FC, ReactNode } from 'react';
import { DARK_MODE_DEFAULT_STATE } from '$mocks';

interface IProps {
	children?: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => (
	<>
		<Header darkMode={DARK_MODE_DEFAULT_STATE} />
		{children}
	</>
);

export default MainLayout;
