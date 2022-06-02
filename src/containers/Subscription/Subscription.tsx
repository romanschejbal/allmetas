import { FC } from 'react';
import { MailForm } from '$components';

interface IProps {
	title: string;
	text: string;
}

const Subscription: FC<IProps> = ({ title, text }) => (
	<div className="bg-subscriptionBanner bg-cover">
		<div className="container grid pt-12 pb-18 md:pt-16 md:pb-24 xl:px-20">
			<div className="grid grid-flow-row gap-7 md:w-9/12 md:gap-10 xl:w-2/4">
				<div className="grid grid-flow-row gap-3 md:gap-4">
					<h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
					<p className="text-xs font-bold text-white">{text}</p>
				</div>
				<MailForm />
			</div>
		</div>
	</div>
);

export default Subscription;
