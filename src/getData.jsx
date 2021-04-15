import { authAxios } from './requestAPI/allAPI';
import {ganttChartFormat} from './dataFormat/inputFormat';
export default class Getdata{
   static a;
   static data;
   static getData(id)
    {
        console.log('getData is called');
        authAxios.get(`${id}/links`).then((data)=>{
            Getdata.data=data.data;
           // console.log(Getdata.data);
        });
       return Getdata.data;
    }
}