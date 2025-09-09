import { AxiosError, type AxiosResponse } from "axios"
import { BACKEND_URL } from "../config"
import { type NavigateFunction } from "react-router-dom";
import type { BlogInputType, LoginInputType, SignupInputType } from "../utils/inputTypes";
import { notify } from "../utils/toast";
import { api } from "./client";


export async function sendRequest({ type, postInputs, navigate }: { type: string, postInputs: SignupInputType | LoginInputType, navigate: NavigateFunction }) {

    try {

        const response = await notify.promise(
            api.post(`${BACKEND_URL}/user/${type}`, postInputs),
            { pending: `${type === "signup" ? "Creating Account...⏳" : "Signing you in...⏳" }`, success: `${type === "signup" ? "Account Created🎯" : "Welcome back👋" }`, error: `${type === "signup" ? "Signup Failed" : "Login Failed" }` },
            { toastId: `${type === "signup" ? "signup" : "login" }` }
        ) as AxiosResponse<{ 
           message: string,
           token: string,
           user: {
            id: unknown,
            name: string,
            email: string
           }
        }>;

        const jwt = response.data.token;
        localStorage.setItem('token', jwt);


        navigate("/home");
    } catch (e: any) {
        notify.error(e.response?.data?.message || `Error while ${type === "signup" ? "Signing up" : "Signing in"}`);
    }
          
}

export async function postBlog({ postInputs, navigate }: { postInputs: BlogInputType, navigate: NavigateFunction }){
    
    try{

       await notify.promise(
        api.post(`${BACKEND_URL}/blog/`, 
        postInputs, 
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
       ),
       {
        pending: "Publishing...⏳",
        success: "Blog published 🎉",
        error: "Failed to publish ☹"
       },
       { toastId: "publish" }
       );

       navigate("/home");
    } catch(e){
       const err = e as AxiosError<{ message: string }> 
       if(err.response?.data?.message){
        notify.error(err.response.data.message, { toastId: "publish-error-detail" });
       }
    }
} 