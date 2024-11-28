"use client"
import React, { useEffect, useState } from 'react';
import Form from "@/components/ui/Form";
import { Input } from "@/components/ui/InputWrapper";
import PopupModel from "@/components/ui/PopupModel";
import { useMixin } from "@/providers/mixin.provider";
import { Button } from '@/components/ui/button';

export default function NewColumn(props) {
    const { $store, api, setComponent, urlparams, $emit } = useMixin();
    const [open,setOpen] = useState(false);
    const { } = $store;
    const board_id = urlparams().id;
    setComponent("NewColumn",{props});
    const handleSubmit = (data)=>{
        api.post("/columns",{
            "name": data.name,
            "boardId": board_id
        }).then(()=>{
            $emit.trigger("getColumnlist");
            setOpen(false);
        });
    };
    useEffect(()=>{
        $emit.onTrigger("openColumnCreate",()=>{
            setOpen(true);
        });
    },[]);

    console.log("NewColumn",props.open);

    const renderColorOption = (props, option) => (
        <li {...props} key={option.value} >
            <span style={{ backgroundColor: option.color, borderRadius: '4px', width: '16px', height: '16px', marginRight: '10px' }} ></span>
            {option.label}
        </li>
    );

    const ColorTag = (props) => <span style={{ backgroundColor: props.option?.color, display: 'block', borderRadius: '4px', width: '16px', height: '16px', marginRight: '10px' }} ></span>;

    return <PopupModel open={open} onClose={()=>setOpen(false)}  title='Create Column' > 
        <Form onSubmit={handleSubmit} >
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <div>
                    <Input label="Column Name" name="name" placeholder="Enter Column Name" type="text" minWidth={"100%"}></Input>
                </div>
                <div style={{ display:'flex'}}>
                    <Button sx={{ml:'auto', color:'white'}} type="submit"> Add</Button>
                </div>
            </div>
        </Form>
    </PopupModel>
}