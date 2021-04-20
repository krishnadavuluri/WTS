import React, { Component,useState ,useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import {useForm} from 'react-hook-form';
import "../styles/styling.css";                //User home page
import axios from 'axios'
import API from '../requestAPI/allAPI'
import { MasterTable } from './MasterTable';
export default function Home()
{
    const {register}=useForm();
    const [state,setState]=useState('opened'); //setting default state as 'opened'
    const [data,setData]=useState([]);     //setting all master orders
    
    const handleRadio1=(e)=>{
        setState(e.target.name);          // Handle user state selection
    }

    useEffect(()=>{
        async function getData()
        {
            const {data}=await axios.get(API.getAllMasterWorkOrder+state);       //setting master order data for change in user option
            setData(data);
        }
        getData();
    },[state]);

    return(
    <div>
        <Grid className='container-style'>
           <Grid container className='bg'>
              <Grid item xs={5} style={{marginTop:'5px'}}>
                     <input id='openradio' checked={state==='opened'} ref={register} onChange={handleRadio1} type='radio' name='opened' />
                     <label className='text' style={{marginLeft:'3px'}} id='openradio'>Open</label>
                     <input style={{marginLeft:'10px'}} ref={register} onChange={handleRadio1} checked={state==='closed'} id='closeradio' type='radio' name='closed' />
                     <label className='text' style={{marginLeft:'1px'}} id='closeradio'>Close</label>
              </Grid>
           </Grid>
           <MasterTable/> {/* Calling master table */}
        </Grid>   
    </div>
    );
}