import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Button } from '../components/ui/button';
import { Search, ListFilter } from 'lucide-react';
import ProjectDetailsPanel from './project/ProjectDetailsPanel';
import { Box, Typography } from '@mui/material';

const projects = [
  {
    image: "biological.png",
    name: "Sample Project: Biology Research",
    status: "Planning",
    owner: "Dr. Divakar Sada...",
    dates: "July 3, 2024 to August 30",
    priority: "Medium",
    completion: 10
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
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsPanelOpen(true);
  }
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 2, // Equivalent to `rounded-lg` in Tailwind
        boxShadow: 3, // Equivalent to `shadow` in Tailwind
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
            color: 'txtblack',
          }}
        >
          <Box
            component="img"
            src="rocket_launch.png"
            alt="rocket-launch"
            sx={{ mr: 1, height: 20, width: 20 }}
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
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'actgrey' }}>
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
            <Search sx={{ mr: 1, height: 16, width: 16, color: 'txtblack' }} />
            <ListFilter sx={{ mr: 1, height: 16, width: 16, color: 'txtblack' }} />
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: 'newblue',
                color: 'white',
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: 'newblue.dark',
                },
              }}
            >
              New
            </Button>
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
                color: 'txtblack', // Assuming txtblack is defined in your theme; otherwise, replace with an actual color code
                fontSize: '1rem',   // Equivalent to Tailwind's `text-base`
                paddingLeft: '1rem', // Equivalent to `pl-4`
              }}
            >
              Project name
            </TableHead>

            <TableHead>
              {/* <div className='flex flex-row text-txtblack text-sm'> <CircleDashed className="mr-2 h-5 w-5 text-txtblack" />
             Status
             </div> */}
              <img src="status_icon.png" alt="status"></img>
            </TableHead>

            <TableHead>
              <img src="owner_icon.png" alt="owner"></img>
            </TableHead>
            <TableHead>
              <img src="dates_icon.png" alt="dates"></img>
            </TableHead>
            <TableHead>
              <img src="priority_icon.png" alt="priority"></img>
            </TableHead>

            <TableHead>
              <img src="completion_icon.png" alt="completion"></img>
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
                    fontSize: '1rem', // text-base equivalent
                    fontWeight: 'fontWeightMedium', // equivalent to font-semibold
                    color: 'txtblack.main', // assuming txtblack is defined in your theme palette
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
                <div className='flex flex-row items-center text-base font-semibold text-txtblack '><img src="biological.png" className="h-4 w-4 mr-2"/>{project.name}</div></TableCell> */}
              <TableCell>


                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    px: 1, // equivalent to px-2
                    py: 0.5, // equivalent to py-1
                    borderRadius: '50px', // rounded-full
                    fontSize: '0.75rem', // text-xs equivalent
                    fontWeight: 'fontWeightMedium', // font-semibold
                    color: 'txtblack.main', // text-txtblack
                    backgroundColor:
                      project.status === 'Planning'
                        ? 'plnng.main' // bg-plnng
                        : project.status === 'In progress'
                          ? 'inprog.main' // bg-inprog
                          : 'doneblu.main', // bg-doneblu
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
              <TableCell>{project.owner}</TableCell>
              <TableCell>{project.dates}</TableCell>
              <TableCell>
                <Box
                  component="span"
                  sx={{
                    px: 1, // equivalent to px-2
                    py: 0.5, // equivalent to py-1
                    borderRadius: '50px', // rounded-full
                    fontSize: '0.75rem', // text-xs
                    fontWeight: 'fontWeightMedium', // font-semibold
                    color: 'txtblack.main', // default text color
                    backgroundColor:
                      project.priority === 'Low'
                        ? 'gray.200' // bg-gray-200
                        : project.priority === 'Medium'
                          ? 'plnng.main' // bg-plnng
                          : 'pjctblue.main', // bg-pjctblue
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
                      backgroundColor: 'blue', // equivalent to bg-blue-600
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


