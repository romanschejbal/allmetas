import { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const MainLayout: FC<IProps> = ({ children }) => <>{children}</>;

export default MainLayout;
