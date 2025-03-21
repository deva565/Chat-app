import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:5656/api',
    withCredentials: true,
})