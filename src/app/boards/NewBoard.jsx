import React, { useEffect, useState } from 'react';
import Form from "@/components/ui/Form";
import { Input } from "@/components/ui/InputWrapper";
import PopupModel from "@/components/ui/PopupModel";
import { useMixin } from "@/providers/mixin.provider";

export default function NewBoard() {
    const { $store,$emit,service, setComponent, query, api } = useMixin();
    const [open,setOpen] = useState(false);
    const project_id = query.get("project_id");
    setComponent("NewBoard",{props,state});
    const handleSubmit = (data)=>{
        api.post("/boards",data).then((response)=>{
            setOpen(false);
            $emit.trigger("getProjectlist");
        }).catch((err)=>{
            alert("Please fill valid fields to create Board");
            $emit.trigger("getProjectlist");
        });
    };
    useEffect(()=>{
        $emit.onTrigger("openBoardCreate",()=>{
            setOpen(true);
        });
    },[]);

    return <PopupModel title='Create Board' open={open} width={"50%"} onClose={()=>setOpen(false)} >
    <Form onSubmit={handleSubmit} >
        <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
            <div>
                <Input label="Task Title" name="title" placeholder="Please enter your task title" type="text" minWidth={"100%"}></Input>
            </div>
            <div style={{ display:'flex', gap:2 }}>
                <Input 
                    label="Select Board" 
                    name="project_id" 
                    type="search" 
                    // options={taskStatusOptions} 
                    // renderOption={renderColorOption} 
                    icon={ColorTag}
                    // onChange={(...args)=>handelStatusChange(...args)} 
                    >
                </Input>
                <Input label="Select Priority" name="priority" type="search" options={taskPriorityOptions} renderOption={renderColorOption} icon={ColorTag} ></Input>
                <input name="project_id" type="hidden" value={project_id} ></input>
                {/* <input name="status" type="hidden" value={state.current_status} ></input>
                <input name="assignee_id" type="hidden" value={loggedUser.id} ></input> */}
                {/* <Input label="Select Due Date" name="due_date" type="date" sx={{grow:1}} ></Input> */}
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