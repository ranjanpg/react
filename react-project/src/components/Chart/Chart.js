import React from 'react'
import ChartBar from './ChartBar';
import './Chart.css'

const Chart = props => {
    const monthlyExpenses = props.items.map(el=>{return el.value})
    const totalMaximum = Math.max(...monthlyExpenses);

    return (
        <div className='chart'>
            {props.items.map(dataPoints=>{
                return (<ChartBar
                    key={dataPoints.label}
                    value={dataPoints.value}
                    maxValue={totalMaximum}
                    label={dataPoints.label} 
                />)
            })}
        </div>
    )
}

export default Chart;