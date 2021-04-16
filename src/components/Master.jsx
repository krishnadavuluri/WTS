import React from 'react'
import MasterCount from './MasterCount';
import ItemData from '../sampleJson/ItemData.json'
import MasterCost from './MasterCost';
import { ItemTable } from './ItemTable';
import { TopNavbar } from './Navbar';
 const Master = ({match}) => {
    return (
        <div>
          <TopNavbar/>
          <MasterCount data={ItemData}/>
          <MasterCost data={ItemData}/>
          <ItemTable ItemsData={ItemData}/>
        </div>
    )
}
export default Master;