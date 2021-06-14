import  {useState ,useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import {useForm} from 'react-hook-form';
import "../../styles/styling.css";                //User home page
import axios from 'axios'
import { Table } from '../Table/Table';
import Loader from '../Response/Loader';
import {IntlProvider, FormattedMessage} from 'react-intl';
import { LangMessage } from '../../locale/locale';
import LanguageIcon from '@material-ui/icons/Language';
import Utils from '../../utils/utils';
import {API} from '../../API/RequestAPI';
localStorage.setItem('Language','English');
export default function Home()
{
    localStorage.setItem('pageUrls',JSON.stringify({urls:['/']}))
    Utils.currentTab=0;
    const {register}=useForm();
    const [state,setState]=useState('opened');              //setting default state as 'opened'
    const [masterOrders,setMasterOrders]=useState([]);     //setting all master orders
    const [flag,setFlag]=useState(false)                  // setting flag
    const [locale,setLocale]=useState(localStorage.getItem('Language'));
    const handleRadio1=(e)=>{
        setState(e.target.name);          // Handle radio button action
    }
    const handleLocale=(e)=>{
        localStorage.setItem('Language',e.target.value);
        setLocale(localStorage.getItem('Language'));
        
    }
    useEffect(()=>{
        async function getData()
        {
            const {data}=await axios.get(API.getMasterWorkURL(state));       //Api call for master orders based on state
            setMasterOrders(data);
            setFlag(true);
        }
        getData();
    },[state]);
    
    return(
    <div>
        {
           flag ? <>
        <Grid className='container-style'>
          <IntlProvider locale={locale} messages={LangMessage[locale]}>
           <Grid container className='bg'>
               {/* State radio buttons */}
              <Grid item xs={6} style={{marginTop:'5px'}}>
                     <input id='openradio' checked={state==='opened'} ref={register} onChange={handleRadio1} type='radio' name='opened' />
                     <label className='text' style={{marginLeft:'3px'}} id='openradio'>
                         <FormattedMessage id='open' value={{locale}}/>
                     </label>
                     <input style={{marginLeft:'10px'}} ref={register} onChange={handleRadio1} checked={state==='closed'} id='closeradio' type='radio' name='closed' />
                     <label className='text' style={{marginLeft:'1px'}} id='closeradio'>
                         <FormattedMessage id='close' values={{locale}}/>
                     </label>
              </Grid>
              {/* Language selector */}
              <Grid item xs={6} style={{marginTop:'5px'}} >
                   <LanguageIcon/>
                   <select onChange={handleLocale} value={locale} id='landDropDown' className='language-dropDown' >
                     {
                       ['English','Hindi','Tamil'].map((value,index)=>(
                          <option value={value} key={index}>{value}</option>
                         ))
                     }
                   </select>
              </Grid>
           </Grid>
          </IntlProvider> 
         <Table data={masterOrders} state={state} language={locale} tableType='master' /> {/*Calling master table */}
        </Grid>
        </>
        : <Loader/>
      }   
    </div>
    );
}