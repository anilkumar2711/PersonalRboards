"use client"
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ListFilter, } from 'lucide-react';
import ProjectDetailsPanel from './ProjectDetailsPanel';
import { Box, Typography } from '@mui/material';
import { MdDataUsage, MdPermIdentity, MdOutlineEventNote, MdOutlineAssistantPhoto, MdIncompleteCircle } from "react-icons/md";
import { useMixin } from '@/providers/mixin.provider';
import DynamicTable from '@/components/ui/DynamicTable';
import { Input } from '@/components/ui/Input';

const ogprojects = [
  {
    image: "biological.png",
    name: "Sample Project: Biology Research",
    status: "TO DO",
    owner: "Dr. Divakar Sada...",
    dates: "July 3, 2024 to August 30",
    priority: "MEDIUM",
    completion: 100
  },
  {
    image: "research.png",
    name: "Sample Project: Physics Research",
    status: "IN PROGRESS",
    owner: "Dr. Pavan Pindi",
    dates: "July 10, 2024 to July 30",
    priority: "HIGH",
    completion: 20
  },
  {
    image: "market-research.png",
    name: "Sample Project: Education Resea...",
    status: "COMPLETED",
    owner: "Dr. Aisha Khanna",
    dates: "August 1, 2024 to September 15",
    priority: "LOW",
    completion: 50
  }
];

function ProjectPage(props) {
  const { $store, setStore, setComponent, api, service } = useMixin();
  const node = setComponent("ProjectPage", { props });
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [projects, setProjects] = useState([]);
  node.projects = projects;
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setIsPanelOpen(true);
  }
  useEffect(() => {
    api.get("/projects").then(({ data }) => {
      setProjects(data);
    });
  }, []);

  const projectColumns = ["name", "status", "owner", "startDate", "priority", "completion"];

  const projectColumnFields = {
    "name": {
      headerIcon: "",
      label: "Project Name",
      render : ({ value,row }) => (
        <Box sx={{
            fontWeight:'700',
            paddingLeft:'10px',
            display:'flex'
        }}>
            <span style={{flexGrow:1}}>{value}</span>
            <span onClick={()=>handleProjectSelect(row)} style={{cursor:'pointer',marginRight:'10px'}}>
              <Input value={value} type="switch" readonly={true} trueLabel={"OPEN"} falseLabel={"CLOSE"} />
            </span>
        </Box>
      
      )
    },
    "status": {
      headerIcon: <MdDataUsage/>,
      label: "Status",
      render: ({ value }) => (
        <Box
            variant="secondary"
            sx={{
                backgroundColor:  $store.statusOptions?.find(o => o.value == value)?.color,
                padding: '4px 15px',
                borderRadius: '15px',
                alignItems: 'center',
                display: 'flex',
                gap: '5px',
                maxWidth: 'fit-content'
            }}
        >
            <span style={{ width: '15px', height: '15px', borderRadius: '15px', backgroundColor: '#8c8c8c', display: 'inline-block' }}></span>
            <span>{value}</span>
        </Box>
    )
    },
    "owner": {
      headerIcon: <MdPermIdentity/>,
      label: "Owner",
      render: ({value}) =>{
        if (value) {
          return (
              <div>
                {value.full_name || ""}
              </div>
            )
      }
    }
  },
    "startDate": {
      headerIcon: <MdOutlineEventNote/>,
      label: "Dates",
      render: ({value,row})=>(<div className='vmiddle' style={{gap:'5px'}} >
        <span>{service.date(value).toHumanString()}</span>
        <span>To</span>
        <span>{service.date(row.endDate).toHumanString()}</span>
      </div>)
    },
    "priority": {
      headerIcon: <MdOutlineAssistantPhoto/>,
      label: "Priority",
      render: ({ value }) => (
        <Box
            variant="secondary"
            sx={{
                backgroundColor: $store.taskPriorityOptions?.find(o => o.value == value)?.color,
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
    "completion":{
      headerIcon: <MdIncompleteCircle/>,
      label: "Completion",
      render: ({value})=>(<Input name="completion" type="progress" value={value} />)
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        borderRadius: 2,
        boxShadow: 3,
        margin:2
      }}
    >

      <ProjectDetailsPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        project={selectedProject}
      />
      <Box sx={{ padding: 1, paddingTop: '50px' }} >
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
            sx={{ mr: 1, height: 20, width: 20, fontSize: "20px", fontWeight: "700" }}
          />
          Projects
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '5px 10px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Box
            component="img"
            src="star 2.png"
            alt="star"
            sx={{ mr: 1, height: 16, width: 20 }}
          />
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: '700', color: '#B3ABAB' }}>
            Active
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            pr: 2,
          }}
        >
          <Search sx={{ mr: 1, height: 16, width: 16, color: '#565656', }} />
          <Box sx={{ pr: 1, pl: 1 }}><ListFilter sx={{ mr: 1, height: 16, width: 16, color: '#565656', paddingLeft: '8px' }} /></Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mt: 1, width: '100%' }} >
        <DynamicTable
          data={projects}
          columns={projectColumns}
          fields={projectColumnFields}
        >
        </DynamicTable>
      </Box>
    </Box>
  );
}

export default ProjectPage;


