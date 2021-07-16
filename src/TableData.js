import React from 'react'

import Report from './Report'

const TableData = (props) => {
    const { data } = props
    const tableDataW = data.slice(1,data.length)
    
    function filterData( tableData ){
        const result = []
        for( let i=0 ; i<tableData.length ; i++){
            const d = tableData[i]
            if(!d.includes("")){
                result.push(d)
            }
        }
        return result
    }
    const tableData = filterData(tableDataW)
    
    return (
        <div>
            <Report data={ tableData }/>
            <h1>Table Data</h1>
            <table>
                <thead>
                    <tr>
                        {
                            data[0].map((d,i) => {
                                return <th key={i}>{d}</th>
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
                                            return <td key={i}>{t}</td>
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
