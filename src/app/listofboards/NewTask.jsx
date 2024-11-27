"use client"
import React, { useEffect, useState } from 'react';
import Form from "@/components/ui/Form";
import { Input } from "@/components/ui/InputWrapper";
import PopupModel from "@/components/ui/PopupModel";
import { useMixin } from "@/providers/mixin.provider";
import { Button } from '@/components/ui/button';

export default function NewTask(props) {
    const { open } = props;
    const { $store, setComponent } = useMixin();
    const { taskStatusOptions, taskPriorityOptions } = $store;
    setComponent("NewTask",{props});
    const handleSubmit = (data)=>{
        console.log({data});
    };
    useEffect(()=>{
        console.log("Mounted",open);
    },[open]);

    const renderColorOption = (props, option) => (
        <li {...props} key={option.value} >
            <span style={{ backgroundColor: option.color, borderRadius: '4px', width: '16px', height: '16px', marginRight: '10px' }} ></span>
            {option.label}
        </li>
    );

    const ColorTag = (props) => <span style={{ backgroundColor: props.option?.color, display: 'block', borderRadius: '4px', width: '16px', height: '16px', marginRight: '10px' }} ></span>;

    return <PopupModel title='Create Task' open={open} width={"50%"}>
        <Form onSubmit={handleSubmit} >
            <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                <div>
                    <Input label="Task Title" name="title" placeholder="Please enter your task title" type="text" minWidth={"100%"}></Input>
                </div>
                <div style={{ display:'flex', gap:2 }}>
                    <Input label="Select Status" name="status" type="search" options={taskStatusOptions} renderOption={renderColorOption} icon={ColorTag} ></Input>
                    <Input label="Select Priority" name="priority" type="search" options={taskPriorityOptions} renderOption={renderColorOption} icon={ColorTag} ></Input>
                    <input name="project_id" type="hidden" value="" ></input>
                    <input name="column_id" type="hidden" value="" ></input>
                    <input name="assignee_id" type="hidden" value="" ></input>
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