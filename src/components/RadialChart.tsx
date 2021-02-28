import ApexChart from 'react-apexcharts'
import { useState } from 'react'

interface Props {
	height?: string
	series?: number[]
	fontSize?: string
	dataSize?: string
}

const RadialChart: React.FC<Props> = ({
	height,
	series,
	fontSize,
	dataSize,
}) => {
	const [options] = useState({
		chart: {},
		colors: ['#3ABD98', '#4dc5a3', '#7ed7be'],
		title: {
			text: 'Premium Users',
			align: 'left',
			style: {
				fontWeight: 'bold',
				fontSize: fontSize,
			},
		},
		plotOptions: {
			radialBar: {
				startAngle: -90,
				endAngle: 90,
				track: {
					startAngle: -90,
					endAngle: 90,
					background: '#B9B9B9',
				},
				dataLabels: {
					name: {
						show: false,
					},
					value: {
						offsetY: -2,
						fontSize: dataSize,
						color: '#B9B9B9',
					},
				},
			},
		},
	})

	return (
		<div>
			<ApexChart
				type='radialBar'
				width='100%'
				height={height}
				options={options}
				series={series}
			/>
		</div>
	)
}

export default RadialChart
