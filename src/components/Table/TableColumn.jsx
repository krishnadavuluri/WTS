import {MasterTableColumns, ItemTableColumns} from './LocaleColumn';
export class TableColumn
{
    static unSortColumn=['COST','COUNT','DESCRIPTION','STATUS','लागत','गिनती','செலவு','எண்ணிக்கை'];
    static getTableColumn(type,language)
    {
       var column;
       if(type==='master'){
           column=MasterTableColumns[language];
       }
       else{
           column=ItemTableColumns[language];
       }
       return column;
    }
}