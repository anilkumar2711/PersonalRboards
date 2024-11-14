// 'use client';

// import React from 'react';
// import { Box, Typography, Card, CardContent, Avatar, Grid, Button, Tabs, Tab, Divider, IconButton } from '@mui/material';
// import { AccessTime, People, Add, Search } from '@mui/icons-material';

// const sponsoredProjects = [
//   { title: 'Task Collection of soil Samples from forest', dueDate: 'Tomorrow', priority: 'Urgent' },
//   { title: 'Experiment Collection of soil Samples from forest', dueDate: 'Aug 9', priority: 'Normal' },
// ];

// const dashboards = [
//   { name: 'Dashboard 3', location: 'Location', dateViewed: 'Mar 15', dateUpdated: 'Jul 15', owner: 'DS' },
//   { name: 'Dashboard 2', location: 'Location', dateViewed: 'Mar 15', dateUpdated: 'May 15', owner: 'DS' },
//   { name: 'Dashboard 1', location: 'Location', dateViewed: 'May 20', dateUpdated: 'Aug 20', owner: 'DS' },
// ];

// const assignees = [
//   { name: 'Divakar Sadam', tasks: 1, initials: 'DS' },
//   { name: 'Vineela Nodagala', tasks: 1, initials: 'VN' },
//   { name: 'Ganesh M', tasks: 1, initials: 'GM' },
//   { name: 'Mohan Bammidi', tasks: 1, initials: 'MB' },
//   { name: 'Bhaskar P', tasks: 1, initials: 'BP' },
// ];

// function BoardsPage() {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, backgroundColor: '#f4f4f8', minHeight: '100vh' }}>
      
//       {/* Top Navigation Row */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, borderBottom: '1px solid #ddd', pb: 1 }}>
//         {/* Tabs for List, Board, Dashboard */}
//         <Box sx={{ display: 'flex', gap: 2 }}>
//           <Button variant="text" sx={{ color: '#333' }}>List</Button>
//           <Button variant="text" sx={{ color: '#333' }}>Board</Button>
//           <Button variant="text" sx={{ color: '#333' }}>Dashboard</Button>
//         </Box>
        
//         {/* Top Filter/Search Section */}
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <Button variant="text" sx={{ color: '#333' }}>Hide</Button>
//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, border: '1px solid #ddd', borderRadius: '4px', padding: '4px 8px' }}>
//             <Search />
//             <input type="text" placeholder="Search tasks..." style={{ border: 'none', outline: 'none' }} />
//           </Box>
//           <Button variant="contained" color="primary" startIcon={<Add />} sx={{ backgroundColor: '#3b82f6', color: '#fff' }}>
//             Add Task
//           </Button>
//         </Box>
//       </Box>

//       {/* Filter/Search Buttons Under Top Row */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//         <Box sx={{ display: 'flex', gap: 1 }}>
//           <Button variant="outlined" sx={{ borderColor: '#ddd', color: '#333' }}>Assignee</Button>
//           <Button variant="outlined" sx={{ borderColor: '#ddd', color: '#333' }}>Priority</Button>
//           <Button variant="outlined" sx={{ borderColor: '#ddd', color: '#333' }}>Sort</Button>
//         </Box>
//       </Box>
      
//       {/* Columns for Task Status */}
//       <Box sx={{ display: 'flex', gap: 2 }}>
//         {/* To Do Column */}
//         <Box sx={{ flex: 1, backgroundColor: '#f1f5f9', borderRadius: '8px', p: 1, border: '1px solid #ddd' }}>
//           <Typography variant="h6" sx={{ color: '#1f2937', fontWeight: 'bold' }}>TO DO (12)</Typography>
//           {sponsoredProjects.map((project, index) => (
//             <Card key={index} sx={{ my: 1, boxShadow: 'none', border: '1px solid #ddd', backgroundColor: '#ffffff' }}>
//               <CardContent>
//                 <Typography variant="body1" fontWeight="bold">{project.title}</Typography>
//                 <Typography variant="body2" sx={{ color: '#9ca3af' }}>Due: {project.dueDate}</Typography>
//                 <Typography variant="body2" sx={{ color: project.priority === 'Urgent' ? '#dc2626' : '#10b981' }}>
//                   {project.priority}
//                 </Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </Box>
        
//         {/* In Progress Column */}
//         <Box sx={{ flex: 1, backgroundColor: '#f1f5f9', borderRadius: '8px', p: 1, border: '1px solid #ddd' }}>
//           <Typography variant="h6" sx={{ color: '#1f2937', fontWeight: 'bold' }}>IN PROGRESS (21)</Typography>
//           <Card sx={{ my: 1, height: '80px', boxShadow: 'none', border: '1px dashed #ddd', backgroundColor: '#ffffff' }} />
//         </Box>
        
//         {/* Completed Column */}
//         <Box sx={{ flex: 1, backgroundColor: '#f1f5f9', borderRadius: '8px', p: 1, border: '1px solid #ddd' }}>
//           <Typography variant="h6" sx={{ color: '#1f2937', fontWeight: 'bold' }}>COMPLETED (7)</Typography>
//           <Card sx={{ my: 1, height: '80px', boxShadow: 'none', border: '1px dashed #ddd', backgroundColor: '#ffffff' }} />
//         </Box>
        
//         {/* Assignees Sidebar */}
//         <Box sx={{ width: '220px', backgroundColor: '#f9fafb', borderRadius: '8px', p: 2, border: '1px solid #ddd' }}>
//           <Typography variant="h6" sx={{ color: '#1f2937' }}>Assignee</Typography>
//           <input type="text" placeholder="Search" style={{ width: '100%', padding: '8px', marginTop: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ddd' }} />
//           {assignees.map((assignee, index) => (
//             <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//               <Avatar sx={{ backgroundColor: '#3b82f6' }}>{assignee.initials}</Avatar>
//               <Box sx={{ ml: 1 }}>
//                 <Typography variant="body2" sx={{ color: '#1f2937' }}>{assignee.name}</Typography>
//                 <Typography variant="caption" sx={{ color: '#6b7280' }}>{assignee.tasks} tasks</Typography>
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>
      
//       {/* Dashboard List with Tabs */}
//       <Box sx={{ mt: 4 }}>
//         <Tabs value={0} variant="scrollable" scrollButtons="auto">
//           <Tab label="All" />
//           <Tab label="My dashboards" />
//           <Tab label="Shared" />
//           <Tab label="Private" />
//           <Tab label="Workspace" />
//         </Tabs>
//         <Divider sx={{ mb: 2 }} />
//         <Box sx={{ display: 'flex', mb: 1, fontWeight: 'bold', color: '#6b7280' }}>
//           <Box sx={{ flex: 2 }}>Name</Box>
//           <Box sx={{ flex: 2 }}>Location</Box>
//           <Box sx={{ flex: 1 }}>Date viewed</Box>
//           <Box sx={{ flex: 1 }}>Date Updated</Box>
//           <Box sx={{ flex: 1 }}>Owner</Box>
//           <Box sx={{ flex: 1 }}>Sharing</Box>
//         </Box>
//         {dashboards.map((dashboard, index) => (
//           <Box
//             key={index}
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               p: 1,
//               borderBottom: '1px solid #ddd',
//               '&:hover': { backgroundColor: '#f3f4f6' },
//             }}
//           >
//             <Box sx={{ flex: 2, color: '#1f2937' }}>{dashboard.name}</Box>
//             <Box sx={{ flex: 2, color: '#6b7280' }}>{dashboard.location}</Box>
//             <Box sx={{ flex: 1, color: '#6b7280' }}>{dashboard.dateViewed}</Box>
//             <Box sx={{ flex: 1, color: '#6b7280' }}>{dashboard.dateUpdated}</Box>
//             <Box sx={{ flex: 1, color: '#1f2937' }}>{dashboard.owner}</Box>
//             <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
//               <People color="primary" />
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }

// export default BoardsPage;
