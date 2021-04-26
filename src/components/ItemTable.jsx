import React,{useMemo} from 'react'
import {useTable,useSortBy,useGlobalFilter,usePagination} from 'react-table';
import MOCK_DATA from '../sampleJson/MasterData.json';
import '../styles/table.css'; 
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'; 
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
import { MultiLanguageTableColumn } from './TableDataColumn/columnFormat';
import {IntlProvider, FormattedMessage} from 'react-intl';
import { LangMessage } from '../locale/locale';
export const ItemTable = ({ItemsData,mwoId,language}) => {
    const unsortColumnName=['COST','COUNT','लागत','गिनती','செலவு','எண்ணிக்கை']; 
    const tableColumn=MultiLanguageTableColumn[language];
    const column=useMemo(()=>tableColumn,[]);
    //console.log(ItemsData)
    const data=useMemo(()=>ItemsData,[ItemsData]);
    
    const tableInstance=useTable({
        columns:column,data:data
    },useSortBy,usePagination);               //initializing column data to table
    
    const{getTableProps,getTableBodyProps,headerGroups,page,gotoPage,prepareRow,canNextPage,
        canPreviousPage,nextPage,pageOptions,setPageSize,state,previousPage}=tableInstance;
    
    const {pageIndex,pageSize}=state;
    
    const getItemId=(id)=>{
        
        window.location.href=`#/mwo/${mwoId}/item/`+id+'/lang/'+language  //Taking to Item view
    }    
    
    return (
        <>
         <IntlProvider locale={language} messages={LangMessage[language]}>
              <h3 style={{marginTop:'35px'}} className='font'>
                  <FormattedMessage id='orderDetails' value={language}/>
              </h3>
         </IntlProvider>
        <table {...getTableProps()}  className="responsive-card-table unstriped item-table">
            <thead>
                {
                    headerGroups.map((headerGroup)=>(
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps(!unsortColumnName.includes(column.Header) ? column.getSortByToggleProps():"")} >{column.render('Header')}
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
                            <tr {...row.getrowProps} onClick={()=> getItemId(row.original.id) }> {/* Table row */}
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
              <label id='show'><FormattedMessage id='show' value={language}/></label>{' '}
              <select className='item-dropDown' id='show' value={pageSize} onChange={e=> setPageSize(Number(e.target.value))}>
                {
                  [10,15,20,50].map(pageSize=>(
                  <option value={pageSize}>{pageSize}</option>  // table size drop down
                    ))                                               
                }
              </select>{' '}
              <span>                                                
                  <FormattedMessage id='page' value={language}/>{' '}
                  <strong>
                     {pageIndex+1} of {pageOptions.length}         
                  </strong>{' '}        {/* displaying no of pages */}
              </span>
              <span>
                   | <FormattedMessage id='goTo' value={language}/>{' '}
                   <input className='Go-to-page' type='text' 
                   onChange={(e)=>{                                                 
                       const pageNumber= e.target.value ? Number(e.target.value)-1: 0  // Go to page input
                       gotoPage(pageNumber)
                   }}  /> 
              </span>
            <button style={{marginLeft:'15px'}} className='button' onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button className='button' onClick={()=> previousPage()} disabled={!canPreviousPage}>{'<'}</button>
                <button className='button' onClick={()=> nextPage()} disabled={!canNextPage}>{'>'}</button>
            <button className='button' onClick={()=> gotoPage(pageOptions.length-1)} disabled={!canNextPage}>{'>>'}</button>
          </IntlProvider>
        </div>
        </>
    )
}
