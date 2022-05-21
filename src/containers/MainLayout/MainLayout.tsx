import Header from '../Header';
import { FC, ReactNode } from 'react';

interface IProps {
	children?: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => (
	<>
		<Header />
		{children}
	</>
);

export default MainLayout;
