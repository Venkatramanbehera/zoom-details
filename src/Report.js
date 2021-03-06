import React from 'react'

const Report = (props) => {
    const { data } = props
    
    // this function identifies the host of the report
    function search( tableData ){
        for( let i=0 ; i<tableData.length ; i++){
            const d = tableData[i]
            if(d.includes("No")){
                return d
            }
        }
    }
    const reportData = search(data)

    // extracting hostname and duration from host array
    const [hostName,,duration] = reportData

    // calculating the length of the total participants
    const participants =  data.length
    
    return (
        <div>
            <h2>Report</h2>
            <h3>Host : { hostName } </h3>
            <h3>Total Participants : { participants } </h3>
            <h3>Duration :- { duration } minutes ( { Math.floor(duration/60)} hour { duration % 60 } minutes) </h3>
        </div>
    )
}

export default Report
