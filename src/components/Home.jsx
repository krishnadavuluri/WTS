import React, { Component,useState ,useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import {useForm} from 'react-hook-form';
import "../styles/styling.css";                //User home page
import axios from 'axios'
import { MasterTable } from './MasterTable';
import Loader from './loader';
import {IntlProvider, FormattedMessage} from 'react-intl';
import { LangMessage } from '../locale/locale';
export default function Home()
{
    const {register}=useForm();
    const [state,setState]=useState('opened');              //setting default state as 'opened'
    const [masterOrders,setMasterOrders]=useState([]);     //setting all master orders
    const [flag,setFlag]=useState(false)                  // setting flag
    const [locale,setLocale]=useState('English');
    const handleRadio1=(e)=>{
        setState(e.target.name);          // Handle radio button action
    }
    const handleLang=(e)=>{
        setLocale(e.target.value);
    }
    useEffect(()=>{
        async function getData()
        {
            const {data}=await axios.get('http://183.82.116.164:5432/master_work/'+state);       //Api call for master orders based on state
            console.log('All master Data',data)
            setMasterOrders(data);
            setFlag(true);
        }
        getData();
    },[state]);
    
    return(
    <div>
        {
           flag ? <> {console.log('return is called')}
        <Grid className='container-style'>
          <IntlProvider locale={locale} messages={LangMessage[locale]}>
           <Grid container className='bg'>
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
              <Grid item xs={6} style={{marginTop:'5px'}} >
                   <label id='landDropDown' className='text'><FormattedMessage id='language' value={{locale}}/>{': '}</label>
                   <select onChange={handleLang} id='landDropDown' className='language-dropDown' >
                     {
                       ['English','Hindi','Tamil'].map((key)=>(
                          <option value={key}>{key}</option>
                         ))
                     }
                   </select>
              </Grid>
           </Grid>
          </IntlProvider> 
         <MasterTable Masterdata={masterOrders} language={locale} /> {/*Calling master table */}
        </Grid></>: <Loader/>
      }   
    </div>
    );
}