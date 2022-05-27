import { FooterDescription, FooterIcon, FooterLinkSection } from '$components';
import { FOOTER_SOCIAL_NETWORK, FOOTER_TITLE } from '$mocks';
import { FC } from 'react';

const Footer: FC = () => (
	<footer className="container mx-auto">
		<div className="mt-12 grid grid-cols-3">
			<div>
				<h2 className="text-2xl font-bold">{FOOTER_TITLE}</h2>
				<div className="mt-3 mb-7">
					<FooterDescription />
				</div>
				<div className="flex gap-2">
					{FOOTER_SOCIAL_NETWORK.map(({ href, id, src }) => (
						<FooterIcon key={id} href={href} src={src} />
					))}
				</div>
			</div>
			<div />
			<div className="grid grid-cols-2">
				<FooterLinkSection />
				<FooterLinkSection />
			</div>
		</div>
	</footer>
);

export default Footer;
