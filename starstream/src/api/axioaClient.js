import axios from 'axios'
import querystring from 'querystring';
import apiConfig from './apiConfig';

const axiosClient = axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    paramsSerializer: param => querystring.stringify({...param, api_key: apiConfig.apiKey})
});

axiosClient.interceptors.request.use(async(config) =>config);
axiosClient.interceptors.response.use((response) => {
    if (response && response.data){
        return response.data;
    }
    
    return response;
}, (error) =>{
    throw error;
});

export default axiosClient;