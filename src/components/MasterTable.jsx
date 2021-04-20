import React,{useMemo} from 'react'
import {useTable,useSortBy,usePagination} from 'react-table';
import MOCK_DATA from '../sampleJson/MasterData.json';
import '../styles/table.css'; 
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'; 
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
import { MasterTableColumn } from './TableDataColumn/columnFormat';
export const MasterTable = () => {
    
    const column=useMemo(()=>MasterTableColumn,[]);
    
    const data=useMemo(()=>MOCK_DATA,[]);
    
    const tableInstance=useTable({columns:column,data:data},useSortBy,usePagination); // specifying data,comlumn and options used in table
    
    const{getTableProps,getTableBodyProps,headerGroups,page,gotoPage,prepareRow,canNextPage,  //extracting all props from table instance
        canPreviousPage,nextPage,pageOptions,state,setPageSize,previousPage}=tableInstance;
    
    const {pageIndex,pageSize}=state; //To keep track of current page and page size
    
    const getId=(id)=>{
        window.location.href="#/mwo/"+id; // function takes Master View  
      }    
    
    return (
        <>
        <table {...getTableProps()} className="responsive-card-table unstriped">
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
                            <tr {...row.getrowProps} onClick={()=> getId(row.original.id) }>
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
                {'Show '}
                <select className='dropDown' value={pageSize} onChange={e=> setPageSize(Number(e.target.value))}>
                   {
                   [10,15,20,50].map(pageSize=>(
                   <option key={pageSize} value={pageSize}>{pageSize}</option>
                   ))
                   }
                </select>
            </span>{'  '}
              <span>
                  Page{' '}
                  <strong>
                     {pageIndex+1} of {pageOptions.length}
                  </strong>{' '}
              </span>
              
                   | Go to{' '}
                   <input  className='Go-to-page' type='text' 
                   onChange={(e)=>{
                       const pageNumber= e.target.value ? Number(e.target.value)-1: 0
                       gotoPage(pageNumber)
                   }}  /> 
        
            <button style={{marginLeft:'10px'}} className='button' onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button className='button' onClick={()=> previousPage()} disabled={!canPreviousPage}>{'<'}</button>
                <button className='button' onClick={()=> nextPage()} disabled={!canNextPage}>{'>'}</button>
            <button className='button' onClick={()=> gotoPage(pageOptions.length-1)} disabled={!canNextPage}>{'>>'}</button>
        </div>
        </>
    )
}
