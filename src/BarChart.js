import React from 'react'
import Chart from 'react-google-charts'

import filterData from './helper/FilterData'

const BarChart = ( props ) => {
    const { data } = props
    const nameDetails = filterData(data).splice(0,1)
    const result = filterData(data).splice(1)

    const filterChartData = ( data ) => {
        const resultArray = data.map((res) => {
            return [res[0],Number( res[2] )]
        })
        return resultArray
    } 
    const chartData =  filterChartData(result)
    const headingAndChartData = [[nameDetails[0][0], nameDetails[0][2]],...chartData]
    return (
        <div>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data={headingAndChartData}
                options={{
                    title: 'Student Zoom details',
                    chartArea: { width: '50%' },
                    hAxis: {
                    title: "Total Duration (Minutes)",
                    minValue: 0,
                    },
                    vAxis: {
                    title: 'name',
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default BarChart
