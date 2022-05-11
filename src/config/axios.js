import axios from 'axios';


const clienteAxios = axios.create({
    baseURL : import.meta.env.VITE_API_REST_HEROKU
    
});

export default clienteAxios;