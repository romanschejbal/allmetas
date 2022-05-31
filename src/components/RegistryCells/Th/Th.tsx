import { FC, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

const Th: FC<IProps> = ({ children }) => (
	<div className="grid h-[48px] content-center px-3">{children}</div>
);

export default Th;
