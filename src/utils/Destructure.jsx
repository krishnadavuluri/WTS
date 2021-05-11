export class Destructure
{
   static masterCompletionData(data)
   {
        const maxChartItems=8;
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
}