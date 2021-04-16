import React,{useMemo} from 'react'
import {useTable,useSortBy,useGlobalFilter,usePagination} from 'react-table';
import MOCK_DATA from '../sampleJson/MasterData.json';
import '../styles/table.css'; 
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'; 
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
import { ItemTableColumn } from './TableDataColumn/columnFormat';
export const ItemTable = ({ItemsData}) => {
    
    const column=useMemo(()=>ItemTableColumn,[]);
    
    const data=useMemo(()=>ItemsData,[]);
    
    const tableInstance=useTable({
        columns:column,data:data
    },useSortBy,usePagination);
    
    const{getTableProps,getTableBodyProps,headerGroups,page,gotoPage,prepareRow,canNextPage,
        canPreviousPage,nextPage,pageOptions,state,previousPage}=tableInstance;
    
    const {pageIndex}=state;
    
    const getItemId=(id)=>{
        
        window.location.href="#/item/"+id  //Taking to 
      
    }    
    
    return (
        <>
        <h3 style={{marginTop:'30px'}} className='font'>Order Details</h3>
        <table {...getTableProps()}  className="responsive-card-table unstriped item-table">
            <thead>
                {
                    headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps(column.Header!=="COST" && column.Header!=="COUNT" ? column.getSortByToggleProps():"")} >{column.render('Header')}
                                <span style={{marginLeft:'20px'}}>
                                    {column.isSorted? (column.isSortedDesc? <ArrowDownwardIcon/>:<ArrowUpwardIcon/>):''}
                                </span>
                                </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    page.map((row)=>{
                        prepareRow(row);
                        return (
                            <tr {...row.getrowProps} onClick={()=> getItemId(row.original.id) }>
                                {
                                    row.cells.map((cell)=>{
                                    return <td data-column={cell.column.Header} {...cell.getCellProps}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div>
              <span>
                  Page{' '}
                  <strong>
                     {pageIndex+1} of {pageOptions.length}
                  </strong>{' '}
              </span>
              <span>
                   | Go to{' '}
                   <input type='text' 
                   onChange={(e)=>{
                       const pageNumber= e.target.value ? Number(e.target.value)-1: 0
                       gotoPage(pageNumber)
                   }} style={{width:'40px'}} /> 
              </span>{' '}
            <button onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button onClick={()=> previousPage()} disabled={!canPreviousPage}>{'<'}</button>
                <button onClick={()=> nextPage()} disabled={!canNextPage}>{'>'}</button>
            <button onClick={()=> gotoPage(pageOptions.length-1)} disabled={!canNextPage}>{'>>'}</button>
        </div>
        </>
    )
}
