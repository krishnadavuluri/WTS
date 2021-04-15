import React from 'react'
import MasterCount from './MasterCount';
import ItemData from '../sampleJson/ItemData.json'
import MasterCost from './MasterCost';
import { ItemTable } from './ItemTable';
export const Test = ({match}) => {
    //console.log(ItemDate);
    return (
        <div>
          <MasterCount data={ItemData}/>
          <MasterCost data={ItemData}/>
          <ItemTable ItemsData={ItemData}/>
        </div>
    )
}
