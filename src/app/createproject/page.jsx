"use client";
import React, { useEffect, useState } from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { Input } from "@/components/ui/InputWrapper";
import { api } from '@/libs/axios';
import ProjectForm from '../projects/ProjectForm';
import { useMixin } from '@/providers/mixin.provider';

const NewProjectForm = (props) => {
    const { $store, service } = useMixin();
    const [project, setProject] = useState({
        name: "New Project",
        completion: 0,
    });

    const [coverImage, setCoverImage] = useState("addcover.png");

    useEffect(()=>{
        service.methods.getAllUsers().then((data)=>{
            console.log({data});
        })
    },[]);

    const handleSubmit = (data, event) => {
        console.log({ data });
        api.post("/projects", {
            name: data.name,
            type: data.type,
            description: data.description,
            status: data.status,
            completion: data.completion,
            startDate: data.dates.split(",")[0],
            endDate: data.dates.split(",")[1],
            priority: data.priority,
            imageCover: project.imageCover,
            label: data.label
        },{
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        .then((projectResponse) => {
            api.post("/boards", {
                "projectId": projectResponse.id,
                "name": "DEFAULT BOARD"
            }).then(()=>{
                alert("Project Created");
            })
        })
        .catch((err) => {
            console.error(err);
        });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setProject(v=>({...v,imageCover:file}));
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setCoverImage(e.target.result); // Set the base64 image URL
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please select a valid image file.");
        }
    };

    return (
        <Box sx={{ width: '100%', padding: '0px' }}>
            {/* Top Gap */}
            <img src={coverImage} alt='addcover' style={{ width: '100%', height: '25vh' }} />

            {/* Icon and Title */}
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
                {/* Input Fields */}
                <Box sx={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center', mb: 2
                }}>
                    <Box sx={{ width: '600px' }}>
                        {/* Project Details */}
                        <Box>
                            <Tooltip title="Add Cover">
                                <IconButton
                                    sx={{ mb: 2 }}
                                    component="label" // This allows the IconButton to act as a label for the file input
                                >
                                    <img src='bullseye.png' alt="bullseye" />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={handleImageChange}
                                    />
                                </IconButton>
                            </Tooltip>
                            <Box sx={{ mb: 2, ml:-1 }}>
                                <Input
                                    type="text"
                                    onChange={(name) => setProject((v) => ({ ...v, name }))}
                                    value={project.name}
                                    isTitle={true}
                                ></Input>
                            </Box>
                        </Box>
                        <ProjectForm onSubmit={handleSubmit} project={project} submitLabel={"CREATE"}></ProjectForm>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default NewProjectForm;
