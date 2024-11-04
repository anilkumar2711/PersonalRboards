'use client'

import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Badge } from "../../components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table"
import { X, User, Flag, Target, Clock, Tag, FileText } from "lucide-react"
import { useState } from "react"


export default function ProjectDetailsPanel(props) {
    const {
        isOpen,
        onClose,
        project = {
            name: "Sample Project: Biology Research",
            owner: "Dr. Divakar Sadan",
            status: "Planning",
            completion: 0,
            goals: "Research Goal",
            priority: "Medium",
            label: "Biology",
            summary: "Project summary and details"
        }
    } = props;
    const [relatedProjects] = useState([
        { name: "Sample Project 1", status: "In Progress", owner: "Dr. Divakar Sadan", priority: "Medium",},
        { name: "Sample Project 2", status: "Planning", owner: "Dr. Divakar Sadan", priority: "Medium",},
        { name: "Sample Project 3", status: "Planning", owner: "Dr. Divakar Sadan",priority: "Medium", },
        { name: "Sample Project 4", status: "Planning", owner: "Dr. Divakar Sadan",priority: "Medium", },
        { name: "Sample Project 5", status: "Planning", owner: "Dr. Divakar Sadan",priority: "Medium", },
    ])

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
                    <div className="p-4 border-b flex items-center justify-between">
                        <h2 className="text-lg font-semibold">{project.name}</h2>
                        <Button variant="ghost" size="icon" onClick={onClose}>
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-auto p-2">
                        <div className="space-y-2">
                            {/* Project Details */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <User className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">Owner</span>
                                    <Input value={project.owner} className="h-8 text-sm" />
                                </div>

                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">Status</span>
                                    <Input value={project.status} className="h-8 text-sm" />
                                </div>

                                <div className="flex items-center gap-2">
                                    <Target className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">Completion</span>
                                    <div className="flex-1">
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full"
                                                style={{ width: `${project.completion}%` }}
                                            />
                                        </div>
                                    </div>
                                    <Input value={`${project.completion}%`} className="h-8 text-sm w-16" />
                                </div>

                                <div className="flex items-center gap-2">
                                    <Flag className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">Goals</span>
                                    <Input value={project.goals} className="h-8 text-sm" />
                                </div>

                                <div className="flex items-center gap-2">
                                    <Flag className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">Priority</span>
                                    <Input value={project.priority} className="h-8 text-sm" />
                                </div>

                                <div className="flex items-center gap-2">
                                    <Tag className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm">Label</span>
                                    <Input value={project.label} className="h-8 text-sm" />
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-4 w-4 text-muted-foreground" />
                                        <span className="text-sm">Summary</span>
                                    </div>
                                    <Input value={project.summary} className="h-20 text-sm" />
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
                                                <img src="button_image.png" alt="priority"/>
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