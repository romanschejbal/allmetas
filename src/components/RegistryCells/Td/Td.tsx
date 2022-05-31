import { FC, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
}

const Td: FC<IProps> = ({ children }) => (
	<div className="grid h-[64px] content-center px-3">{children}</div>
);

export default Td;
