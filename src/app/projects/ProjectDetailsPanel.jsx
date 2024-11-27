"use client"
import { Input } from "@/components/ui/Input";
import { Box, Typography,IconButton } from '@mui/material';
import { ChevronsRight, MoveDiagonal2,Minimize2, ChevronsUpDown } from "lucide-react"
import { useState } from "react"
import { MdAdd, MdOutlineSearch, MdMoreHoriz } from "react-icons/md";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import DynamicTable from "@/components/ui/DynamicTable";
import { useMixin } from "@/providers/mixin.provider";
import ProjectForm from "./ProjectForm";



export default function ProjectDetailsPanel(props) {
    const { service,api } = useMixin();
    const { icons } = service;
    
    const {
        isOpen,
        onClose,
        project
    } = props;

    const taskStatusOptions = [
        { value: "TO DO", label: "TO DO", color: "#BFC5D2" },
        { value: "IN PROGRESS", label: "IN PROGRESS", color: "#FDD13A" },
        { value: "COMPLETED", label: "COMPLETED", color: "#FDD13A47" }
    ];


    const taskPriorityOptions = [
        //{ value: "Urgent", label: "Urgent", color: "#F81111" },
        { value: "HIGH", label: "HIGH", color: "#6EA6FF" },
        { value: "MEDIUM", label: "MEDIUM", color: "#FDD13A47" },
        { value: "LOW", label: "LOW", color: "#B3ABAB" }
    ];


    const [relatedProjects] = useState([
        { name: "Sample Task 1", status: "IN PROGRESS", owner: "Dr. Divakar Sadam", priority: "MEDIUM", action: true },
        { name: "Sample Task 2", status: "TO DO", owner: "Dr. Divakar Sadam", priority: "HIGH", action: true },
        { name: "Sample Task 3", status: "COMPLETED", owner: "Dr. Divakar Sadam", priority: "HIGH", action: false },
        { name: "Sample Task 4", status: "COMPLETED", owner: "Dr. Divakar Sadam", priority: "LOW", action: false },
        { name: "Sample Task 5", status: "TO DO", owner: "Dr. Divakar Sadam", priority: "MEDIUM", action: true }
    ]);

    const relatedProjectsFields = {
        name: {
            render: ({ value }) => (<Box
                variant="secondary"
                sx={{
                    padding: '4px 15px',
                    borderRadius: '5px',
                    alignItems: 'center',
                    display: 'flex',
                    gap: '5px'
                }}
            >
                <span><icons.AddFile/></span>
                <span>{value}</span>
            </Box>)
        },
        status: {
            width: '180px',
            render: ({ value }) => (
                <Box
                    variant="secondary"
                    sx={{
                        backgroundColor: taskStatusOptions.find(o => o.value == value)?.color,
                        padding: '4px 15px',
                        borderRadius: '15px',
                        alignItems: 'center',
                        display: 'flex',
                        gap: '5px'
                    }}
                >
                    <span style={{ width: '15px', height: '15px', borderRadius: '15px', backgroundColor: '#8c8c8c', display: 'inline-block' }}></span>
                    <span>{value}</span>
                </Box>
            )
        },
        owner: {
            render: ({value}) => (<div style={{ display:'flex',gap:'10px',alignItems:'center'}}>
                <span className="icon-rounded">
                    {service.string(value).toProfile(1)}
                </span>
                <span>{value}</span>
            </div>)
        },
        priority: {
            render: ({ value }) => (
                <Box
                    variant="secondary"
                    sx={{
                        backgroundColor: taskPriorityOptions.find(o => o.value == value)?.color,
                        padding: '4px 15px',
                        borderRadius: '5px',
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent:'center',
                        gap: '5px'
                    }}
                >
                    <span>{value}</span>
                </Box>
            )
        },
        action: {
            render: ({value})=>(
                <Input value={value} type="switch" readonly={true} trueLabel={"OPEN"} falseLabel={"CLOSE"} />
            )
        }
    };

    const handleSubmit = (data, event) => {
        console.log({ data });
        api.put(`/projects/${project.id}`, {
            name: data.name,
            type: data.type,
            description: data.description,
            status: data.status,
            completion: data.completion,
            startDate: data.dates.split(",")[0],
            endDate: data.dates.split(",")[1],
            priority: data.priority,
            label: data.label
        }).then((response) => {
            console.log({ createProject: response });
        })
        .catch((err) => {
            console.error(err);
        });
    };

    console.log({ project });
    const [isFullScreen, setIsFullScreen] = useState(false);
    const toggleFullScreen = () => setIsFullScreen(!isFullScreen);

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)', // equivalent to bg-black/30
                        zIndex: 40, // equivalent to z-40
                    }}
                    onClick={onClose}
                />
            )}

            {/* Panel */}
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    height: '100%',
                    width: isFullScreen ? "100%" : "50%",// equivalent to w-3/6
                    backgroundColor: 'background.default', // equivalent to bg-background, use your theme's background color
                    boxShadow: 3, // shadow-lg equivalent
                    transition: 'transform 300ms ease-in-out',
                    zIndex: 50,
                    transform: isOpen ? 'translateX(0)' : 'translateX(100%)', // conditionally translate on open/close
                }}
            >
                {/* Content goes here */}

                <Box
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* Header */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',

                            alignItems: 'center',
                            paddingX: 4,  // equivalent to px-4
                            marginTop: 4, // equivalent to mt-4
                            gap: 1, // equivalent to gap-1
                        }}
                    >
                        <button>
                            <ChevronsRight sx={{ width: 32, height: 32 }} onClick={onClose} />
                        </button>
                        <span onClick={toggleFullScreen} style={{ width: 24, height: 32, display: 'flex', alignItems: 'center',cursor:'pointer' }} > {isFullScreen ? <Minimize2 /> : <MoveDiagonal2 />}</span>
                        <BsLayoutSidebarInsetReverse sx={{ width: 24, height: 32, marginLeft: 2, display: 'flex', alignItems: 'center' }} />
                        <ChevronsUpDown sx={{ width: 24, height: 32, marginLeft: 2, display: 'flex', alignItems: 'center' }} />

                    </Box>
                    <Box
                        sx={{
                            padding: 4, // equivalent to p-4
                            borderBottom: '0.5px solid', // equivalent to border-b
                            display: 'flex', // equivalent to flex
                            alignItems: 'center', // equivalent to items-center
                            justifyContent: 'space-between', 
                            // equivalent to justify-between
                        }}
                    >
                        <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: '700',
                             
                         }}>
                            {project.name}
                        </Typography>
                    </Box>

                    {/* Content */}
                    <Box
                        sx={{
                            flex: 1, // equivalent to flex-1
                            overflow: 'auto', // equivalent to overflow-auto
                            py: 2, // equivalent to py-2
                            px: 4, // equivalent to px-4
                        }}
                    >
                        <Box sx={{ '& > *': { marginBottom: 2 } }}>
                            <ProjectForm onSubmit={handleSubmit} project={project}></ProjectForm>

                            {/* Related Projects */}
                            <Box sx={{ '& > *': { marginBottom: 3 } }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <img src="correctTask.png" alt="correct" />
                                        <Box sx={{ fontSize: '12px', fontWeight: '600', px: 2 }}> Tasks</Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'center', height: 56, width: "100%" }} >
                                        <MdOutlineSearch />
                                        <Box sx={{ px: 1, }}><MdAdd /></Box>
                                        <MdMoreHoriz />
                                    </Box>
                                </Box>
                                <DynamicTable
                                    data={relatedProjects}
                                    fields={relatedProjectsFields}
                                    hasHeader={false}
                                >
                                </DynamicTable>
                            </Box >
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}