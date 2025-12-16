import axios from "axios"
const instance = axios.create({
        baseURL:"http://127.0.0.1:8000/user/api",
        timeout:3000
    })
instance.interceptors.request.use(
    async (config) =>{
        const jwToken = localStorage.getItem("jwtToken")
        console.log("no token", jwToken)
        config.headers.Authorization = `Bearer ${jwToken}`
        return config;
    }
)

instance.interceptors.request.use(
    async (response) =>{
        console.log("no token", response)
        if(response?.status === 401){
        }
        return response;
    }
)
export default instance