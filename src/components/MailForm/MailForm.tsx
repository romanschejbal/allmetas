import { FC } from 'react';
import { SUBSCR_BTN_TEXT, SUBSCR_HOLDER_TEXT } from '$constants';

const MailForm: FC = () => (
	<div className="flex h-[32px] max-w-[364px] md:h-[43px] md:max-w-[484px]">
		<input
			className="h-full grow border-black  px-3 text-xs font-bold text-black placeholder:text-sm placeholder:font-bold placeholder:text-black md:px-4 md:text-sm"
			placeholder={SUBSCR_HOLDER_TEXT}
			type="text"
		/>
		<button className="h-full bg-grey px-3 font-bold text-white md:px-4 md:text-lg">
			{SUBSCR_BTN_TEXT}
		</button>
	</div>
);

export default MailForm;
