import React from 'react';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues);
    return (
        <div className='chart'>
            {
                props.dataPoints.map((dataPoint,index) => (
                    <ChartBar
                        key={index}
                        value = {dataPoint.value}
                        label={dataPoint.label}
                        maxValue = {totalMaximum}
                    />
                ))
            }
        </div>
    )
}

export default Chart