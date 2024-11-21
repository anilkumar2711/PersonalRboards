"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/InputWrapper"
import { Form } from "@/components/ui/Form";
import { Box, Typography } from '@mui/material';
import { User, Flag, Ellipsis, Plus, CalendarDays, Clock, Search, CircleFadingArrowUp, Tag, Text, ChevronsRight, MoveDiagonal2, ChevronsUpDown } from "lucide-react"
import { useState } from "react"
import { MdAdd, MdOutlineSearch, MdMoreHoriz } from "react-icons/md";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import DynamicTable from "@/components/ui/DynamicTable";
import { useMixin } from "@/providers/mixin.provider";


export default function ProjectDetailsPanel(props) {
    const { service } = useMixin();
    const { icons } = service;
    const {
        isOpen,
        onClose,
        project
    } = props;
    const statusOptions = [
        { value: "TO DO", label: "TO DO", color: "#BFC5D2" },
        { value: "IN PROGRESS", label: "IN PROGRESS", color: "#C9DEFF" },
        { value: "COMPLETED", label: "COMPLETED", color: "#FDD13A47" }
    ];

    const taskStatusOptions = [
        { value: "TO DO", label: "TO DO", color: "#BFC5D2" },
        { value: "IN PROGRESS", label: "IN PROGRESS", color: "#FDD13A" },
        { value: "COMPLETED", label: "COMPLETED", color: "#FDD13A47" }
    ];

    const priorityOptions = [
        //{ value: "Urgent", label: "Urgent", color: "#F81111" },
        { value: "HIGH", label: "HIGH", color: "#24A249" },
        { value: "MEDIUM", label: "MEDIUM", color: "#9266F5" },
        { value: "LOW", label: "LOW", color: "#B3ABAB" }
    ];

    const taskPriorityOptions = [
        //{ value: "Urgent", label: "Urgent", color: "#F81111" },
        { value: "HIGH", label: "HIGH", color: "#6EA6FF" },
        { value: "MEDIUM", label: "MEDIUM", color: "#FDD13A47" },
        { value: "LOW", label: "LOW", color: "#B3ABAB" }
    ];

    const labelOptions = [
        { value: "1 Hr", label: "1 Hr", color: "#D9D9D9" },
        { value: "3-4 Hrs", label: "3-4 Hrs", color: "#FDD13A" },
        { value: "Biotech", label: "Biotech", color: "#6EA6FF" },
        { value: "DBT", label: "DBT", color: "#FBF3D6" },
        { value: "BUGs", label: "BUGs", color: "#FBF3D6" },
        { value: "IT", label: "IT", color: "#F811116E" }
    ];

    const renderColorOption = (props, option) => (
        <li {...props} key={option.value} >
            <span style={{ backgroundColor: option.color, borderRadius: '4px', width: '16px', height: '16px', marginRight: '10px' }} ></span>
            {option.label}
        </li>
    );

    const ColorTag = (props) => <span style={{ backgroundColor: props.option?.color, display: 'block', borderRadius: '4px', width: '16px', height: '16px', marginRight: '10px' }} ></span>;

    const renderIconOption = (props, option) => (
        <li {...props} key={option.value} >
            <span style={{ backgroundColor: option.color, padding: '4px', display: 'flex', gap: 2, whiteSpace: 'nowrap', borderRadius: '4px' }} >
                <Tag sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                {option.label}
            </span>
        </li>
    );


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
        console.log({ data, event });
    };

    console.log({ project });


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
                    width: '50%', // equivalent to w-3/6
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
                        <MoveDiagonal2 sx={{ width: 24, height: 32, display: 'flex', alignItems: 'center' }} />
                        <BsLayoutSidebarInsetReverse sx={{ width: 24, height: 32, marginLeft: 2, display: 'flex', alignItems: 'center' }} />
                        <ChevronsUpDown sx={{ width: 24, height: 32, marginLeft: 2, display: 'flex', alignItems: 'center' }} />

                    </Box>
                    <Box
                        sx={{
                            padding: 4, // equivalent to p-4
                            borderBottom: '0.5px solid', // equivalent to border-b
                            display: 'flex', // equivalent to flex
                            alignItems: 'center', // equivalent to items-center
                            justifyContent: 'space-between', // equivalent to justify-between
                        }}
                    >
                        <Typography variant="h6" sx={{ fontSize: '20px', color: '#565656', fontWeight: '700' }}>
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
                            {/* Project Details */}
                            <Form onSubmit={handleSubmit}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                    <User sx={{ width: 16, height: 16, color: 'text.secondary' }} />
                                    <span style={{ fontSize: '12px', fontWeight: '600', width: 96 }}>Owner</span>
                                    <Input name="owner" value={project.owner?.full_name} sx={{ height: '2rem', fontSize: '12px', fontWeight: '400' }} />
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
                                        <span style={{ fontSize: '12px', color: '#565656', fontWeight: '600', width: 96 }} >Summary</span>
                                        <Input name="summary" type="textarea" value={project.summary} sx={{ fontSize: '12px', fontWeight: '400' }} />
                                    </Box>
                                    
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
                                        <Box style={{ paddingX: 2, color: '#FFF' }}>SAVE</Box>
                                    </Button>
                                </Box>

                            </Form>

                            {/* Related Projects */}
                            <Box sx={{ '& > *': { marginBottom: 3 } }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <img src="correctTask.png" alt="correct" />
                                        <Box sx={{ color: '#565656', fontSize: '12px', fontWeight: '600', px: 2 }}> Tasks</Box>
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