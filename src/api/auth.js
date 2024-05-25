
import axios  from "axios";

const API = 'http://127.0.0.1:8000/usuario'
const API_LOGIN = 'http://127.0.0.1:8000/usuario/login'

export const Resister_users = query => axios.post(`${API}`, query) 
export const Login = token => axios.post(`${API_LOGIN}`, token) 

