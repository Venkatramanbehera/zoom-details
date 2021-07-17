import React, {  useState } from 'react'
import Papa from 'papaparse'

import { makeStyles } from '@material-ui/core/styles'

import TableData from './TableData'
import BarChart from './BarChart'

const useStyle = makeStyles({
    flexboxContainer:{
        display:'flex',
        justifyContent:'space-around'
    },
    form:{
        // textAlign:'center'
    },
    inputFile:{
        width:'300px',
        fontSize:'20px'
    },
    inputBtn : {
        marginTop:'20px',
        backgroundColor:'lime',
        color:'white',
        fontSize:'20px'
    }
})

const FileContainer = (props) => {
    const classes = useStyle()

    const [ fileData, setFileData ] = useState('')
    const [ data, setData ] = useState([])

    // for handling input type file 
    const handleFile = (e) => {
        const file = e.target.files[0]
        setFileData(file)
    }

    // for handling form data after submit
    const handleSubmit = (e) => {
        e.preventDefault()
        // papaparse helps to convert csv data to 2d array
        Papa.parse(fileData, {
            complete : function(result) {
                setData(result.data)
            }
        })
    } 

    
    return (
        <div>
           <h1> File Upload + CSV parser</h1> 
           <form onSubmit={ handleSubmit } className={ classes.form}>
               <input type="file" onChange={ handleFile } className={ classes.inputFile }/>  <br />
               <input type="submit" value="Upload file" className={ classes.inputBtn }/>
           </form>

           {/* i use conditional rendering because , if the data is present then we are able to see the component*/}
           { data.length > 0 && (
               <div className={ classes.flexboxContainer }>
                   <TableData data={ data }/>
                   <BarChart data={ data } />
               </div>
           ) }
           
        </div>
    )
}

export default FileContainer
