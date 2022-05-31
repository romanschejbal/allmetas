import { FC, ReactNode } from 'react';

interface IProps {
	children: ReactNode;
	onClick?: () => void;
}

const ControlButton: FC<IProps> = ({ children, onClick }) => (
	<button className="rounded bg-aliceBlue py-1 px-2.5 text-xs text-veniceBlue" onClick={onClick}>
		{children}
	</button>
);

export default ControlButton;
