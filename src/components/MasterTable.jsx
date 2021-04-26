import React,{useMemo} from 'react'
import {useTable,useSortBy,usePagination} from 'react-table';
import '../styles/table.css'; 
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'; 
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
import { MultiLanguageTableColumn } from './TableDataColumn/columnFormat';
import {IntlProvider, FormattedMessage} from 'react-intl';
import { LangMessage } from '../locale/locale';

export function MasterTable({Masterdata,language}) 
{

    const unsortColumnName=['COST','COUNT','लागत','गिनती','செலவு','எண்ணிக்கை'];
    const tableColumn=MultiLanguageTableColumn[language];
    console.log(tableColumn,language)
    const column=useMemo(()=>tableColumn,[tableColumn]);
    const data=useMemo(()=>Masterdata,[Masterdata]);
    const tableInstance=useTable({columns:column,data:data},useSortBy,usePagination); // specifying data,comlumn and options used in table
    
    const{getTableProps,getTableBodyProps,headerGroups,page,gotoPage,prepareRow,canNextPage,  //extracting all props from table instance
        canPreviousPage,nextPage,pageOptions,state,setPageSize,previousPage}=tableInstance;
    
    const {pageIndex,pageSize}=state; //To keep track of current page and page size
    
    const getId=(id)=>{
        window.location.href="#/mwo/"+id+'/lang/'+language; // function takes Master View  
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
                                <th {...column.getHeaderProps(!unsortColumnName.includes(column.Header)? column.getSortByToggleProps():"")} >{column.render('Header')}
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
         <IntlProvider locale={language} messages={LangMessage[language]}>
            <span>
                <label id='show'><FormattedMessage id='show' value={language}/></label>{' '}
                <select className='dropDown' id='show' value={pageSize} onChange={e=> setPageSize(Number(e.target.value))}>
                   {
                   [10,15,20,50].map(pageSize=>(
                   <option key={pageSize} value={pageSize}>{pageSize}</option>
                   ))
                   }
                </select>
            </span>{'  '}
              <span>
                  <FormattedMessage id='page' value={language}/>{' '}
                  <strong>
                     {pageIndex+1} <FormattedMessage id='of' value={language}/> {pageOptions.length}
                  </strong>{' '}
              </span>
              
                   | <FormattedMessage id='goTo' value={language}/>{' '}
                   <input  className='Go-to-page' type='text' 
                   onChange={(e)=>{
                       const pageNumber= e.target.value ? Number(e.target.value)-1: 0
                       gotoPage(pageNumber)
                   }}  /> 
        
            <button style={{marginLeft:'10px'}} className='button' onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button className='button' onClick={()=> previousPage()} disabled={!canPreviousPage}>{'<'}</button>
                <button className='button' onClick={()=> nextPage()} disabled={!canNextPage}>{'>'}</button>
            <button className='button' onClick={()=> gotoPage(pageOptions.length-1)} disabled={!canNextPage}>{'>>'}</button>
         </IntlProvider>
        </div>
        </> 
    )
}
