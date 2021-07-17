import React from 'react'
import Chart from 'react-google-charts'

import filterData from './helper/FilterData'

const BarChart = ( props ) => {
    const { data } = props

    // filtering the heading from 2d array of first array
    const nameDetails = filterData(data).splice(0,1)

    // filter the data using helper function of filterData
    const result = filterData(data).splice(1)

    // then i filter the data and put name and time duration in the 2d array
    const filterChartData = ( data ) => {
        const resultArray = data.map((res) => {
            return [res[0],Number( res[2] )]
        })
        return resultArray
    } 

    // function calling area
    const chartData =  filterChartData(result)

    // using spread operator added the heading in the chart data. because  chart component supports first array that is heading.  
    const headingAndChartData = [[nameDetails[0][0], nameDetails[0][2]],...chartData]
    return (
        <div>
            <Chart
                style={{ marginTop:'200px'}}
                width={'500px'}
                height={'300px'}
                chartType="BarChart"
                loader={<div>Loading Chart......</div>}
                // data holds 2d array
                data={ headingAndChartData }
                options={{
                    title: 'Student Zoom details',
                    chartArea: { width: '50%' },
                    hAxis: {
                    title: "Total Duration (Minutes)",
                    minValue: 0,
                    },
                    vAxis: {
                    title: 'Name Of Students',
                    },
                }}
                // For tests
                // rootProps={{ 'data-testid': '1' }}
            />
        </div>
    )
}

export default BarChart
