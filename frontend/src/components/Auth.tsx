import { Link, useNavigate } from "react-router-dom";
import {  useState } from "react";
import type { ChangeEvent } from "react";
import type { SignupInputType, LoginInputType } from "../utils/inputTypes";
import { sendRequest } from "../api/index";

export function Auth({ type }: { type: "signup" | "signin" }){

    const [postInputs, setPostInputs] = useState<
        SignupInputType | LoginInputType
    >(
        type === "signup"
        ? { name: "", email: "", password: "" } as SignupInputType
        : { email: " ", password: "" } as LoginInputType
    )

    const navigate = useNavigate();

    const onClickHandler = () => {
        sendRequest({type, postInputs, navigate});
    }

    return <div className="flex flex-col gap-4 items-center">
         
    <div className="flex flex-col gap-1 items-center">
        <h1 className="font-bold text-3xl">Create an account</h1>

        <div className="flex text-md text-gray-500 items-center">
            <span>{type === "signup" ? "Already have an account?" : "Don't have an account?"}</span>
            <Link to={type === "signup" ? "/signin" : "/signup"}>{ type === "signup" ? "Log in" : "create account" }</Link>
        </div>
    </div>

    <div className="flex flex-col mt-2 items-center gap-2">
    { type === "signup" ? <LabelledInput label="Username" placeholder="Tigmamanyu" onChange={(e) => { setPostInputs({ ...postInputs, name: e.target.value }) }}/> : null }

    <LabelledInput label="Email" placeholder="john@gmail.com" onChange={(e) => { setPostInputs({ ...postInputs, email: e.target.value }) }}/>

    <LabelledInput label="Password" placeholder="" onChange={(e) => { setPostInputs({ ...postInputs, password: e.target.value }) }} type={"password"}/>
    </div>

    <button onClick={onClickHandler} className="bg-black text-white cursor-pointer text-sm mt-2 rounded-md h-8 w-76 hover:bg-zinc-950">{type === "signup" ? "Sign Up" : "Sign in"}</button>

   </div>
}

interface LabelledInputType {
   label: string;
   placeholder: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
   
   return <div className="flex flex-col gap-2">
      <label className="font-medium text-md text-black">{label}</label>
      <input onChange={onChange} type={type || "text"} className="border border-gray-400 p-2.5 w-76 h-8.5 rounded-md focus:border-gray-500" placeholder={placeholder}></input>
   </div>
}