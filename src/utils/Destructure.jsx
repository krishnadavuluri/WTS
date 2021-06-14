import {ganttChartOptions} from '../components/charts/ChartOptions'
import moment from 'moment';
export class Destructure
{
   static masterCompletionData(data)
   {
        const maxChartItems=15;
        const itemsData=data;
        var itemsCount=[];
        var itemsId=[];
        itemsData.map((eachItem)=>{                                                            
            itemsCount=[...itemsCount,Math.ceil((eachItem.completedCount/eachItem.count)*100)]
            itemsId=[...itemsId,`${eachItem.id} `]
        })
        const divide=Math.ceil((itemsCount.length)/maxChartItems)
        const partition=Math.floor((itemsCount.length)/divide)
        var i=0,start=0,end=partition;
        var count=[];
        var labels=[];
        while(i<divide)
        {
            if(i===divide-1)
            {
            count=[...count,itemsCount.slice(start,)]
            labels=[...labels,itemsId.slice(start,)]
            break;
            }
            count=[...count,itemsCount.slice(start,end)]
            labels=[...labels,itemsId.slice(start,end)]
            start=end;
            end+=partition;
            i+=1;
        }
        return {completion:count,labels:labels};
    }
    static masterCostData(data)
    {
        const ItemsData=data;
        var actCost=[];
        var estCost=[];
        var itemsId=[];
        var NoOfItems=0;                                     //destructuring data
        ItemsData.map((eachItme)=>{
            actCost=[...actCost,eachItme.actualCost]
            estCost=[...estCost,eachItme.estimatedCost]
            itemsId=[...itemsId,""+eachItme.id]
            NoOfItems+=1
        })
        return {actualCost:actCost,estimatedCost:estCost,itemsId:itemsId,noOfItems:NoOfItems}
    }
    static itemProgressData(data)
    {
        var allProcess=[ganttChartOptions]; //getting itemChart options
        var noOfProcess=0;
        
        data.map((process)=>{
            noOfProcess+=1;
            const startDate=moment(process.startDate).format('l').split('/');
            const endDate=moment(process.endDate).format('l').split('/'); // extracting required fields
            if(endDate!==null)
            {
              const singleProcess=[process.id,"#"+process.title.slice(0,3),null,
              new Date(startDate[2],startDate[0]-1,startDate[1]),
              new Date(endDate[2],endDate[0]-1,endDate[1]),null,process.progress,null];
              allProcess=[...allProcess,singleProcess]; 
            }                    
           })
         
         return {allProcess:allProcess,noOfProcess:noOfProcess}
    }
}