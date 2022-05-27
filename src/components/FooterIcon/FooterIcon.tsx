import { FC } from 'react';

interface IProps {
	href: string;
	src: string;
}

const FooterIcon: FC<IProps> = ({ href, src }) => (
	<div className="flex h-[48px] w-[48px] items-center justify-center rounded-full	bg-solitude">
		<a href={href} className="flex" target="_blank" rel="noreferrer">
			<img src={src} alt="logo" width={20} height={20} />
		</a>
	</div>
);

export default FooterIcon;
