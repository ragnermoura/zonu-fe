import axios from "axios";

export const http = axios.create({
    //baseURL: 'https://webserverapi.online/api'
    baseURL: 'https://localhost:3000/api'
})