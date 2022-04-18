import axios from "axios";
import {FormDataType} from "../Components/content/Login/Login";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "3398b972-8bdb-4d4f-b98d-d3cabc5051ef",
    },

})

export const apiDal = {
    getUser(page: number,countClientsOnLine: number){
        return instance.get(`users?page=${page}&count=${countClientsOnLine}`).then(response => {
            return response.data
        })
    },
    getUserInPage(page: number,countClientsOnLine: number){
        return instance.get(`users?page=${page}&count=${countClientsOnLine}`).then(response => {
            return response.data
        })
    },
    deleteFollowed(id: number){
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })},
    postFollowed(id: number){
        return instance.post(`follow/${id}`).then(response => {
            return response.data
        })
        },
    currentUser(id: string){
        return instance.get(`profile/${id}`).then(response => {
            return response.data
        })
    },
    authUser(){
        return instance.get(`auth/me`, ).then(response =>{
            return response.data
            }
        )
    },
    getProfilStatus(id: string){
      return instance.get("profile/status/" + id)
    },
    updateProfilStatus(status: string){
       return instance.put("profile/status",{status: status})
    },
    postLoginUser(body: FormDataType){
        let {login,password,rememberMe,} = body
        return instance.post("auth/login", {
            email: login,
            password,
            rememberMe,
        })
    },
    deleteLogOutUser(){
        return instance.delete("/auth/login")
    }

}

