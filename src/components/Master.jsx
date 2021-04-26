import React ,{useState,useEffect} from 'react'
import MasterCount from './MasterCount';
import ItemData from '../sampleJson/ItemData.json'
import MasterCost from './MasterCost';
import { ItemTable } from './ItemTable';
import { TopNavbar } from './Navbar';
import axios from 'axios';
import Loader from './loader';
import { AlertDismissibleExample } from './alertBox';
 const Master = ({match}) => {
    const [itemData,setItemData]=useState([]);
    const [flag,setFlag]=useState(false);
    useEffect(()=>{
      async function getItemData()
      {
          
          const {data}=await axios.get('http://183.82.116.164:5432/7/master_view_data/'+match.params.mwoId); //setting master order data for change in user option
          setItemData(data); 
          setFlag(true);
      }
      getItemData();
  },[]);
    // Showing the master view
    return (
        <div>
          { 
             flag ? itemData.length===0 ? <AlertDismissibleExample language={match.params.lang} from="home" id={match.params.mwoId} />:<><TopNavbar/>
             <MasterCount data={itemData} language={match.params.lang}/>
             <MasterCost data={itemData} language={match.params.lang}/>         
             <ItemTable ItemsData={itemData} mwoId={match.params.mwoId} language={match.params.lang}/></>:<Loader/>
            // { {itemData.length}===0 ? <AlertDismissibleExample/>:<>
            // <TopNavbar/>
            // <MasterCount data={ItemData}/>
            // <MasterCost data={ItemData}/>         
            // <ItemTable ItemsData={itemData}/> </>}: <Loader/>
          }
        </div>
    )
}
export default Master;