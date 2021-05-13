import React,{useMemo} from 'react'
import {useTable,useSortBy,usePagination} from 'react-table';
import '../../styles/table.css'; 
import '../../styles/styling.css'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'; 
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
import { MultiLanguageTableColumn } from './columnFormat';
import {IntlProvider, FormattedMessage} from 'react-intl';
import { LangMessage } from '../../locale/locale';
import { useHistory } from 'react-router-dom';
export function Table(props) 
{
    const history=useHistory();
    const unsortColumnName=['COST','COUNT','लागत','गिनती','செலவு','எண்ணிக்கை'];
    const tableColumn=MultiLanguageTableColumn[props.language];
    const column=useMemo(()=>tableColumn,[tableColumn]);
    console.log(props.data);
    const TableData=useMemo(()=>props.data,[props.data]);
    const tableInstance=useTable({columns:column,data:TableData},useSortBy,usePagination); // specifying data,comlumn and options used in table
    const{getTableProps,getTableBodyProps,headerGroups,page,gotoPage,prepareRow,canNextPage,  //extracting all props from table instance
        canPreviousPage,nextPage,pageOptions,state,setPageSize,previousPage}=tableInstance;
    
    const {pageIndex,pageSize}=state; //To keep track of current page and page size
   
    const routeTo=(id)=>{

        if(props.tableType==='master')
        {
            history.push("/Master/mwo/"+id+'/lang/'+props.language+'/state/'+props.state);   
        }
        else if(props.tableType==='item'){
            
            history.push(`/Item/mwo/${props.mwoId}/item/`+id+'/lang/'+props.language+'/state/'+props.state)
        } 
      }    
    
    return (
        <>
        <IntlProvider locale={props.language} messages={LangMessage[props.language]}>
            <h3 className='defaultMargin font'>
              {
                  props.tableType!=='singleItem' ?
                        props.tableType==='item' ?
                         <FormattedMessage id='orderDetails' value={props.language}/>
                         :<FormattedMessage id='masterOrder' value={props.language} /> 
                  :<FormattedMessage id='orderDetails' value={props.language}/>
              }
            </h3>
        </IntlProvider>
        <table {...getTableProps()} className="responsive-card-table unstriped item-table">
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
                            <tr {...row.getrowProps} onClick={()=> routeTo(row.original.id) }>
                                {
                                    row.cells.map((cell)=>{
                                        console.log(cell.value)
                                    return <td key={cell.value} data-column={cell.column.Header} {...cell.getCellProps}>{cell.render('Cell')}</td>
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <div>
            {
                props.tableType!=='singleItem' ? 
                <IntlProvider locale={props.language} messages={LangMessage[props.language]}>
                  <span>
                    <label id='show'><FormattedMessage id='show' value={props.language}/></label>{' '}
                    <select className='dropDown' id='show' value={pageSize} onChange={e=> setPageSize(Number(e.target.value))}>
                     {
                       [10,15,20,50].map(pageSize=>(
                       <option key={pageSize} value={pageSize}>{pageSize}</option>
                       ))
                     }
                    </select>
                  </span>{'  '}
                  <span>
                    <FormattedMessage id='page' value={props.language}/>{' '}
                    <strong>
                       {pageIndex+1} <FormattedMessage id='of' value={props.language}/> {pageOptions.length}
                    </strong>{' '}
                  </span>
              
                   | <FormattedMessage id='goTo' value={props.language}/>{' '}
                   <input  className='Go-to-page' type='text' 
                   onChange={(e)=>{
                       const pageNumber= e.target.value ? Number(e.target.value)-1: 0
                       gotoPage(pageNumber)
                   }}  /> 
        
                <button style={{marginLeft:'10px'}} className='button' onClick={()=> gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
                <button className='button' onClick={()=> previousPage()} disabled={!canPreviousPage}>{'<'}</button>
                <button className='button' onClick={()=> nextPage()} disabled={!canNextPage}>{'>'}</button>
                <button className='button' onClick={()=> gotoPage(pageOptions.length-1)} disabled={!canNextPage}>{'>>'}</button>
               </IntlProvider>:''
            }
        </div>
        </> 
    )
}
