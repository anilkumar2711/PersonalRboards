import React, { useState } from 'react';
import { Box, TextField, Typography, IconButton, Tooltip } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Form } from "../components/ui/Form";
import { Button } from "../components/ui/button";
import { User, Clock, Flag, CircleFadingArrowUp, CalendarDays, Tag, Text } from "lucide-react";
import { MdIncompleteCircle, MdOutlineEventNote, MdOutlineAssistantPhoto } from "react-icons/md";
const NewProjectForm = (props) => {
    const [project, setProject] = useState({
        completion:0
    });
    const statusOptions = [
        { value: "In Progress", label: "In Progress", color: "#BFC5D2" },
        { value: "Done", label: "Done", color: "#C9DEFF" },
        { value: "Planning", label: "Planning", color: "#FDD13A47" }
    ];
    const priorityOptions = [{ value: "Urgent", label: "Urgent", color: "#F81111" },
    { value: "High", label: "High", color: "#24A249" },
    { value: "Medium", label: "Medium", color: "#9266F5" },
    { value: "Low", label: "Low", color: "#B3ABAB" }
    ];
    const labelOptions = [
        { value: "Label 1", label: "Label 1", color: "#F81111" },
        { value: "Label 2", label: "Label 2", color: "#24A249" },
        { value: "Label 3", label: "Label 3", color: "#9266F5" },
        { value: "Label 4", label: "Label 4", color: "#B3ABAB" }
    ];

    const renderColorOption = (props, option) => (
        <li {...props} key={option.value} >
            <span style={{ backgroundColor: option.color, borderRadius: '4px', width: '16px', height: '16px', marginRight: '10px' }} ></span>
            {option.label}
        </li>
    );

    const ColorTag = (props) => <span style={{ backgroundColor: props.option.color, display: 'block', borderRadius: '4px', width: '16px', height: '16px', marginRight: '10px' }} ></span>;

    const renderIconOption = (props, option) => (
        <li {...props} key={option.value} >
            <span style={{ backgroundColor: option.color, padding: '4px', display: 'flex', gap: 2, whiteSpace: 'nowrap', borderRadius: '4px' }} >
                <Tag sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                {option.label}
            </span>
        </li>
    );

    const handleSubmit = (data, event) => {
        console.log({ data, event });
    };

    return (
        <Box sx={{ width: '100%', padding: '0px' }}>
            {/* Top Gap */}
            <Box sx={{ height: '175px' }}></Box>

            {/* Icon and Title */}

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center", }}>
                {/* Input Fields */}
                <Box sx={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center', mb: 2
                }}>
                    <Box sx={{ width: '600px' }}>
                        {/* Project Details */}
                        <Box>
                            <Tooltip title="Add Cover">
                                <IconButton sx={{ mb: 2 }}>
                                    <img src='bullseye.png' color="primary" fontSize="large" />
                                </IconButton>
                            </Tooltip>
                            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>

                                <Typography variant="h5">New Project</Typography>
                            </Box>
                        </Box>
                        <Form onSubmit={handleSubmit}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                <User sx={{ width: 16, height: 16, color: 'text.secondary' }} />
                                <span style={{ fontSize: '12px', fontWeight: '600', width: 96 }}>Owner</span>
                                <Input name="owner" value={project.owner} sx={{ height: '2rem', fontSize: '12px', fontWeight: '400' }} />
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                <Clock sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                                <span style={{ fontSize: '12px', fontWeight: '600', width: 96 }}>Status</span>
                                <Input name="status" type="search" options={statusOptions} renderOption={renderColorOption} value={project.status} icon={ColorTag} />
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                <CircleFadingArrowUp sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                                <span style={{ fontSize: '12px', fontWeight: '600', width: 96 }}>Completion</span>
                                <Input name="completion" type="progress" value={project.completion} />
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                <CalendarDays sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                                <span style={{ fontSize: '0.875rem', width: 96, fontSize: '12px', fontWeight: '400' }}>Dates</span>
                                <Input name="dates" type="datestartend" value={project.dates} sx={{ height: 32, fontSize: '12px', fontWeight: '400', width: '100%' }} />
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                <Flag sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                                <span style={{ fontSize: '0.875rem', width: 96 }}>Priority</span>
                                <Input
                                    name="priority"
                                    type="search"
                                    options={priorityOptions}
                                    renderOption={renderColorOption}
                                    value={project.priority}
                                    icon={ColorTag}
                                    sx={{ height: 32, fontSize: '12px', fontWeight: '400', width: '100%' }}
                                />
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                <Tag sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                                <span style={{ fontSize: '12px', color: '#565656', fontWeight: '600', width: 96 }}>Label</span>
                                <Input name="label" value={project.label} type="tags" options={labelOptions} renderOption={renderIconOption} sx={{ height: 32, fontSize: '12px', fontWeight: '400', width: '100%' }} icon={Tag} />
                            </Box>

                            <Box sx={{ '& > * + *': { marginTop: 8 } }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                    <Text sx={{ width: 16, height: 16, color: 'text.secondary' }} />
                                    <span style={{ fontSize: '0.875rem' }}>Summary</span>
                                </Box>
                                <Input name="summary" type="textarea" value={project.summary} sx={{ fontSize: '12px', fontWeight: '400' }} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'flex-end' }} >
                                <Button type="submit" sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    height: 32, // Assuming 'h-8' translates to 32px (Tailwind uses 8px as its base unit)
                                    paddingX: 2, // Assuming 'px-2' translates to 8px (Tailwind's default spacing scale)
                                    backgroundColor: 'actgrey', // Replace 'actgrey' with the actual color in your theme or define it
                                    justifyContent: 'end',
                                    alignItems: 'center', width: '64px'
                                }}>
                                    <span style={{ paddingX: 2 }}>SAVE</span>
                                </Button>
                            </Box>

                        </Form>
                    </Box>
                </Box>
            </Box>
        </Box>

    );
};

export default NewProjectForm;
