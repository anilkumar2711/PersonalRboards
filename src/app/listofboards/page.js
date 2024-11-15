'use client';

import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid, Button, Tabs, Tab, Divider, IconButton } from '@mui/material';
import { AccessTime, People, Add, Search } from '@mui/icons-material';
import { List,LayoutPanelLeft,UserRound,AlignJustify,Flag,ArrowDownWideNarrow,ChartNoAxesCombined } from "lucide-react";
import { HiMenuAlt2 ,HiFlag } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { FaFlag } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
const sponsoredProjects = [
  { title: 'Task', description:'Collection of soil Samples from forest', dueDate: 'Tomorrow', priority: 'Urgent' },
  { title: 'Experiment', description:'Collection of soil Samples from forest', dueDate: 'Aug 9', priority: 'Normal' },
];

const dashboards = [
  { name: 'Dashboard 3', location: 'Location', dateViewed: 'Mar 15', dateUpdated: 'Jul 15', owner: 'DS',sharing: 'DS',},
  { name: 'Dashboard 2', location: 'Location', dateViewed: 'Mar 15', dateUpdated: 'May 15', owner: 'DS',sharing: 'DS',  },
  { name: 'Dashboard 1', location: 'Location', dateViewed: 'May 20', dateUpdated: 'Aug 20', owner: 'DS',sharing: 'DS',  },
];

const assignees = [
  { name: 'Divakar Sadam', tasks: 1, initials: 'DS', backgroundColor:'#6EA6FF' },
  { name: 'Vineela Nodagala', tasks: 1, initials: 'VN',backgroundColor:'#FDD13A' },
  { name: 'Ganesh M', tasks: 1, initials: 'GM' ,backgroundColor:'#008000'},
  { name: 'Mohan Bammidi', tasks: 1, initials: 'MB' ,backgroundColor:'#0C0B0BA6'},
  { name: 'Bhaskar P', tasks: 1, initials: 'BP', backgroundColor:'#F81111'},
];

function BoardsPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', p: 0.5, backgroundColor: 'white', minHeight: '100vh' }}>
      
      {/* Top Navigation Row */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, borderBottom: '1px solid #ddd', pb: 1 }}>
        {/* Tabs for List, Board, Dashboard */}
        <Box sx={{ display: 'flex',flexDirection:'row', gap: 2 }}>
         <Box>
          <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',color:'#B3ABAB'}}>
           <List/>
           <Button variant="text" sx={{ fontSize:'16px',fontWeight:'600',color: '#B3ABAB' }}>List</Button>
          </Box>
         </Box>
         <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',color:'#B3ABAB'}}>       
           <LayoutPanelLeft/>
           <Button variant="text" sx={{fontSize:'16px',fontWeight:'600', color: '#B3ABAB' }}>Board</Button>
          </Box>
        
         <Box sx={{display:'flex', flexDirection:'row', alignItems:'center',color:'#B3ABAB'}}>
           <ChartNoAxesCombined/>
           <Button variant="text" sx={{fontSize:'16px',fontWeight:'600', color:'#B3ABAB'}}>Dashboard</Button>
          </Box>
         
        </Box>
        {/* Top Filter/Search Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button sx={{ color: '#9266F5',fontSize:'14px',fontWeight:'600', backgroundColor:'#6EA6FF38'}}>Hide

          </Button>
          <Box sx={{ display: 'flex',fontSize:'14px',fontWeight:'400',color:"#5F6368", alignItems: 'center', gap: 1, border: '1px solid #ddd', borderRadius: '4px', padding: '4px 8px' }}>
            <Search />
            <input type="text" placeholder="Search tasks..." style={{ border: 'none', outline: 'none' }} />
          </Box>
          <Button  color="#FFFFFF" startIcon={<Add />} sx={{fontSize:'12px',fontWeight:'700', backgroundColor: '#6EA6FF', color: '#FFFFFF' }}>
            Add Task
          </Button>
        </Box>
      </Box>

      {/* Filter/Search Buttons Under Top Row */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box sx={{ display: 'flex', gap: 1 }}>
            <Box  sx={{display:'flex', flexDirection:'row', alignItems:'center',border: '1px solid #ddd',borderRadius: '20px',paddingRight:'4px',paddingLeft:'4px'}}>
                <UserRound/>
             <Button sx={{ color: '#9266F5' }}>Assignee</Button>
            </Box>
            <Box  sx={{display:'flex', flexDirection:'row', alignItems:'center',border: '1px solid #ddd',borderRadius: '20px',paddingRight:'4px',paddingLeft:'4px'}}>
                <Flag/>
             <Button sx={{ color: '#9266F5' }}>Priority</Button>
            </Box>
            <Box  sx={{display:'flex', flexDirection:'row', alignItems:'center',border: '1px solid #ddd',borderRadius: '20px',paddingRight:'4px',paddingLeft:'4px'}}>
                <ArrowDownWideNarrow/>
             <Button sx={{ color: '#9266F5' }}>Sort</Button>
            </Box>
        </Box>
      </Box>
      
      {/* Columns for Task Status */}
      <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'initial',}}>
      <Box sx={{ display: 'flex', gap: 2, }}>
        {/* To Do Column */}
        <Box sx={{ flex: 1, backgroundColor: '#D9D9D940', borderRadius: '8px', p: 1, border: '1px solid #ddd' }}>
         <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Box sx={{display:'flex', flexDirection:'row',alignItems:'center',borderRadius: '8px',backgroundColor: '#D9D9D9',paddingX:'5px',paddingY:'5px', border: '1px solid #ddd'}}>
            <img src="Ellipse02.png" alt="ecllipse"/>
          <Box sx={{paddingLeft:'8px'  }}> <Typography sx={{ fontSize:'14px',fontWeight:'600',color:"#B3ABAB",}}>
          TO DO </Typography></Box> 
          </Box>
         <Box sx={{fontSize:'14px',fontWeight:'600',color:"#B3ABAB",paddingLeft:'10px'}}>12</Box>
         </Box>
         
          {sponsoredProjects.map((project, index) => (
            <Card key={index} sx={{ my: 1, boxShadow: 'none', border: '1px solid #ddd', backgroundColor: '#ffffff' }}>
              <CardContent>
                <Box sx={{display:'flex',flexDirection:'row',color:'#5F6368'}}>
                  <img src="work_schedule.png" alt='clock'/>
                <Typography fontWeight="400" fontSize="12px" paddingLeft="10px" >
                {project.title}</Typography>
                </Box>
               
                  <Typography fontWeight="600" fontSize="14px" color='#5F6368' paddingTop='10px' >
                  {project.description}</Typography>

                  <Box sx={{paddingTop:'8px'}}><HiMenuAlt2  /></Box>
                  <Box sx={{paddingTop:'8px'}}><img src='Frame1.png' alt='profile'/></Box>
                <Box sx={{display:'flex', flexDirection:'row', paddingTop:'8px'}}>
                <Box><BiCalendar/></Box>
                <Typography  sx={{ color: '#9ca3af' }}> 
                  {project.dueDate}</Typography>
                  </Box>
                  <Box sx={{display:'flex', flexDirection:'row', paddingTop:'5px'}}> 
                    <FaFlag sx={{color:'#E70C0C'}}/>
                  <Typography  sx={{ fontWeight:"400", fontSize:"12px",color:'#5F6368', paddingLeft:'10px' }}>
                   {project.priority}
                   </Typography>
                  </Box>
                

              </CardContent>
            </Card>
          ))}
        </Box>
        
        {/* In Progress Column */}
        <Box sx={{ flex: 1, backgroundColor: '#C9DEFF24', borderRadius: '10px', p: 1, border: '1px solid #ddd' }}>
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Box sx={{display:'flex', flexDirection:'row',alignItems:'center',borderRadius: '10px',backgroundColor: '#6EA6FFB0',paddingX:'5px',paddingY:'5px', border: '1px solid #ddd'}}>
            <img src="Ellipse02.png" alt="ecllipse"/>
          <Box sx={{paddingLeft:'8px'  }}> <Typography sx={{ fontSize:'14px',fontWeight:'600',color:"#56565687",}}>
          IN PROGRESS </Typography></Box> 
          </Box>
         <Box sx={{fontSize:'14px',fontWeight:'600',color:"#B3ABAB",paddingLeft:'10px'}}>21</Box>
         </Box>
          <Card sx={{ my: 1, height: '80px', boxShadow: 'none', border: '1px dashed #ddd', backgroundColor: '#ffffff' }} />
        </Box>
        
        {/* Completed Column */}
        <Box sx={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: '8px', p: 1, border: '1px solid #ddd' }}>
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
          <Box sx={{display:'flex', flexDirection:'row',alignItems:'center',borderRadius: '8px',backgroundColor: '#24A24985',paddingX:'5px',paddingY:'5px', border: '1px solid #ddd'}}>
            <img src="Ellipse02.png" alt="ecllipse"/>
          <Box sx={{paddingLeft:'8px'  }}> <Typography sx={{ fontSize:'14px',fontWeight:'600',color:"#56565687",}}>
          COMPLETED</Typography></Box> 
          </Box>
         <Box sx={{fontSize:'14px',fontWeight:'600',color:"#B3ABAB",paddingLeft:'10px'}}>7</Box>
         </Box>
          <Card sx={{ my: 1, height: '80px', boxShadow: 'none', border: '1px dashed #ddd', backgroundColor: '#ffffff' }} />
        </Box>
        
        <Box sx={{flex:1,alignItems:'center'}}>
            Add Group
        </Box>
        {/* Assignees Sidebar */}
       
      </Box>
      <Box sx={{ width: '220px', backgroundColor: '#FFFFFF', borderRadius: '8px', p: 2, border: '1px solid #ddd' }}>
        <Box sx={{display:'flex',justifyContent:'end',alignItems:'center',color:'#D9D9D9'}}><IoIosCloseCircleOutline/></Box>
          <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Typography sx={{ fontSize:'16px',fontWeight:'700',color: '#B3ABAB' }}>Assignee</Typography>
          <Typography sx={{ fontSize:'12px',fontWeight:'400', color: '#9266F5' }}>Select all</Typography>
          </Box>
          
          <input type="text" placeholder="Search" style={{ width: '100%', padding: '8px', marginTop: '8px', backgroundColor:'#D9D9D945',marginBottom: '16px', borderRadius: '4px', border: '1px solid #ddd' }} />
          {assignees.map((assignee, index) => (
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Avatar sx={{ backgroundColor: '#3b82f6', borderRadius: '50px',border: '1px solid #ddd',fontSize:'12px',fontWeight:'700', }}>{assignee.initials}</Avatar> 
              <Box sx={{ ml: 1 }}>
                <Typography variant="body2" sx={{ color: '#5F6368',fontSize:'14px',fontWeight:'400', }}>{assignee.name}</Typography>
                <Typography variant="caption" sx={{ color: '#5F636847',fontSize:'12px',fontWeight:'400', }}>{assignee.tasks} tasks</Typography>
              </Box>
            </Box>
            <Box sx={{paddingTop:"5px",color:'#6EA6FF'}}>
            <FaCheckCircle  />
            </Box>
          </Box>
          ))}
        </Box>
      </Box>
      {/* Dashboard List with Tabs */}
      <Box sx={{ mt: 4 }}>
        <Tabs value={0} variant="scrollable" scrollButtons="auto">
          <Tab label="All" />
          <Tab label="My dashboards" />
          <Tab label="Shared" />
          <Tab label="Private" />
          <Tab label="Workspace" />
        </Tabs>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ display: 'flex', mb: 1, fontWeight: 'bold', color: '#6b7280' }}>
          <Box sx={{ flex: 2 }}>Name</Box>
          <Box sx={{ flex: 2 }}>Location</Box>
          <Box sx={{ flex: 1 }}>Date viewed</Box>
          <Box sx={{ flex: 1 }}>Date Updated</Box>
          <Box sx={{ flex: 1 }}>Owner</Box>
          <Box sx={{ flex: 1 }}>Sharing</Box>
        </Box>
        {dashboards.map((dashboard, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 1,
              borderBottom: '1px solid #ddd',
              '&:hover': { backgroundColor: '#f3f4f6' },
            }}
          >
            <Box sx={{ flex: 2, color: '#1f2937' }}>{dashboard.name}</Box>
            <Box sx={{ flex: 2, color: '#6b7280' }}>{dashboard.location}</Box>
            <Box sx={{ flex: 1, color: '#6b7280',alignItems:'center' }}>{dashboard.dateViewed}</Box>
            <Box sx={{ flex: 1, color: '#6b7280',alignItems:'center' }}>{dashboard.dateUpdated}</Box>
            <Box sx={{flex: 1,}}>
              <Box sx={{ display:'flex',alignItems:'center',fontSize:'12px',justifyContent:'center',width:'45px',height:'45px',fontWeight:'700',backgroundColor:'#6EA6FF',borderRadius: '50px',border: '1px solid #ddd',color:'#FFFFFF' }}>
              {dashboard.owner}
              </Box>
              </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display:'flex',alignItems:'center',fontSize:'12px',justifyContent:'center',width:'45px',height:'45px',fontWeight:'700',backgroundColor:'#6EA6FF',borderRadius: '50px',border: '1px solid #ddd',color:'#FFFFFF' }}>
              {dashboard.sharing}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default BoardsPage;
