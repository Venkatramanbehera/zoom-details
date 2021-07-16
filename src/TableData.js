import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Report from './Report'

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
            <table className={ classes.table }>
                <thead>
                    <tr>
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
