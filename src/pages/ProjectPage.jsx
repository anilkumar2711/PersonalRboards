import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Button } from '../components/ui/button';
import { Search, ListFilter} from 'lucide-react';
import ProjectDetailsPanel from './project/ProjectDetailsPanel';

const projects = [
  {
    image:"biological.png",
    name: "Sample Project: Biology Research",
    status: "Planning",
    owner: "Dr. Divakar Sada...",
    dates: "July 3, 2024 to August 30",
    priority: "Medium",
    completion: 0
  },
  {
    image:"research.png",
    name: "Sample Project: Physics Research",
    status: "Done",
    owner: "Dr. Pavan Pindi",
    dates: "July 10, 2024 to July 30",
    priority: "High",
    completion: 100
  },
  {
    image:"market-research.png",
    name: "Sample Project: Education Resea...",
    status: "In progress",
    owner: "Dr. Aisha Khanna",
    dates: "August 1, 2024 to September 15",
    priority: "Low",
    completion: 50
  }
];

function ProjectPage() {
  const [isPanelOpen,setIsPanelOpen] = useState(false);
  const [selectedProject,setSelectedProject] = useState({});
  const handleProjectSelect = (project) =>{
   setSelectedProject(project);
   setIsPanelOpen(true);
  }
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-2 border-b flex flex-col">
        <h2 className="text-xl font-bold flex items-center text-txtblack ">
          <img src="rocket_launch.png" alt='rocket-launch' className="mr-4 h-5 w-5 " />
            Projects
        </h2>
        <div className='flex flex-row justify-between'>
         <div  className='flex flex-row items-center'>
           <img src="star 2.png" alt="star" className='mr-2 h-4 w-5'/>
           <h4 className='text-xl font-bold flex  text-actgrey'>Active</h4>
         </div>
         <div className='pr-2 flex flex-row justify-between items-center'>
          <Search className='mr-2 h-4 w-4 text-txtblack'/>
          <ListFilter className='mr-2 h-4 w-4 text-txtblack'/>
         <Button variant="outline" size="sm" className='bg-newblue text-white rounded'>New</Button> 
         </div>
        </div>
        
      </div>
    
      <ProjectDetailsPanel 
        isOpen={isPanelOpen} 
        onClose={() => setIsPanelOpen(false)}
        project={selectedProject}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" text-txtblack text-base pl-4">Project name</TableHead>
    
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
                <div className='flex flex-row items-center text-base font-semibold text-txtblack'>
                  <img src={project.image} className="h-4 w-4 mr-2" alt={project.name} />
                  {project.name}
                 <button><img src="button_image.png" className='ml-2' onClick={()=>handleProjectSelect(project)}/></button> 
                </div>
              </TableCell>
              {/* <TableCell>
                <div className='flex flex-row items-center text-base font-semibold text-txtblack '><img src="biological.png" className="h-4 w-4 mr-2"/>{project.name}</div></TableCell> */}
              <TableCell>
                  
            
                     <div className={`flex flex-row items-center px-2 py-1 rounded-full text-xs font-semibold
                     ${project.status === 'Planning' ? 'bg-plnng text-txtblack' :
                      project.status === 'In progress' ? 'bg-inprog text-txtblack' :
                      'bg-doneblu text-txtblack'}`}>
                        <img src="Ellipse.png" alt="dot" className='h-2 w-2 mr-2 items-center'/>
                     {project.status}
                     </div>
                
              </TableCell>
              <TableCell>{project.owner}</TableCell>
              <TableCell>{project.dates}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-xs font-semibold
                  ${project.priority === 'Low' ? 'bg-gray-200 text-txtblack' :
                    project.priority === 'Medium' ? 'bg-plnng text-txtblack' :
                      'bg-pjctblue text-txtblack'}`}>
                  {project.priority}
                </span>
              </TableCell>
              <TableCell>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${project.completion}%` }}
                  ></div>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ProjectPage;


