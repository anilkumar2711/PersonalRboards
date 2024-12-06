"use client"
import React, { useEffect, useState } from 'react';
import Form from "@/components/ui/Form";
import { Input } from "@/components/ui/InputWrapper";
import PopupModel from "@/components/ui/PopupModel";
import { useMixin } from "@/providers/mixin.provider";
import { Button } from '@/components/ui/button';
import { Box, Typography, Card, CardContent, Grid, } from '@mui/material';
import { Search } from 'lucide-react';


export default function NewBoard(props) {
    const { $store,$emit,service, setComponent, query, api } = useMixin();
    const [open,setOpen] = useState(false);

    const [ state,setState] = useState({
        selectedProject: props?.selectedProject || {id:"9e18627a-90ab-4d86-9579-e998c19cf53a"},
        projects:props?.projects || []
    });

    const projectOptions = state.projects.map(v => ({value: v.id, label: v.name}));

    const searchProjects = (search)=>{
        api.get("/projects", {
            limit: 10,
            page: 1,
            search
        }).then(({data:projects}) => {
            setState((v) => ({ ...v, projects }));
            // console.log(projects)
        });
    };

    const handleProjectSearch = (searchText)=>{
        searchProjects(searchText);
    };

    const handelProjectSelect = (event,value,option)=>{
        const selectedProject = state.projects.find(p=>p.id==value);
        setState((v) => ({ ...v,  selectedProject }));
        props.setState((v)=>({...v, selectedProject }));
    }

    const handleSubmit = (data)=>{
        console.log({data});
        api.post("/boards",data).then((response)=>{
            setOpen(false);
            $emit.trigger("Boards.getBoards");
        }).catch((err)=>{
            
        });
    };

    useEffect(()=>{
        setState((v) => ({ ...v,  selectedProject:props.selectedProject }));
    },[props.selectedProject])

    useEffect(()=>{
        $emit.onTrigger("openBoardCreate",()=>{
            setOpen(true);
        });
    },[]);

    setComponent("NewBoard",{props,state});

    return (
        <PopupModel title='Create Board' open={open} width={"50%"} onClose={() => setOpen(false)} >
            <Form onSubmit={handleSubmit} >
                    <Box sx={{display:'flex',gap:"10px"}} >
                        <input type='hidden' name="projectId" value={state?.selectedProject?.id} ></input>
                        {state.selectedProject && <Input type="text" name="name" label="Board Name" placeholder="Enter Board Name" ></Input>}
                    </Box>
                    <div style={{ display:'flex'}}>
                        <Button sx={{ml:'auto', color:'white'}} type="submit"> Create Board</Button>
                    </div>
            </Form>
        </PopupModel>
    )
}