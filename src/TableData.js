import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Report from './Report'
import filterData from './helper/FilterData'

const useStyle = makeStyles({
    table:{
        border:'1px solid #ddd',
        textAlign:'left',
        borderCollapse:'collapse'
    },
    td :{
        border:'1px solid #ddd',
        padding:'15px'
    },
    th : {
        border:'1px solid #ddd',
        padding:'15px'
    }
})

const TableData = (props) => {
    const classes = useStyle()

    const { data } = props
    // extracting the table body data from 2d array
    const tableDataW = data.slice(1,data.length)
    // for filtering 2d array using a helper function of filter data
    const tableData = filterData(tableDataW)
    
    return (
        <div>
            {/* Report Component */}
            <Report data={ tableData }/>

            <h1>Table Data</h1>
            <table className={ classes.table }>
                <thead>
                    <tr>
                        {/* i use data[0] because in the 2d array first row of array is the heading of the table. */}
                        {
                            data[0].map((d,i) => {
                                return <th key={i} className={ classes.td }>{d}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((tad,index) => {
                            return ( 
                                <tr key={index}>
                                    {
                                        tad.map((t,i) => {
                                            return <td key={i} className={ classes.td }>{t}</td>
                                        })
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableData
