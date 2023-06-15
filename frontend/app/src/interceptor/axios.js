import { HOST, PORT } from '../consts'

import axios from "axios";

let refresh = false;

axios.interceptors.response.use(resp => resp, async error => {
  if (error.response.status === 401 && !refresh) {
     refresh = true;
     console.log(localStorage.getItem('refresh_token'))
     const { data, status } = await   
           axios.post(`http://${HOST}:${PORT}/api/token/refresh/`, {      
                      refresh: localStorage.getItem('refresh_token'),
                      }, { headers: { 'Content-Type': 'application/json' } });
    console.log(data)
    if (status === 200) {
       console.log('response.status === 200')
       localStorage.setItem('access_token', data.access);
       localStorage.setItem('refresh_token', data.refresh);
       axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
       error.config.headers['Authorization'] = `Bearer ${data['access']}`;
       return axios(error.config);
    }
  }
refresh = false;
return error;
});