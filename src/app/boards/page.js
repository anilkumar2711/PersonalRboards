'use client'
import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Grid, Button, Tabs, Tab, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MdClear } from "react-icons/md";
import { useRouter } from 'next/navigation';

// Sample data for sponsored projects, Ph.D projects, and dashboards
const sponsoredProjects = [
  { title: 'Department of Science & Tech.', endDate: '2nd March 2025', amount: '$5000' },
  { title: 'Department of Biotechnology', endDate: '2nd March 2025', amount: '$5000' },
  { title: 'University Grants Commission', endDate: '2nd March 2025', amount: '$5000' },
];

const phdProjects = [
  { title: 'Isolation and Identification of bacterial strains in the forest soils of Bhadrachalam', owner: 'Jéssica Texiera', duration: '3 Years 2 months' },
  { title: 'Isolation and Identification of bacterial strains in the forest soils of Bhadrachalam', owner: 'Jéssica Texiera', duration: '3 Years 2 months' },
  { title: 'Isolation and Identification of bacterial strains in the forest soils of Bhadrachalam', owner: 'Jéssica Texiera', duration: '3 Years 2 months' },
];

const dashboards = [
  { name: 'Dashboard 3', location: 'Location', dateViewed: 'Mar 15', dateUpdated: 'Jul 15', owner: 'DS',sharing:'DS' },
  { name: 'Dashboard 2', location: 'Location', dateViewed: 'Mar 15', dateUpdated: 'May 15', owner: 'DS',sharing:'DS' },
  { name: 'Dashboard 1', location: 'Location', dateViewed: 'May 20', dateUpdated: 'Aug 20', owner: 'DS',sharing:'DS' },
];

function BoardsPage() {
  const router = useRouter();
  
  const handleCardClick = () => {
    // Navigate to the desired route, e.g., `/projects/[id]`
    router.push(`/listofboards`); // You can replace 'project.id' with any dynamic value
  };

  return (
    <Box sx={{}}>
      {/* Sponsored Projects Section */}
      <Box sx={{}}>
        <Box sx={{ backgroundColor: '#EDF4FF47', border: '1px solid #D9D9D9', borderRadius: '10px', paddingBottom: '10px', paddingRight: '10px', paddingLeft: '10px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: '10px', paddingLeft: '10px', paddingTop: '10px' }}>
            <Box sx={{}}>
              <Typography color='#B3ABAB' fontWeight='600' fontSize='14px' paddingBottom='10px' >Sponsored projects</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: '#B3ABAB', fontWeight: '400', fontSize: '12px' }}>
              <Box sx={{ paddingRight: '10px' }}> View all</Box>
              <Box sx={{}}>
                <MdClear />
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, }}>
            {sponsoredProjects.map((project, index) => (
              <Card
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  // p: 2,
                  flex: '1 1 0',
                  border: '1px solid #E0E0E0',
                  boxShadow: 'none',
                }}
              >
                <CardContent sx={{}}>
                  <Box sx={{}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', color: '#B3ABAB', fontWeight: '400', fontSize: '12px' }}>
                      <img src="dashboards_science.png" alt='' />
                      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'initial', paddingBottom: '5px' }}>
                        <Typography fontWeight="400" paddingLeft='10px' fontSize='12px'>{project.title}</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', color: '#6EA6FF', paddingTop: '10px' }}>
                          <Typography fontWeight="400" paddingLeft='10px' fontSize='12px' color='#6EA6FF'>Ends by {project.endDate}</Typography>
                          <Typography fontWeight="400" paddingLeft='10px' fontSize='12px' color='#6EA6FF'>{project.amount}</Typography>
                        </Box>

                      </Box>
                    </Box>

                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      {/* Ph.D Projects Section */}
      <Box sx={{ mb: 4, pt: 4 }}>
        <Typography fontWeight="600" fontSize='14px' color='#B3ABAB'>Ph.D Projects</Typography>
        <Grid container spacing={2} sx={{ mt: 2 }}>
          {phdProjects.map((project, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card sx={{ border: '1px solid #D9D9D9', borderRadius: '15px', boxShadow: 'none', padding: '10px' }}
               onClick={handleCardClick}>
                <Box
                  component="img"
                  src="project_01.png" // Replace with actual image URL
                  alt="Project"
                  sx={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: '15px' }}
                />
                <CardContent>
                  <Typography fontWeight="600" fontSize='12px' color='#B3ABAB' sx={{ mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', }}>
                      <img src="profile_image.png" alt='profileimage' sx={{ width: 35, height: 35,}} />
                      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'initial',paddingLeft:'10px' }}>
                        <Box>
                          <Typography fontWeight="500" fontSize='12px' color='#B3ABAB'>{project.owner}</Typography>
                        </Box>
                        <Box>
                          <Typography fontWeight="400" fontSize='12px' color='#24A249'>{project.duration}</Typography>
                        </Box>
                      </Box>
                    </Box>

                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
