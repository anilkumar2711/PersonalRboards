"use client";

import { useMixin } from "@/providers/mixin.provider";
import { useEffect, useState } from "react";
import { Button } from '@mui/material';
import { Box, Typography, Card, CardContent } from "@mui/material";
import { HiMenuAlt2 } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { FaFlag } from "react-icons/fa";
import { List,LayoutPanelLeft,UserRound,AlignJustify,Flag,ArrowDownWideNarrow,ChartNoAxesCombined,CircleChevronDown,Trash } from "lucide-react";

export default function BoardColumns(props) {
    const { api, $store, query, setComponent, $emit } = useMixin();
    const { statusOptions } = $store;

    const board_id = query.get("id");
    const project_id = query.get("project_id");

    const [columns, setColumns] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [draggedTask, setDraggedTask] = useState(null); // Track the task being dragged

    const columnsColors = statusOptions.reduce(
        (colors, option) => ({ ...colors, [option.value]: option.color }),
        {}
    );

    const handelOnAddColumn = () => {
        $emit.trigger("openColumnCreate");
    }

    const handelBoardDelete = (column)=>{
        api.delete(`/columns/${column.id}`,{}).then((response) => {
            $emit.trigger("getColumnlist");
        });
    };

    // Set the component metadata
    setComponent("BoardColumns", { columnsColors, columns, tasks });

    const getColumnList = ()=>{
        if(project_id) {
            api.get(`/boards/${project_id}`).then((boardList) => {
                const selectedBoard = boardList.find(v=>v.id==board_id);
                selectedBoard && setColumns(selectedBoard.Columns);
            });
        } else {
            // alert("Project");
        }
    };

    useEffect(() => {
        // Fetch columns and tasks for the current board and project
        
        getColumnList();

        api.get("/tasks").then((response) => {
            setTasks(response.filter((task) => task.project_id === project_id));
        });

        $emit.onTrigger("getColumnlist",()=>{
            getColumnList();
        });

    }, [api, board_id, project_id]);

    // Handle drag start
    const handleDragStart = (task) => {
        setDraggedTask(task); // Store the task being dragged
    };

    // Handle drag over
    const handleDragOver = (e) => {
        e.preventDefault(); // Allow drop
    };

    // Handle drop
    const handleDrop = (columnId) => {
        if (!draggedTask) return;

        // Update the task's column_id
        const updatedTasks = tasks.map((task) =>
            task.id === draggedTask.id ? { ...task, column_id: columnId } : task
        );
        setTasks(updatedTasks);
        setDraggedTask(null); // Clear dragged task

        // Optionally, update the task in the backend
        // api.patch(`/tasks/move-task/${draggedTask.id}`, {
        //     newColumnId: columnId,
        //     status: columns.find(v => v.id == columnId)?.name
        // }).then(() => {

        // });
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px"}}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2,px:1 }}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Box  sx={{display:'flex', flexDirection:'row', alignItems:'center',border: '1px solid #ddd',borderRadius: '20px',paddingRight:'4px',paddingLeft:'4px'}}>
                        <UserRound/>
                        <button className="rounded-ibutton">Assignee</button>
                    </Box>
                    <Box  sx={{display:'flex', flexDirection:'row', alignItems:'center',border: '1px solid #ddd',borderRadius: '20px',paddingRight:'4px',paddingLeft:'4px'}}>
                        <Flag/>
                        <button  className="rounded-ibutton" >Priority</button>
                    </Box>
                    <Box  sx={{display:'flex', flexDirection:'row', alignItems:'center',border: '1px solid #ddd',borderRadius: '20px',paddingRight:'4px',paddingLeft:'4px'}}>
                        <ArrowDownWideNarrow/>
                        <button className="rounded-ibutton" >Sort</button>
                    </Box>
                </Box>
                <div style={{ flexGrow: 1 }}></div>
                <button
                    style={{
                        backgroundColor: "none",
                        outline: "none",
                        fontWeight: "600",
                    }}
                    onClick={()=>handelOnAddColumn()}
                >
                    + Add Column
                </button>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth:"calc(100vw - 300px)", overflow:"auto"  }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                    {columns.map((column) => (
                        <Box
                            key={column.id}
                            onDragOver={handleDragOver}
                            onDrop={() => handleDrop(column.id)} // Handle drop event
                            sx={{
                                flex: 1,
                                backgroundColor: "#D9D9D940",
                                borderRadius: "8px",
                                p: 1,
                                border: "1px solid #ddd",
                                minWidth: "300px",
                                minHeight: "50vh",
                                flexShrink: 1,
                            }}
                        >
                            {/* Column Header */}
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        borderRadius: "8px",
                                        backgroundColor: columnsColors[column.name],
                                        px: 1,
                                        py: 0.5,
                                        border: "1px solid #ddd",
                                    }}
                                >
                                    <Typography sx={{ fontSize: "14px", fontWeight: "600", color: "#B3ABAB" }}>
                                        {column.name}
                                    </Typography>
                                </Box>
                                {
                                    column.position>=5 ? <button onClick={()=>handelBoardDelete(column)}  style={{
                                        marginLeft:"auto",
                                        cursor:"pointer"
                                    }}><Trash ></Trash></button> :""
                                }
                            </Box>

                            {/* Column Tasks */}
                            {tasks
                                .filter((task) => task.column_id === column.id)
                                .map((task, index) => (
                                    <Card
                                        key={index}
                                        draggable
                                        onDragStart={() => handleDragStart(task)} // Start dragging
                                        sx={{
                                            my: 1,
                                            boxShadow: "none",
                                            border: "1px solid #ddd",
                                            borderRadius: "8px",
                                            backgroundColor: "#ffffff",
                                            cursor: "grab",
                                        }}
                                    >
                                        <CardContent>
                                            <Box sx={{ display: "flex", color: "#5F6368", gap: "5px" }}>
                                                <img src="work_schedule.png" alt="clock" />
                                                <Typography fontWeight="400" fontSize="12px">
                                                    {task.title}
                                                </Typography>
                                            </Box>

                                            <Typography fontWeight="600" fontSize="14px" color="#5F6368" pt={1}>
                                                {task.description}
                                            </Typography>
                                            <Box sx={{ paddingTop: "8px" }}>
                                                <HiMenuAlt2 />
                                            </Box>
                                            <Box sx={{ paddingTop: "8px", display: "flex", gap: "5px" }}>
                                                <BiCalendar />
                                                <span className="icon-rounded-small">
                                                    {service.string(task.Assignee.full_name).toProfile(2)}
                                                </span>
                                            </Box>

                                            <Box sx={{ display: "flex", gap: 1, pt: 1 }}>
                                                <BiCalendar />
                                                <Typography sx={{ color: "#9ca3af" }}>
                                                    {service.date(new Date()).duration(task.due_date)}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: "flex", gap: 1, pt: 1 }}>
                                                <FaFlag style={{ color: "#E70C0C" }} />
                                                <Typography fontSize="12px" color="#5F6368">
                                                    {task.priority}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                ))}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
