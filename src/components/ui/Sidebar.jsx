import React from 'react';
import { Button } from './button';
import { Home, PanelsLeftBottom, BriefcaseBusiness } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function Sidebar() {
    const location = useLocation();
    return (<Box sx={{
        // width: '16rem', // 64 in Tailwind
        backgroundColor: 'white',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: 'divider',
    }}>
        <Box sx={{ flexGrow: 1 }}>
            <Box
                component={Link}
                to="/"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: location.pathname === '/' ? 'text.primary' : 'text.secondary',
                    backgroundColor: location.pathname === '/' ? 'grey.200' : 'transparent',
                    paddingY: 1,
                    paddingX: 2,
                    borderRadius: 1,
                    '&:hover': {
                        backgroundColor: 'grey.200',
                    },
                    textDecoration: 'none',
                }}
            >
                <Home sx={{ marginRight: 1, height: 20, width: 20, color: 'text.primary' }} />
                <Typography>Home</Typography>
            </Box>

            <Box
                component={Link}
                to="/projects"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: location.pathname === '/projects' ? 'text.primary' : 'text.secondary',
                    backgroundColor: location.pathname === '/projects' ? 'grey.200' : 'transparent',
                    paddingY: 1,
                    paddingX: 2,
                    borderRadius: 1,
                    '&:hover': {
                        backgroundColor: 'grey.200',
                    },
                    textDecoration: 'none',
                }}
            >
                <BriefcaseBusiness sx={{ marginRight: 1, height: 20, width: 20, color: 'text.primary' }} />
                <Typography>Projects</Typography>
            </Box>

            <Box
                component="a"
                href="javascript:void(0)"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'text.secondary',
                    paddingY: 1,
                    paddingX: 2,
                    borderRadius: 1,
                    '&:hover': {
                        backgroundColor: 'grey.200',
                    },
                    textDecoration: 'none',
                }}
            >
                <PanelsLeftBottom sx={{ marginRight: 1, height: 20, width: 20, color: 'text.primary' }} />
                <Typography>Boards</Typography>
            </Box>
        </Box>
        <Button
            sx={{
                marginTop: 'auto',
                backgroundColor: 'primary.main',  // Adjust this if "golerly" is a custom color
                color: 'white',
                '&:hover': {
                    backgroundColor: 'purple.600', // Replace with MUI color or custom theme color
                },
            }}
        >
            Get goals early
        </Button>
    </Box>)
}

export default Sidebar;