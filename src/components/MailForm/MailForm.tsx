import { FC } from 'react';
import { SUBSCR_BTN_TEXT, SUBSCR_HOLDER_TEXT } from '$constants';

const MailForm: FC = () => (
	<div className="flex h-[32px] md:h-[43px] max-w-[364px] md:max-w-[484px]">
		<input
			className="h-full grow border-black  px-3 md:px-4 text-xs md:text-sm font-bold text-black placeholder:text-sm placeholder:font-bold placeholder:text-black"
			placeholder={SUBSCR_HOLDER_TEXT}
			type="text"
		/>
		<button className="h-full bg-grey px-3 md:px-4 md:text-lg font-bold text-white">{SUBSCR_BTN_TEXT}</button>
	</div>
);

export default MailForm;
