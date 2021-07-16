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

export default filterData