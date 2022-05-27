import { FC } from 'react';

interface IProps {
	isFirst: boolean;
	title: string;
	href: string;
}

const FooterLinkItem: FC<IProps> = ({ isFirst, title, href }) =>
	isFirst ? (
		<a href={href} className="mb-6 text-lg font-bold">
			{title}
		</a>
	) : (
		<a href={href} className="mb-5 text-grayTypo">
			{title}
		</a>
	);

export default FooterLinkItem;
