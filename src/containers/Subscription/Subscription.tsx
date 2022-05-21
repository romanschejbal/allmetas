import { FC } from 'react';
import { MailForm } from '$components';

interface IProps {
	title: string;
	text: string;
}

const Subscription: FC<IProps> = ({ title, text }) => (
	<div className="bg-darkTypo">
		<div className="grid grid-cols-2 px-32 pt-16 pb-24">
			<div className="grid grid-flow-row gap-10">
				<div className="grid grid-flow-row gap-4">
					<h2 className="text-4xl font-bold text-white">{title}</h2>
					<p className="text-xs font-bold text-white">{text}</p>
				</div>
				<MailForm />
			</div>
		</div>
	</div>
);

export default Subscription;
