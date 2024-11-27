"use client";
import { useEffect, useState } from "react";
import PopupModel from "./PopupModel";
import { useMixin } from "@/providers/mixin.provider";
export const Alert = function(props) {
    const { service } = useMixin();
    const [open,setOpen] = useState(false);
    const [message,setMessage] = useState("");
    useEffect(()=>{
        service.alert = (message)=>{
            setMessage(message);
            setOpen(true);
        };
        globalThis.alert = service.alert;
    });
    return <PopupModel title="Alert!!" open={open} onClose={()=>setOpen(false)} >
        <div></div>
        <div style={{padding:"10px",textAlign:'center',display:'flex',justifyContent:'center'}} >{message}</div>
        <div></div>
    </PopupModel>
}

export default Alert;