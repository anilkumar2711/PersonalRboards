import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Badge } from "../../components/ui/badge"
import { Form } from "../../components/ui/Form";
import { Box, Typography } from '@mui/material';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "../../components/ui/table"
import { User, Flag, Ellipsis, Plus, CalendarDays, Clock, Search, CircleFadingArrowUp, Tag, Text, ChevronsRight, MoveDiagonal2, ChevronsUpDown } from "lucide-react"
import { useState } from "react"
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { PiChartPieSliceFill } from "react-icons/pi";
import { MdAdd ,MdOutlineSearch,MdMoreHoriz } from "react-icons/md";


export default function ProjectDetailsPanel(props) {
    const {
        isOpen,
        onClose,
        project
    } = props;
    const statusOptions = [
        { value: "In Progress", label: "In Progress", color: "#BFC5D2" },
        { value: "Done", label: "Done", color: "#C9DEFF" },
        { value: "Planning", label: "Planning", color: "#FDD13A47" }
    ];
    const renderStatusOption = (props, option) => (
        <li {...props} key={option.value} style={{ backgroundColor: option.color }} >
            {option.label}
        </li>
    );
    const priorityOptions = [{ value: "Urgent", label: "Urgent", color: "#F81111" },
    { value: "High", label: "High", color: "#24A249" },
    { value: "Medium", label: "Medium", color: "#9266F5" },
    { value: "Low", label: "Low", color: "#B3ABAB" }
    ]

    const [relatedProjects] = useState([
        { name: "Sample Project 1", status: "In Progress", owner: "Dr. Divakar Sadam", priority: "Medium", },
        { name: "Sample Project 2", status: "Planning", owner: "Dr. Divakar Sadam", priority: "High", },
        { name: "Sample Project 3", status: "Planning", owner: "Dr. Divakar Sadam", priority: "High", },
        { name: "Sample Project 4", status: "Planning", owner: "Dr. Divakar Sadam", priority: "Low", },
        { name: "Sample Project 5", status: "Planning", owner: "Dr. Divakar Sadam", priority: "Medium", },
    ]);

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
                       
                            alignItems:'center',
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
                        {/* Optionally, you can include a Button if needed */}
                        {/* <IconButton onClick={onClose}>
    <X sx={{ width: 16, height: 16 }} />
  </IconButton> */}
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
                                    <Input name="owner" value={project.owner} sx={{ height: '2rem', fontSize: '12px', fontWeight: '400' }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                    <Clock sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                                    <span style={{ fontSize: '12px', fontWeight: '600', width: 96 }}>Status</span>
                                    <Input name="status" type="search" options={statusOptions} renderOption={renderStatusOption} value={project.status} sx={{ height: 32, fontSize: '12px', fontWeight: '400', backgroundColor: 'yourCustomColor' }} />
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
                                    <Input name="priority" type="search" options={priorityOptions} renderOption={renderStatusOption} value={project.priority} sx={{ height: 32, fontSize: '12px', fontWeight: '400', width: '100%' }} />
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, fontSize: '12px', color: '#565656', fontWeight: '600' }}>
                                    <Tag sx={{ height: 16, width: 16, color: 'text.secondary' }} />
                                    <span style={{ fontSize: '12px', color: '#565656', fontWeight: '600', width: 96 }}>Label</span>
                                    <Input name="label" value={project.label} sx={{ height: 32, fontSize: '12px', fontWeight: '400', width: '100%' }} />
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
                                        alignItems: 'center',    width: '64px'
                                    }}>
                                        <span style={{ paddingX: 2 }}>SAVE</span>
                                    </Button>
                                </Box>

                            </Form>

                            {/* Related Projects */}
                            <Box sx={{ '& > *': { marginBottom: 3 } }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <img src="correctTask.png" alt="correct" />
                                        <Box sx={{ color: '#565656', fontSize: '12px', fontWeight: '600',px:2 }}> Tasks</Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:'end', alignItems: 'center', height: 56, width: "100%" }} >
                                        <MdOutlineSearch />
                                       <Box sx={{px:1,}}><MdAdd  /></Box> 
                                        <MdMoreHoriz />
                                    </Box>
                                </Box>
                                <Table>
                                    {/* <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead>Status</TableHead>
                                            <TableHead>Owner</TableHead>
                                            <TableHead>Priority</TableHead>
                                            <TableHead>Details</TableHead>
                                        </TableRow>
                                    </TableHeader> */}
                                    <TableBody>
                                        {relatedProjects.map((project, index) => (
                                            <TableRow key={index}>
                                                <TableCell><Box sx={{ color: '#565656', fontSize: '12px', fontWeight: '600' }}>{project.name}</Box></TableCell>
                                                <TableCell>
                                                    <Box variant="secondary" sx={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        width: "100%",
                                                        px: 1, // equivalent to px-2
                                                        py: 1, // equivalent to py-1
                                                        borderRadius: '50px', // rounded-full
                                                        fontSize: '10px',
                                                        fontWeight: '600',  // font-semibold
                                                        color: '#565656', // text-#565656
                                                        backgroundColor:
                                                            project.status === 'Planning'
                                                                ? '#FDD13A' // bg-#FDD13A47
                                                                : project.status === 'In progress'
                                                                    ? '#BFC5D2' // bg-#BFC5D2
                                                                    : '#C9DEFF', // bg-#C9DEFF
                                                    }}>{project.status}</Box>
                                                </TableCell>
                                                <TableCell >
                                                    <Box sx={{ color: '#565656', fontSize: '12px', fontWeight: '600' }}>{project.owner}</Box></TableCell>
                                                <TableCell>
                                                    <Box sx={{
                                                        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', px: 1, width: '100%', // equivalent to px-2
                                                        py: 1.0, // equivalent to py-1
                                                        borderRadius: '25px', // rounded-full
                                                        fontSize: '12px',
                                                        fontWeight: '600', // font-semibold
                                                        color: '#565656', backgroundColor:
                                                            project.priority === 'Low'
                                                                ? '#BFC5D2' // bg-gray-200
                                                                : project.priority === 'Medium'
                                                                    ? '#FDD13A47' // bg-#FDD13A47
                                                                    : '#6EA6FF', // bg-#6EA6FF  
                                                    }}>{project.priority}</Box></TableCell>
                                                <TableCell>
                                                    <Box sx={{
                                                        width: '100%',
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        height: '2rem', // h-8 in Tailwind is 2rem (32px)
                                                        // px-2 in Tailwind is 0.5rem (8px)
                                                        backgroundColor: 'lightgrey', // 'bg-lgtgrey' assuming lightgrey color
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderRadius: '0.375rem',
                                                        color: '#565656',  // Assuming 'text-txtblack' is the primary text color in your theme
                                                        fontSize: '10px',      // text-base corresponds to 1rem (16px)
                                                        fontWeight: '600',// rounded-md in Tailwind is 0.375rem
                                                    }}>
                                                        <BsLayoutSidebarInsetReverse sx={{
                                                            width: '36px', // w-8 in Tailwind is 2rem (32px)
                                                            height: '1.5rem',

                                                            // h-6 in Tailwind is 1.5rem (24px)
                                                        }} />
                                                        <Box sx={{
                                                            color: '#565656',  // Assuming 'text-txtblack' is the primary text color in your theme
                                                            fontSize: '10px',      // text-base corresponds to 1rem (16px)
                                                            fontWeight: '600',
                                                            paddingLeft: '5px',
                                                            // font-medium corresponds to font-weight 500
                                                        }}>OPEN</Box>
                                                    </Box>

                                                    {/* <img src="button_image.png" alt="priority"/> */}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box >
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}