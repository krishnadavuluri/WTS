
import axios from 'axios';
const token='_NYrf5CUjhNUbCXtQLbS';
const apiURL='http://192.168.1.77/api/v4/projects/7/issues';
export const authAxios=axios.create({
    baseURL:apiURL,
    headers:{
        Authorization:`Bearer ${token}`
    }
})
export default class API {
    static getAllMasterWorkOrder='http://192.168.1.77/api/v4/projects/7/issues?labels=Master&state=';
    static getAllLinks='http://192.168.1.77/api/v4/projects/7/issues/';
}
