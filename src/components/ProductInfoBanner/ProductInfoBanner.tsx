import { Quotation } from '$components';
import { FC } from 'react';

interface IProps {
	full?: boolean;
	title: string;
	amount: string;
	btnValue: string;
	dailyQuotation: string;
	weeklyQuotation: string;
	callback: () => void;
}

const ProductInfoBanner: FC<IProps> = ({
	full,
	title,
	amount,
	btnValue,
	dailyQuotation,
	weeklyQuotation,
	callback,
}) => (
	<div className="rounded-[12px] pl-3.5 pt-3 pr-4 pb-4 shadow-primary">
		<div className="flex items-center justify-between gap-3">
			<div className="gap-1">
				<p className="text-xs text-kashmirBlue">{title}</p>
				<p className="mt-2.5 text-2xl text-black">{amount}</p>
			</div>
			<div className="flex items-center">
				<div className="mr-2 flex flex-col items-center gap-2">
					<p className="mb-4 text-xs text-hemp">{full ? '24h volume' : '24h'}</p>
					<p className="text-xs text-hemp">{full ? '7d volume' : '7d'}</p>
				</div>
				<div className="flex flex-col items-center gap-2">
					<Quotation up value={dailyQuotation} />
					<Quotation value={weeklyQuotation} />
				</div>
			</div>
		</div>
		<div
			className="cursor-pointerrounded-md mt-2 border-[1px] border-safetyOrange text-center font-bold text-safetyOrange"
			onClick={callback}
		>
			<a>{btnValue}</a>
		</div>
	</div>
);
export default ProductInfoBanner;
