import axios from 'axios';

const apiUrl = process.env.REACT_APP_ENV === 'dev'
    ? process.env.REACT_APP_API_URL_DEV
    : process.env.REACT_APP_API_URL_PROD;

export const api = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json'
    },
})
export const getUrl = () => apiUrl;
export const getResponse = (resp) => resp;
export const escalateError = (error) => error
    ? error : 'Error Inistperado'; 
export default api;