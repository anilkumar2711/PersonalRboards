"use client";

import { useMixin } from "@/providers/mixin.provider";
import { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, Avatar, Grid, Button, Tabs, Tab, Divider, IconButton } from '@mui/material';

import { HiMenuAlt2, HiFlag } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { FaFlag } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

const sponsoredProjects = [
    { title: 'Task', description: 'Collection of soil Samples from forest', dueDate: 'Tomorrow', priority: 'Urgent' },
    { title: 'Experiment', description: 'Collection of soil Samples from forest', dueDate: 'Aug 9', priority: 'Normal' },
];

export default function BoardColumns(props) {
    const { api, $store, service, urlparams, setComponent } = useMixin();
    const { statusOptions } = $store;
    const board_id = urlparams().id;
    const project_id = urlparams().project_id;
    const { } = props;
    const [data, setData] = useState([]);
    const [tasks, setTasks] = useState([]);
    const columnsColors = statusOptions.reduce((c, o) => ({ ...c, [o.value]: o.color }), {});

    setComponent("BoardColumns", { props, columnsColors, data, tasks });

    useEffect(() => {
        api.get("/columns").then((responseList) => {
            let filteredList = responseList.filter(v => v.board_id == board_id);
            setData(filteredList);
            console.log(filteredList);
        });
        api.get("/tasks").then((responseTaskTilst) => {
            setTasks(responseTaskTilst.filter(v => v.project_id == project_id));
        })
    }, []);

    return (<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'initial', }}>
        <Box sx={{ display: 'flex', gap: 2, }}>
            {data.map((column) => (
                <Box sx={{ flex: 1, backgroundColor: '#D9D9D940', borderRadius: '8px', p: 1, border: '1px solid #ddd', flexShrink: 1, minWidth: '300px', minHeight: '50vh' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderRadius: '8px', backgroundColor: columnsColors[column.name], paddingX: '5px', paddingY: '5px', border: '1px solid #ddd' }}>
                            <img src="Ellipse02.png" alt="ecllipse" />
                            <Box sx={{ paddingLeft: '8px' }}> <Typography sx={{ fontSize: '14px', fontWeight: '600', color: "#B3ABAB", }}>{column.name}</Typography></Box>
                        </Box>
                        <Box sx={{ fontSize: '14px', fontWeight: '600', color: "#B3ABAB", paddingLeft: '10px' }}>12</Box>
                    </Box>

                    {tasks.filter(v => v.column_id == column.id).map((task, index) => (
                        <Card key={index} sx={{ my: 1, boxShadow: 'none', border: '1px solid #ddd', backgroundColor: '#ffffff' }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', flexDirection: 'row', color: '#5F6368' }}>
                                    <img src="work_schedule.png" alt='clock' />
                                    <Typography fontWeight="400" fontSize="12px" paddingLeft="10px" >
                                        {task.title}</Typography>
                                </Box>

                                <Typography fontWeight="600" fontSize="14px" color='#5F6368' paddingTop='10px' >
                                    {task.description}</Typography>

                                <Box sx={{ paddingTop: '8px' }}><HiMenuAlt2 /></Box>
                                <Box sx={{ paddingTop: '8px',display: 'flex',gap:'5px' }}>
                                    <BiCalendar />
                                    <span className="icon-rounded-small">
                                        {service.string(task.Assignee.full_name).toProfile(2)}
                                    </span>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', paddingTop: '8px', gap:'5px' }}>
                                    <Box><BiCalendar /></Box>
                                    <Typography sx={{ color: '#9ca3af' }}>
                                        {service.date(new Date()).duration(task.due_date)}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', paddingTop: '5px' }}>
                                    <FaFlag sx={{ color: '#E70C0C' }} />
                                    <Typography sx={{ fontWeight: "400", fontSize: "12px", color: '#5F6368', paddingLeft: '10px' }}>
                                        {task.priority}
                                    </Typography>
                                </Box>


                            </CardContent>
                        </Card>
                    ))}
                </Box>
            ))}

        </Box>
    </Box>);
}