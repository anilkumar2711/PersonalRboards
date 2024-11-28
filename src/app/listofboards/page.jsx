'use client';

import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid, Button, Tabs, Tab, Divider, IconButton } from '@mui/material';
import { AccessTime, People, Add, Search } from '@mui/icons-material';
import { List,LayoutPanelLeft,UserRound,AlignJustify,Flag,ArrowDownWideNarrow,ChartNoAxesCombined,CircleChevronDown } from "lucide-react";
import { HiMenuAlt2 ,HiFlag } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";
import { FaFlag } from "react-icons/fa";
import { IoIosCloseCircleOutline} from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import PopupModel from '@/components/ui/PopupModel';
import NewTask from './NewTask';
import BoardColumns from './BoardColumns';
import NewColumn from './NewColumn';
import { useMixin } from '@/providers/mixin.provider';
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

function ListOfBoards() {
  const { $emit,setComponent } = useMixin();
  const node = setComponent("ListOfBoards");
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
          <Button onClick={()=>$emit.trigger("openTaskCreate")}  color="#FFFFFF" startIcon={<Add />} sx={{fontSize:'12px',fontWeight:'700', backgroundColor: '#6EA6FF', color: '#FFFFFF' }}>
            Add Task
          </Button>
          <Box sx={{ display:'flex',color:'#D9D9D9',alignItems:'center'}}><CircleChevronDown /></Box>
        </Box>
      </Box>

      {/* Filter/Search Buttons Under Top Row */}
      
      <BoardColumns></BoardColumns>
      {/* Dashboard List with Tabs */}
      {/* <Box sx={{ mt: 4 }}>
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
      </Box> */}
      <NewColumn></NewColumn>
      <NewTask></NewTask>
    </Box>
  );
}

export default ListOfBoards;
