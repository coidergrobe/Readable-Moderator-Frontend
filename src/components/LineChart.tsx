import ApexChart from 'react-apexcharts'
import { useState } from 'react'

interface Props {
	categories?: string[]
	data?: number[]
	dataName?: string
	textTitle?: string
	height?: string
	toolbar?: boolean
}

const LineChart: React.FC<Props> = ({
	categories,
	data,
	dataName,
	textTitle,
	height,
	toolbar,
}) => {
	const [options, setOptions] = useState({
		chart: {
			foreColor: '#B9B9B9',
			toolbar: { show: toolbar },
		},
		xaxis: {
			categories: categories,
			labels: {
				style: {
					width: '250px',
				},
			},
		},
		title: {
			text: textTitle,
			align: 'left',
			style: {
				fontSize: '25px',
				color: '#201f1e',
				fontWeight: 500,
			},
		},
		stroke: {
			curve: 'smooth',
		},
		colors: ['#3ABD98', '#4dc5a3', '#7ed7be'],
	})

	const [series, setSeries] = useState([
		{
			name: dataName,
			data: data,
		},
	])

	return (
		<div>
			<ApexChart
				options={options}
				series={series}
				type='line'
				height={height}
				width='100%'
			/>
		</div>
	)
}

LineChart.defaultProps = {
	toolbar: false,
}

export default LineChart
