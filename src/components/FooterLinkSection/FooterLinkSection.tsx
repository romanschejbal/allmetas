import { FC } from 'react';
import { FOOTER_LINK } from '$mocks';
import FooterLinkItem from './FooterLinkItem';

const FooterLinkSection: FC = () => (
	<div className="grid">
		{FOOTER_LINK.map(({ title, href }, index) => (
			<FooterLinkItem key={index} title={title} href={href} isFirst={index === 0} />
		))}
	</div>
);

export default FooterLinkSection;
