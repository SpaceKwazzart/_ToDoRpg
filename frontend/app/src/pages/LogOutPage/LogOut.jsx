import {useEffect} from "react"
import axios from "axios";
import { HOST, PORT } from '../../consts';

export const Logout = () => {

    useEffect(() => {
       (async () => {
         try {
           const {data} = await  
                 axios.post(`http://${HOST}:${PORT}/logout/`,{
                 refresh_token: localStorage.getItem('refresh_token')
                 }, {headers: {'Content-Type': 'application/json'}},);
           
                 localStorage.clear();
           axios.defaults.headers.common['Authorization'] = null;
           window.location.href = '/login'
           } catch (e) {
             console.log('logout not working', e)
           }
         })();
    }, []);

    return (
       <div></div>
     )
}