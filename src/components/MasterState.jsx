import React, { Component,useState ,useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import { MDBFormInline, MDBInput } from 'mdbreact';
import {useForm} from 'react-hook-form';
import Button from '@material-ui/core/Button';
import '../styles/styling.css';
import axios from 'axios'
import API from '../requestAPI/allAPI'
import { MasterTable } from './MasterTable';
export default function MasterState()
{
    const {register}=useForm();
    const [state,setState]=useState('opened');
    const [data,setData]=useState([]);
    const handleRadio1=(e)=>{
        setState(e.target.name);
    }
    useEffect(()=>{
        async function getData()
        {
            const {data}=await axios.get(API.getAllMasterWorkOrder+state);
            setData(data);
        }
        getData();
    },[state]);
    return(
    <div>
        <Grid className='container-style'>
           <Grid container className='bg' style={{border:'none'}}>
              <Grid item xs={5} style={{border:'none',marginTop:'5px'}}>
                     <input id='openradio' checked={state==='opened'} ref={register} onChange={handleRadio1} type='radio' name='opened' />
                     <label className='text' style={{marginLeft:'3px'}} id='openradio'>Open</label>
                     <input style={{marginLeft:'10px'}} ref={register} onChange={handleRadio1} checked={state==='closed'} id='closeradio' type='radio' name='closed' />
                     <label className='text' style={{marginLeft:'1px'}} id='closeradio'>Close</label>
              </Grid>
           </Grid>
           <MasterTable/>
        </Grid>   
    </div>
    );
}