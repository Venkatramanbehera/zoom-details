import React, {  useState } from 'react'
import Papa from 'papaparse'

import TableData from './TableData'
import BarChart from './BarChart'

const File = (props) => {
    const [ fileData, setFileData ] = useState('')
    const [ data, setData ] = useState([])


    const handleFile = (e) => {
        const file = e.target.files[0]
        setFileData(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        Papa.parse(fileData, {
            complete : function(result) {
                setData(result.data)
            }
        })
    } 

    
    return (
        <div>
           <h1> File Upload + CSV parser</h1> 
           <form onSubmit={ handleSubmit }>
               <input type="file" onChange={ handleFile }/> <br />
               <input type="submit" value="Upload file" />
           </form>
           { data.length > 0 && (
               <div>
                   <TableData data={ data }/>
                   <BarChart data={ data }/>
               </div>
           ) }
           
        </div>
    )
}

export default File
