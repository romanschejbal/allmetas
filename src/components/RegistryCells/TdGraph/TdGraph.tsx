import { FC } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

interface IProps {
	decreased: boolean;
	data: number[];
}

const TdGraph: FC<IProps> = ({ decreased, data }) => (
	<div className="grid h-[64px] p-1">
		<Sparklines data={data}>
			<SparklinesLine
				style={{ strokeWidth: 4, fill: 'none', stroke: decreased ? '#027A00' : '#027A00' }}
			/>
		</Sparklines>
	</div>
);

export default TdGraph;
