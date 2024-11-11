import React from 'react';
import { Box, TextField, Typography, IconButton, Tooltip } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Form } from "../components/ui/Form";
import { Button } from "../components/ui/button";
import { User, Clock, Flag, CircleFadingArrowUp, CalendarDays, Tag, Text } from "lucide-react";
import { MdIncompleteCircle, MdOutlineEventNote, MdOutlineAssistantPhoto } from "react-icons/md";
const NewProjectForm = () => {
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
                    <Box sx={{ width: '500px' }}>
                        {/* Project Details */}
                        <Box>
                            <Tooltip title="Add Cover">
                                <IconButton sx={{ mb: 2 }}>
                                    <img src='bullseye.png' color="primary" fontSize="large" />
                                </IconButton></Tooltip>
                            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>

                                <Typography variant="h5">New Project</Typography>
                            </Box>
                        </Box>
                        <Form>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                <User sx={{ width: 16, height: 16, color: 'text.secondary' }} />
                                <Box sx={{ width: 80 }}>
                                    Owner
                                </Box>
                                <Input name="owner" sx={{ height: '2rem', fontSize: '12px', fontWeight: '400' }} />
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                <Clock sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                                <Box sx={{ fontSize: '12px', fontWeight: '600', width: 80 }}>Status</Box>
                                <Input name="status" type="search" sx={{ height: 32, fontSize: '12px', fontWeight: '400', backgroundColor: 'yourCustomColor' }} />
                            </Box>
                            <Box sx={{ display: 'flex',flexDirection:'row', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                <CircleFadingArrowUp sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                                <Box sx={{ fontSize: '12px', fontWeight: '600', width: 60 }}>Completion</Box>
                                {/* <Input name="completion" type="range" value={[0, 50]} sx={{ height: 32, fontSize: '12px', fontWeight: '400', width: '100%' }} /> */}

                                <Box sx={{ flex: 1, }}>
                                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                                    >                                              <Box sx={{ pr: 1, fontSize: '12px', color: '#565656', fontWeight: '400' }}>50%</Box>
                                        <Box
                                            sx={{ backgroundColor: '#24A249', height: '6px', borderRadius: '50px', }}
                                            style={{ width: `${50}%` }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                <CalendarDays sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                                <Box sx={{ width: 30, fontSize: '12px', fontWeight: '600' }}>Dates</Box>
                                <Input name="dates" type="date" sx={{ height: 32, fontSize: '12px', fontWeight: '400', width: '100%' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                <Flag sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                                <Box sx={{ fontSize: '0.875rem', color: '#565656', fontWeight: '600', width: 80 }}>Priority</Box>
                                <Input name="priority" type="search" sx={{ height: 32, fontSize: '12px', fontWeight: '400', width: '100%' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                <Tag sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                                <Box sx={{ fontSize: '0.875rem', color: '#565656', fontWeight: '600', width: 80 }}>Label</Box>
                                <Input name="label" sx={{ height: 32, fontSize: '12px', fontWeight: '400', width: '100%' }} />
                            </Box>
                            <Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                    <Text sx={{ width: 16, height: 16, color: 'text.secondary' }} />
                                    <Box sx={{ fontSize: '0.875rem' }}>Summary</Box>
                                </Box>
                               <Box><Input name="summary" type="textarea" sx={{ fontSize: '12px', fontWeight: '400'}} /></Box> 
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, justifyContent: 'center' }} >
                                <Button type="submit" sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    height: 32, // Assuming 'h-8' translates to 32px (Tailwind uses 8px as its base unit)
                                    paddingX: 2, // Assuming 'px-2' translates to 8px (Tailwind's default spacing scale)
                                    backgroundColor: 'actgrey', // Replace 'actgrey' with the actual color in your theme or define it
                                    justifyContent: 'end',
                                    alignItems: 'center', width: '64px'
                                }}>
                                    <span sx={{ paddingX: 2 }}>SAVE</span>
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
