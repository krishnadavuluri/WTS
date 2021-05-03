
import { Colours } from '../styles/colours';
export default class Service
{
    static colour=Colours;
    static colourGenerator(length)
    {
        var colours=[];
        for(let i=0;i<length;i++)
        {
            colours=[...colours,Service.colour[Math.floor(Math.random()*Service.colour.length)]];
        }
        return colours;
    }
    static getExceededCost(actCost,estCost,itemIds)
    {
         var ActCost=[];
         var EstCost=[];
         var ItemIds=[];
         for(let i=0;i<actCost.length;i++)
         {
             if(actCost[i]>estCost[i])
             {
                 ActCost=[...ActCost,actCost[i]]
                 EstCost=[...EstCost,estCost[i]]
                 ItemIds=[...ItemIds,itemIds[i]]
             }
         }
         return {actCost:ActCost,estCost:EstCost,itemIds:ItemIds}
    }
    static Sort(actCost,estCost,itemIds,type)
    {
        
         if(type==='least')
         {
             return Service.leastSort(actCost,estCost,itemIds);
         }
         else
         {
             return Service.maxSort(actCost,estCost,itemIds);
         }
    }
   static leastSort(actCost,estCost,itemsIds)
    {
        while(true)
        {
           var flag=0;
           for(let i=1;i<actCost.length;i++)
           {
               if(actCost[i-1]>actCost[i])
               {
                   flag=1;
                   var temp=estCost[i-1];
                   estCost[i-1]=estCost[i];
                   estCost[i]=temp;
                   temp=actCost[i-1];
                   actCost[i-1]=actCost[i];
                   actCost[i]=temp;
                   temp=itemsIds[i-1];
                   itemsIds[i-1]=itemsIds[i];
                   itemsIds[i]=temp;
               }
           }
           if(flag===0)
           {
               break;
           }
        }
        return {actCost:actCost,estCost:estCost,itemsIds:itemsIds}
    }
    static maxSort(actCost,estCost,itemsIds)
    {

        while(true)
        {
           var flag=0;
           for(let i=1;i<actCost.length;i++)
           {
               if(actCost[i-1]<actCost[i])
               {
                   flag=1;
                   var temp=estCost[i-1];
                   estCost[i-1]=estCost[i];
                   estCost[i]=temp;
                   temp=actCost[i-1];
                   actCost[i-1]=actCost[i];
                   actCost[i]=temp;
                   temp=itemsIds[i-1];
                   itemsIds[i-1]=itemsIds[i];
                   itemsIds[i]=temp;
               }
           }
           if(flag===0)
           {
               break;
           }
        }
        return {actCost:actCost,estCost:estCost,itemsIds:itemsIds}

    }
}