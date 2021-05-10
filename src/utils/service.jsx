
import { Colours } from '../styles/colours';

export default class Utils
{
    static colour=Colours;
    static pageUrls;
    static pageVisited;
    static colourGenerator(length)
    {
        var colours=[];
        for(let i=0;i<length;i++)
        {
            colours=[...colours,Utils.colour[Math.floor(Math.random()*Utils.colour.length)]];
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
    static Filter(actCost,estCost,itemIds,type)
    {
        
         if(type==='least')
         {
             return Utils.leastSort(actCost,estCost,itemIds);
         }
         else if(type==='most')
         {
             return Utils.maxSort(actCost,estCost,itemIds);
         }
         else if(type==='more')
         {
             return Utils.getExceededCost(actCost,estCost,itemIds);
         }
         else
         {
             return Utils.sortById(actCost,estCost,itemIds);
         }
    }
    static sortById(actCost,estCost,itemsIds)
    {
        while(true)
        {
           var flag=0;
           for(let i=1;i<itemsIds.length;i++)
           {
               if(Number(itemsIds[ i-1 ])>Number(itemsIds[i]))
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
    static getCountChartHeight(screenWidth)
    {
        var height;
        if(screenWidth<=640)
        {
            height=40*10;              //setting height of chart with respect width of screen
        }
        else if(screenWidth>640){
           height=35*10;
        }
        return height;
    }
    static getCostChartHeight(noOfItems,screenWidth)
    {
        var height;
        if(screenWidth<=640)
        {
            height=55*noOfItems;   //setting height of chart with respect width of screen
        }
        else if(screenWidth>640){
            height=65*noOfItems;
        }
        return height
    }
    static getCostChartHeading(type)
    {
        var chartHeading;
        if(type==='more')
        {
           chartHeading='Exceeded Cost Items'
        }
        else if(type==='least')
        {
          chartHeading='Least Spent Items' 
        }
        else if(type==='most')
        {
          chartHeading='Most Spent Items' 
        }
        else{
            chartHeading='';
        }
        return chartHeading
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