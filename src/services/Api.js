import axios from 'axios';
const localUrl  = 'http://192.168.1.2:3000';
const onlineUrl = ''

const api = axios.create({
    baseURL: localUrl // onlineUrl
});

export default api;