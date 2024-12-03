"use client"
import React, { useEffect, useState } from 'react';
import Form from "@/components/ui/Form";
import { Input } from "@/components/ui/InputWrapper";
import PopupModel from "@/components/ui/PopupModel";
import { useMixin } from "@/providers/mixin.provider";
import { Button } from '@/components/ui/button';

export default function NewBoard(props) {
    const { $store,$emit,service, setComponent, query, api } = useMixin();
    const [open,setOpen] = useState(false);
    const handleSubmit = (data)=>{
        // api.post("/tasks",data).then((response)=>{
        //     setOpen(false);
        //     $emit.trigger("getTasklist");
        // }).catch((err)=>{
        //     alert("Please fill valid fields to create task");
        //     $emit.trigger("getTasklist");
        // });
    };

    useEffect(()=>{
        $emit.onTrigger("openBoardCreate",()=>{
            setOpen(true);
        });
    },[]);

    return (
        <PopupModel title='Create Board' open={open} width={"50%"} onClose={() => setOpen(false)} >
            <Form onSubmit={handleSubmit} >
                    <Box sx={{display:'flex',}} >
                        <Input 
                            onSearch={()=>handleProjectSearch()} 
                            type="search" 
                            placeholder="Search projects for boards"  
                            options={projectOptions} 
                            icon={Search}
                            onChange={(...args)=>handelProjectSelect(...args)} 
                            >
                        </Input>
                    </Box>
            </Form>
        </PopupModel>
    )
}