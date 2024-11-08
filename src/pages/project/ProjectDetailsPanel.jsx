'use client'

import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Badge } from "../../components/ui/badge"
// import { ProgressInput} from "../../components/ui/ProgressInput"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "../../components/ui/table"
import {  User, Flag, CalendarDays, Clock, Text ,ChevronsRight, MoveDiagonal2,ChevronsUpDown} from "lucide-react"
import { useState } from "react"
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { PiChartPieSliceFill } from "react-icons/pi";
import { MdOutlineLabel } from "react-icons/md";


export default function ProjectDetailsPanel(props) {
    const {
        isOpen,
        onClose,
        project
    } = props;
    const [relatedProjects] = useState([
        { name: "Sample Project 1", status: "In Progress", owner: "Dr. Divakar Sadan", priority: "Medium",},
        { name: "Sample Project 2", status: "Planning", owner: "Dr. Divakar Sadan", priority: "Medium",},
        { name: "Sample Project 3", status: "Planning", owner: "Dr. Divakar Sadan",priority: "Medium", },
        { name: "Sample Project 4", status: "Planning", owner: "Dr. Divakar Sadan",priority: "Medium", },
        { name: "Sample Project 5", status: "Planning", owner: "Dr. Divakar Sadan",priority: "Medium", },
    ]);

    console.log({project});

    
    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/30 z-40"
                    onClick={onClose}
                />
            )}

            {/* Panel */}
            <div className={`bg-white fixed right-0 top-0 h-full w-3/6 bg-background shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full flex flex-col">
                    {/* Header */}
                    <div className="flex flex-row px-4 mt-4 gap-1">
                      <button> <ChevronsRight className="w-8 h-8" onClick={onClose}></ChevronsRight></button>  
                     <MoveDiagonal2 className="w-6 h-8 items-center"></MoveDiagonal2>
                     <BsLayoutSidebarInsetReverse className="w-6 h-8 ml-2  items-center"></BsLayoutSidebarInsetReverse>
                     <ChevronsUpDown className="w-6 h-8 ml-2  items-center"> </ChevronsUpDown>
                    </div>
                    <div className="p-4 border-b flex items-center justify-between">
                        <h2 className="text-lg font-semibold">{project.name}</h2>
                        {/* <Button variant="ghost" size="icon" onClick={onClose}>
                            <X className="h-4 w-4" />
                        </Button> */}
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-auto py-2 px-4">
                        <div className="space-y-2">
                            {/* Project Details */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm w-24">Owner</span>
                                    <Input value={project.owner} className="h-8 text-sm " />
                                </div>

                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm w-24">Status</span>
                                    <Input value={project.status} className="h-8 text-sm bg-pjctblue" />
                                </div>

                                <div className="flex items-center gap-2">
                                    <PiChartPieSliceFill className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm w-24">Completion</span>
                                    {/* <div className="flex-1">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full"
                                                style={{ width: `${project.completion}%` }}
                                            />
                                        </div>
                                    </div> */}
                                    {/* <ProgressInput value={`${project.completion}%`} className="h-8  text-sm w-16" /> */}
                                </div>

                                <div className="flex items-center gap-2">
                                    <CalendarDays className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm w-24">Dates</span>
                                    <Input value={project.dates} className="h-8  text-sm" />
                                </div>

                                <div className="flex items-center gap-2">
                                    <Flag className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm w-24">Priority</span>
                                    <Input value={project.priority} className="h-8 text-sm" />
                                </div>

                                <div className="flex items-center gap-2">
                                    <MdOutlineLabel className="h-5 w-5 text-muted-foreground" />
                                    <span className="text-sm w-24">Label</span>
                                    <Input value={project.label} className="h-8  text-sm" />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Text className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm">Summary</span>
                                    </div>
                                    <Input value={project.summary} className="h-20  text-sm" />
                                </div>
                            </div>

                            {/* Related Projects */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium">Related Projects</h3>
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
                                                <TableCell>{project.name}</TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary">{project.status}</Badge>
                                                </TableCell>
                                                <TableCell>{project.owner}</TableCell>
                                                <TableCell>{project.priority}</TableCell>
                                                <TableCell>
                                                    <Button className="flex flex-row h-8 px-2 bg-actgrey justify-center items-center ">
                                                    <BsLayoutSidebarInsetReverse className="w-8 h-6"/>
                                                    <span className="px-2 ">OPEN</span>
                                                    </Button>
                                                
                                                {/* <img src="button_image.png" alt="priority"/> */}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}