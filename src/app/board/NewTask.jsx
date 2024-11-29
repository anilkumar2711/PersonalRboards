"use client"
import React, { useEffect, useState } from 'react';
import Form from "@/components/ui/Form";
import { Input } from "@/components/ui/InputWrapper";
import PopupModel from "@/components/ui/PopupModel";
import { useMixin } from "@/providers/mixin.provider";
import { Button } from '@/components/ui/button';

export default function NewTask(props) {
    const { $store,$emit,service, setComponent, query, api } = useMixin();
    const [open,setOpen] = useState(false);
    const { taskPriorityOptions, current_columns:currentColumns, loggedUser } = $store;
    const [ state, setState] = useState({
        current_status:""
    });
    const project_id = query.get("project_id");
    const taskStatusOptions = currentColumns.map(v=>({value:v.id, label:service.string(v.name).toTitleCase(), color: v.color}))
    setComponent("NewTask",{props,state});
    const handleSubmit = (data)=>{
        api.post("/tasks",data).then((response)=>{
            setOpen(false);
            $emit.trigger("getTasklist");
        })
    };
    useEffect(()=>{
        $emit.onTrigger("openTaskCreate",()=>{
            setOpen(true);
        });
    },[]);

    const handelStatusChange = (event, value, option)=> {
        console.log("changes",option);
        setState((v)=>({...v,current_status: option.label.toUpperCase()}));
    }

    const renderColorOption = (props, option) => (
        <li {...props} key={option.value} >
            <span style={{ backgroundColor: option.color, borderRadius: '4px', width: '16px', height: '16px', marginRight: '10px' }} ></span>
            {option.label}
        </li>
    );

    const ColorTag = (props) => <span style={{ backgroundColor: props.option?.color, display: 'block', borderRadius: '4px', width: '16px', height: '16px', marginRight: '10px' }} ></span>;

    return <PopupModel title='Create Task' open={open} width={"50%"} onClose={()=>setOpen(false)} >
        <Form onSubmit={handleSubmit} >
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <div>
                    <Input label="Task Title" name="title" placeholder="Please enter your task title" type="text" minWidth={"100%"}></Input>
                </div>
                <div style={{ display:'flex', gap:2 }}>
                    <Input 
                        label="Select Status" 
                        name="column_id" 
                        type="search" 
                        options={taskStatusOptions} 
                        renderOption={renderColorOption} 
                        icon={ColorTag}
                        onChange={(...args)=>handelStatusChange(...args)} 
                        >
                    </Input>
                    <Input label="Select Priority" name="priority" type="search" options={taskPriorityOptions} renderOption={renderColorOption} icon={ColorTag} ></Input>
                    <input name="project_id" type="hidden" value={project_id} ></input>
                    <input name="status" type="hidden" value={state.current_status} ></input>
                    <input name="assignee_id" type="hidden" value={loggedUser.id} ></input>
                    <Input label="Select Due Date" name="due_date" type="date" sx={{grow:1}} ></Input>
                </div>
                <div>
                    <Input label="Description" ame="description" type="textarea" minWidth={"100%"}></Input>
                </div>
                <div style={{ display:'flex'}}>
                    <Button sx={{ml:'auto', color:'white'}} type="submit"> Create</Button>
                </div>
            </div>
        </Form>
    </PopupModel>
}