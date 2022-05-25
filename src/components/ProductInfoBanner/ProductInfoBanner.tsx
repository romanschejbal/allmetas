import { Quotation } from '$components';
import { BannerSize, QuotationStatus } from '$constants';
import { IProductInfo } from '$models';
import classNames from 'classnames';
import { FC } from 'react';

interface IProps {
	size?: BannerSize;
	bannerInfo: IProductInfo;
}

const ProductInfoBanner: FC<IProps> = ({ size = BannerSize.LARGE, bannerInfo }) => {
	const { title, amount, btnValue, dailyQuotation, weeklyQuotation, callback } = bannerInfo;
	return (
		<div
			className={classNames(
				'pl-[14px]',
				'pt-[12px]',
				'pr-[16px]',
				'pb-[16px]',
				'rounded-[12px]',
				'shadow-[0_6px_25px_rgba(0,0,0,0.15)]',
				{
					['w-[338px]']: size === BannerSize.LARGE,
					['w-[185px]']: size === BannerSize.SMALL,
				},
			)}
		>
			<div className="flex items-center justify-between">
				<div className="gap-1">
					<p className="text-xs text-kashmirBlue">{title}</p>
					<p className="text-[22px] text-black">{amount}</p>
				</div>
				<div className="flex items-center">
					<div className="mr-2 flex flex-col items-center gap-2">
						<p className="mb-[15px] text-[10px] text-hemp">
							{BannerSize.LARGE === size ? '24h volume' : '24h'}
						</p>
						<p className="text-[10px] text-hemp">
							{BannerSize.LARGE === size ? '7d volume' : '7d'}
						</p>
					</div>
					<div className="flex flex-col items-center gap-2">
						<Quotation status={QuotationStatus.UP} value={dailyQuotation} />
						<Quotation status={QuotationStatus.DOWN} value={weeklyQuotation} />
					</div>
				</div>
			</div>
			<div
				className="mt-2 cursor-pointer	rounded-md border-[1px] border-safetyOrange text-center font-bold text-safetyOrange"
				onClick={callback}
			>
				<a>{btnValue}</a>
			</div>
		</div>
	);
};
export default ProductInfoBanner;
