import { ReactElement, ReactNode, useCallback, useState } from 'react';
import { Listbox } from '@headlessui/react';
import Arrow from '/images/registry/arrow.svg';
import classNames from 'classnames';

interface IProps<T> {
	prefix?: string;
	value: T;
	items: T[];
	onChange: (value: T) => void;
}

const SelectControl = <T extends ReactNode>({
	prefix,
	value,
	items,
	onChange,
}: IProps<T>): ReactElement => (
	<div className="grid grid-flow-col items-center gap-3">
		{prefix && <span className="text-xs text-kashmirBlue">{prefix}</span>}
		<Listbox value={value} onChange={onChange} as="div" className="relative w-fit">
			{({ open }) => (
				<>
					<Listbox.Button className="grid grid-flow-col items-center gap-2 rounded bg-aliceBlue py-1 px-2.5 text-xs text-veniceBlue">
						<span>{value}</span>
						<Arrow
							className={classNames({
								['rotate-180']: open,
							})}
						/>
					</Listbox.Button>
					<Listbox.Options className="absolute mt-1 min-w-full max-w-min rounded bg-aliceBlue py-0.5 px-2.5 text-xs text-veniceBlue shadow-xl">
						{items.map((item, index) => (
							<Listbox.Option key={index} value={item} className="cursor-pointer py-1 text-center">
								{({ active, selected }) => (
									<span
										className={classNames({
											['font-bold']: active || selected,
										})}
									>
										{item}
									</span>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</>
			)}
		</Listbox>
	</div>
);
export default SelectControl;
