import { FC } from 'react';
import { SUBSCR_BTN_TEXT, SUBSCR_HOLDER_TEXT } from '$constants';

const MailForm: FC = () => (
	<div className="grid h-[43px] w-fit grid-flow-col">
		<input
			className="h-full w-[320px] border-black px-4 text-sm font-bold text-black placeholder:text-sm placeholder:font-bold placeholder:text-black"
			placeholder={SUBSCR_HOLDER_TEXT}
			type="text"
		/>
		<button className="h-full bg-grey px-4 text-lg font-bold text-white">{SUBSCR_BTN_TEXT}</button>
	</div>
);

export default MailForm;
