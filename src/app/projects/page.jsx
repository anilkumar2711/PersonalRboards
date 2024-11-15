"use client"
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Search, ListFilter, } from 'lucide-react';
import ProjectDetailsPanel from './ProjectDetailsPanel';
import { Box, Typography } from '@mui/material';
import { MdDataUsage,MdPermIdentity,MdOutlineEventNote,MdOutlineAssistantPhoto,MdIncompleteCircle } from "react-icons/md";
import { api } from '@/libs/axios';

const ogprojects =  [
  {
    image: "biological.png",
    name: "Sample Project: Biology Research",
    status: "Planning",
    owner: "Dr. Divakar Sada...",
    dates: "July 3, 2024 to August 30",
    priority: "Medium",
    completion: 100
  },
  {
    image: "research.png",
    name: "Sample Project: Physics Research",
    status: "Done",
    owner: "Dr. Pavan Pindi",
    dates: "July 10, 2024 to July 30",
    priority: "High",
    completion: 80
  },
  {
    image: "market-research.png",
    name: "Sample Project: Education Resea...",
    status: "In progress",
    owner: "Dr. Aisha Khanna",
    dates: "August 1, 2024 to September 15",
    priority: "Low",
    completion: 50
  }
];

function ProjectPage() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [projects, setProjects] = useState(ogprojects);
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsPanelOpen(true);
  }
  useEffect(()=>{
    window.api = api;
    api.get("/projects").then((response)=>{
      // setProjects();
    });
  },[]);
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 2, 
        boxShadow: 3, 
      }}
    >
      <Box
        sx={{
          p: 2,
          borderBottom: 1,
          borderColor: 'divider',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            color: '#565656',
          }}
        >
          <Box
            component="img"
            src="rocket_launch.png"
            alt="rocket-launch"
            sx={{ mr: 1, height: 20, width: 20, fontSize:"20px", fontWeight:"700"}}
          />
          Projects
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 1 }}>
          {/* Left Section */}
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box
              component="img"
              src="star 2.png"
              alt="star"
              sx={{ mr: 1, height: 16, width: 20 }}
            />
            <Typography variant="h6" sx={{ fontSize:"14px",fontWeight: '700', color: '#B3ABAB' }}>
              Active
            </Typography>
          </Box>

          {/* Right Section */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
               pr: 2,
            }}
          >
            <Search sx={{ mr: 1, height: 16, width: 16, color: '#565656',}} />
            <Box sx={{pr:1,pl:1}}><ListFilter sx={{ mr: 1, height: 16, width: 16, color: '#565656', paddingLeft:'8px' }} /></Box>
            {/* <Button
              variant="contained"
              size="small"
              sx={{ 
                fontSize:'12px',
                fontWeight:'700',
                backgroundColor: '#6EA6FF',
                paddingLeft:'8px',
                color: 'white',
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: '#6EA6FF',
                },
              }}
            >
              New
            </Button> */}
          </Box>
        </Box>
      </Box>

      <ProjectDetailsPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        project={selectedProject}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              sx={{
                color: '#565656', // Assuming #565656 is defined in your theme; otherwise, replace with an actual color code
                fontSize: '14px', 
                fontWeight:'400',  // Equivalent to Tailwind's `text-base`
                paddingLeft: '1rem', // Equivalent to `pl-4`
              }}
            >
              Project name
            </TableHead>

            <TableHead>
              {/* <div className='flex flex-row text-#565656 text-sm'> <CircleDashed className="mr-2 h-5 w-5 text-#565656" />
             Status
             </div> */}
             <Box sx={{ display: 'flex',
              flexDirection: 'row',alignItems:'center'}}> 
                
                <MdDataUsage />
             <Box sx={{ color: '#565656', // Assuming #565656 is defined in your theme; otherwise, replace with an actual color code
                fontSize: '14px', 
                fontWeight:'400', 
                pl:1,
                
                }}>Status</Box></Box>
             
              {/* <img src="status_icon.png" alt="status"></img> */}
            </TableHead>

            <TableHead>
            <Box sx={{ display: 'flex',
              flexDirection: 'row',alignItems:'center'}}> 
                
                <MdPermIdentity  />
             <Box sx={{ color: '#565656', // Assuming #565656 is defined in your theme; otherwise, replace with an actual color code
                fontSize: '14px', 
                fontWeight:'400', 
                pl:1,
                
                }}>Owner</Box></Box>
            </TableHead>
            <TableHead>
            <Box sx={{ display: 'flex',
              flexDirection: 'row',alignItems:'center'}}> 
                
                <MdOutlineEventNote/>
             <Box sx={{ color: '#565656', // Assuming #565656 is defined in your theme; otherwise, replace with an actual color code
                fontSize: '14px', 
                fontWeight:'400', 
                pl:1,
                
                }}>Dates</Box></Box>
            </TableHead>
            <TableHead>
            <Box sx={{ display: 'flex',
              flexDirection: 'row',alignItems:'center'}}> 
                
                <MdOutlineAssistantPhoto />
             <Box sx={{ color: '#565656', // Assuming #565656 is defined in your theme; otherwise, replace with an actual color code
                fontSize: '14px', 
                fontWeight:'400', 
                pl:1,
                
                }}>Priority</Box></Box>
            </TableHead>

            <TableHead>
            <Box sx={{ display: 'flex',
              flexDirection: 'row',alignItems:'center'}}> 
                
                <MdIncompleteCircle />
             <Box sx={{ color: '#565656', // Assuming #565656 is defined in your theme; otherwise, replace with an actual color code
                fontSize: '14px', 
                fontWeight:'400', 
                pl:1,
                
                }}>Completion</Box></Box>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={index}>
              <TableCell>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    fontSize: '12px', 
                     fontWeight:'700',  // text-base equivalent
                     // equivalent to font-semibold
                    color: '#565656', // assuming #565656 is defined in your theme palette
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.name}
                    sx={{
                      height: '1rem', // h-4 equivalent
                      width: '1rem', // w-4 equivalent
                      mr: 1, // mr-2 equivalent
                    }}
                  />
                  {project.name}
                  <Box
                    component="button"
                    onClick={() => handleProjectSelect(project)}
                    sx={{
                      ml: 1, // ml-2 equivalent
                      border: 'none', // Remove default button styles
                      background: 'none',
                      p: 0, // Remove padding
                    }}
                  >
                    <Box
                      component="img"
                      src="button_image.png"
                      sx={{
                        display: 'block',
                      }}
                    />
                  </Box>
                </Box>

              </TableCell>
              {/* <TableCell>
                <div className='flex flex-row items-center text-base font-semibold text-#565656 '><img src="biological.png" className="h-4 w-4 mr-2"/>{project.name}</div></TableCell> */}
              <TableCell>


                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    px: 1, // equivalent to px-2
                    py: 0.5, // equivalent to py-1
                    borderRadius: '50px', // rounded-full
                    fontSize: '12px', 
                    fontWeight:'600',  // font-semibold
                    color: '#565656', // text-#565656
                    backgroundColor:
                      project.status === 'Planning'
                        ? '#FDD13A47' // bg-#FDD13A47
                        : project.status === 'In progress'
                          ? '#BFC5D2' // bg-#BFC5D2
                          : '#C9DEFF', // bg-#C9DEFF
                  }}
                >
                  <Box
                    component="img"
                    src="Ellipse.png"
                    alt="dot"
                    sx={{
                      height: '0.5rem', // h-2
                      width: '0.5rem', // w-2
                      mr: 1, // mr-2
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  />
                  {project.status}
                </Box>

              </TableCell>
              <TableCell><Box sx={{fontSize: '12px', 
                    fontWeight:'600', // font-semibold
                    color: '#565656',}}>{project.owner}</Box></TableCell>
              <TableCell><Box sx={{fontSize: '12px', 
                    fontWeight:'600', // font-semibold
                    color: '#565656',}}>{project.dates}</Box></TableCell>
              <TableCell>
                <Box
                  component="span"
                  sx={{
                    px: 1, // equivalent to px-2
                    py: 0.5, // equivalent to py-1
                    borderRadius: '50px', // rounded-full
                    fontSize: '12px', 
                    fontWeight:'600', // font-semibold
                    color: '#565656', // default text color
                    backgroundColor:
                      project.priority === 'Low'
                        ? '#BFC5D2' // bg-gray-200
                        : project.priority === 'Medium'
                          ? '#FDD13A47' // bg-#FDD13A47
                          : '#6EA6FF', // bg-#6EA6FF
                  }}
                >
                  {project.priority}
                </Box>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    width: '100%',
                    backgroundColor: 'gray.200', // equivalent to bg-gray-200
                    borderRadius: '50px', // fully rounded
                    height: '10px', // equivalent to h-2.5
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: '#24A249', // equivalent to bg-blue-600
                      height: '10px', // same height as outer box
                      borderRadius: '50px', // fully rounded
                      width: `${project.completion}%`, // dynamically set width
                    }}
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default ProjectPage;


