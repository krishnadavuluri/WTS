import React, {useState,useEffect} from 'react'
import axios from 'axios'


export const ApiFetch =  () => {
    const [data,setData]=useState("");
    useEffect(()=>{
        axios.get('http://192.168.1.121:5000/master_work/opened').then(data=> console.log(data.data))
        // fetch('http://192.168.1.121:5000/7/master_work/1').then(res=>(res.json())).then(data=> (console.log(data)))
    },[])
    return (
        <div>
          <h1>EZHUMALAI</h1>  
        </div>
    )
}
