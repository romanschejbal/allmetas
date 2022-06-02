import { FooterDescription, FooterIcon, FooterLinkSection } from '$components';
import { DEFAULT_LONG_TEXT, FOOTER_SOCIAL_NETWORK, FOOTER_TITLE } from '$mocks';
import { FC } from 'react';

const Footer: FC = () => (
	<footer className="container mx-auto">
		<div className="grid grid-cols-1 pt-12 md:grid-cols-2 xl:grid-cols-3 ">
			<div>
				<h2 className="text-2xl font-bold">{FOOTER_TITLE}</h2>
				<div className="mt-3 mb-7">
					<FooterDescription text={DEFAULT_LONG_TEXT} />
				</div>
				<div className="flex gap-2">
					{FOOTER_SOCIAL_NETWORK.map(({ href, id, src }) => (
						<FooterIcon key={id} href={href} src={src} />
					))}
				</div>
			</div>
			<div className="hidden xl:block" />
			<div className="grid grid-cols-2 pt-6 md:pt-0">
				<FooterLinkSection />
				<FooterLinkSection />
			</div>
		</div>
	</footer>
);

export default Footer;
