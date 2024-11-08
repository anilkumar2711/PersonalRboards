'use client'

import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Badge } from "../../components/ui/badge"
import "./ProjectDetailsPanel";
// import { ProgressInput} from "../../components/ui/ProgressInput"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "../../components/ui/table"
import { Search, ListFilter, User, Flag, CalendarDays, Clock, Text ,ChevronsRight, MoveDiagonal2,ChevronsUpDown} from "lucide-react"
import { useState } from "react"
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { PiChartPieSliceFill } from "react-icons/pi";
import { MdOutlineLabel } from "react-icons/md";
import { Autocomplete, TextField, Box, Typography  } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker, SingleInputDateRangeField } from '@mui/x-date-pickers-pro';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { CalendarDays } from '@mui/icons-material';
import dayjs from 'dayjs';
import { Directions } from "@mui/icons-material";


export default function ProjectDetailsPanel(props) {
    const {
        isOpen,
        onClose,
        project = {
            name: "Sample Project: Biology Research",
            owner: "Dr. Divakar Sadan",
            status: "IN PROGRESS",
            completion: 50,
            dates: "",
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
    


    const statusColors = {
        "In Progress": "#BFC5D2",
        "Done": "#C9DEFF",
        "Planning": "#FDD13A47",
        
      };
      const priorityOptions = [
        { label: 'High', color: '#F81111' },
        { label: 'Medium', color: '#24A249' },
        { label: 'Low', color: '#B3ABAB' },
        { label: 'Normal', color: '#9266F5' },
      ];
    // const [status, setStatus] = useState(project.status);
    // const statusOptions = ["In Progress", "Completed", "Planning", "On Hold"];
      const [status, setStatus] = useState(project.status);
      const statusOptions = ["In Progress", "Done", "Planning"];
      const [selectedDates, setSelectedDates] = useState(project.dates || [null, null]);
      const [priority, setPriority] = useState(project.priority);
      const handleDateChange = (newDates) => {
        setSelectedDates(newDates);
    
        // Format selected dates into a readable string
        const formattedDates = newDates[0] && newDates[1]
          ? `${dayjs(newDates[0]).format('MM/DD/YYYY')} - ${dayjs(newDates[1]).format('MM/DD/YYYY')}`
          : '';
          
        // Optionally, update `project.dates` if needed
        project.dates = formattedDates;
      };
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
                                    {/* <Input value={project.status} className="h-8 text-sm bg-pjctblue" /> */}
                                   
                                    <Autocomplete className="text-sm" value={status}
                                          onChange={(event, newValue) => {
                                          setStatus(newValue);
                                         }}
                                          options={statusOptions} disableClearable popupIcon={null}
                                          renderInput={(params) => (
                                         <TextField {...params} variant="outlined"sx={{ height: "30px",
                                             width: "200px",
                                             backgroundColor: statusColors[status] || "#fff", // Set background based on status
                                             "& .MuiOutlinedInput-root": {
                                              padding: "4px 8px",
                                              fontSize: "0.875rem", },
                                            "& .MuiInputBase-root": {height: "100%", },}}/>
                                             )}
                                             renderOption={(props, option) => (
                                            <li
                                             {...props}
                                             style={{
                                             backgroundColor: statusColors[option] || "#fff",
                                             fontSize: "0.875rem",
                                             padding: "8px 16px",
                                             }}
                                             >
                                              {option}
                                               </li>
                                                 )}
                                                />
                                            </div>

                                <div className="flex items-center gap-2">
                                    <PiChartPieSliceFill className="h-4 w-4 text-muted-foreground" />
                                    <span className="text-sm w-24">Completion</span>
                                    <div className="completion-text flex flex-row items-center" style={{ marginTop: "5px", color: "#565656" }}>
                                          {project.completion}%
                                           
                                         <div className="completion-bar ml-2" style={{
                                        width: project.completion,
                                        backgroundColor: "#24A249",
                                        height: "10px",
                                        borderRadius: "10px"
                                        }} />
                                </div>
                                        
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
      
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['SingleInputDateRangeField']}>
          <DateRangePicker
            value={selectedDates}
            onChange={handleDateChange}
            slots={{ field: SingleInputDateRangeField }} // Use SingleInputDateRangeField for one input
            slotProps={{
              textField: { size: 'small' },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
      
      {/* Display the selected date range in Input field */}
      {/* <Input
        value={
          selectedDates[0] && selectedDates[1]
            ? `${dayjs(selectedDates[0]).format('MM/DD/YYYY')} - ${dayjs(selectedDates[1]).format('MM/DD/YYYY')}`
            : ''
        }
        className="h-8 text-sm"
        readOnly
      /> */}
    </div>
    <div className="flex items-center gap-2">
  <Flag className="h-4 w-4 text-muted-foreground" />
  <span className="text-sm w-24">Priority</span>
  <Autocomplete
    sx={{ height: "25px", width: "150px" }}
    options={priorityOptions}
    disableClearable
    popupIcon={null}
    getOptionLabel={(option) => option.label}
    value={priority}
    onChange={(event, newValue) => setPriority(newValue)}
    renderInput={(params) => (
      <TextField
        {...params}
        variant="outlined"
        placeholder="Select Priority"
        fullWidth
        sx={{
            "& .MuiOutlinedInput-root": {
              padding: "9px",                  // Set padding to match the provided style
              height: "30px",                  // Set height as per the provided style
              boxSizing: "border-box",         // Ensures consistent sizing with padding
            },
            "& .MuiInputBase-input": {
              fontSize: "0.875rem",            // Adjusts font size
              padding: "0",                    // Removes additional padding inside the input element
              height: "100%",                  // Ensures the input takes up the full height
              display: "flex",
              alignItems: "center",           // Aligns the input text vertically
            },
          }}
      />
    )}
    renderOption={(props, option) => (
      <Box component="li" {...props} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            width: "10px",
            height: "10px",
            backgroundColor: option.color,
            borderRadius: '0%', // Circular color box
          }}
        />
        <Typography>{option.label}</Typography>
      </Box>
    )}
    renderValue={(selected) => (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {selected && (
          <Box
            sx={{
              width: 10,
              height: 10,
              backgroundColor: selected.color,  // Use the selected color
              borderRadius: '50%',  // Circular color box
              marginRight: "8px",   // Space between the color box and text
            }}
          />
        )}
        {selected ? selected.label : "Select Priority"}
      </Box>
    )}
  />
</div>

                        <div className="flex items-center gap-2">
                                    <MdOutlineLabel className="h-5 w-5 text-muted-foreground" />
                                    <span className="text-sm w-24">Label</span>
                                    <Input value={project.label} className="h-8  text-sm" />
                                </div>
                   {/* <Input value={project.label} className="h-8  text-sm" /> */}
                                
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
                                <div className="flex flex-row justify-between">
                                    <div className="flex flex-row items-center ">
                                        <img src="correctTask.png" className="w-4 h-4"/>
                                        <h5 className="pl-2 text-#565656">Task</h5>
                                    </div>
                                    <div>
                                        <Search/>
                                    </div>
                                </div>
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
                                                    <div className="flex flex-row h-8  bg-lgtgrey justify-center items-center rounded-md">
                                                    <BsLayoutSidebarInsetReverse className="w-8 h-6"/>
                                                    <span className="px-2 ">OPEN</span>
                                                    </div>
                                                
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