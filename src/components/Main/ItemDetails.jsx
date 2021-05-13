import React from 'react'
import { Table } from '../Table/Table'
import '../../styles/table.css'
const ItemDetails = ({data,language}) => {
    return (
        <div className='singleItemTable'>
            <Table data={data} language={language} tableType='singleItem'/>
        </div>
    )
}

export default ItemDetails
