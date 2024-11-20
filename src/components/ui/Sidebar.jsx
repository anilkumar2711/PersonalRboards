'use client'
import React, { useState, useEffect } from 'react';
import { Button } from './button';
import { Home, PanelsLeftBottom, BriefcaseBusiness } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Box, Typography } from '@mui/material';

function Sidebar() {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    // UseEffect to prevent useRouter from being used before the component is mounted
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Or a loading spinner
    }  // Next.js hook to get the current route
    return (
        <Box sx={{
            width: '16rem',
            backgroundColor: 'white',
            paddingY: 2,
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid',
            borderColor: 'divider',
        }}>
            <Box sx={{ flexGrow: 1 }}>
                {/* Home Link */}
                <Link href="/" passHref>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: router.pathname === '/' ? 'text.primary' : 'text.secondary',
                            backgroundColor: router.pathname === '/' ? 'grey.200' : 'transparent',
                            paddingY: 1,
                            paddingX: 2,
                            borderRadius: 1,
                            '&:hover': {
                                backgroundColor: 'grey.200',
                            },
                            textDecoration: 'none',
                        }}
                    >
                        <Home sx={{ marginRight: 1, height: 20, width: 20, color: 'text.primary',  }} />
                        <Typography sx={{ paddingLeft: '10px'}}>Home</Typography>
                    </Box>
                </Link>

                {/* Projects Link */}
                <Link href="/projects" passHref>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: router.pathname === '/projects' ? 'text.primary' : 'text.secondary',
                            backgroundColor: router.pathname === '/projects' ? 'grey.200' : 'transparent',
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
                        <Typography sx={{ paddingLeft: '10px'}}>Projects</Typography>
                    </Box>
                </Link>

                {/* Boards Link */}
                <Link href="/boards" passHref>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: router.pathname === '/boards' ? 'text.primary' : 'text.secondary',
                            backgroundColor: router.pathname === '/boards' ? 'grey.200' : 'transparent',
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
                        <Typography sx={{ paddingLeft: '10px'}}>Boards</Typography>
                    </Box>
                </Link>
                <Link href="/schema" passHref>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: router.pathname === '/boards' ? 'text.primary' : 'text.secondary',
                            backgroundColor: router.pathname === '/boards' ? 'grey.200' : 'transparent',
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
                        <Typography sx={{ paddingLeft: '10px'}}>Schema</Typography>
                    </Box>
                </Link>
            </Box>

            {/* Get Goals Button */}
            <Button
                sx={{
                    marginTop: 'auto',
                    backgroundColor: 'primary.main',  // Adjust this if "golerly" is a custom color
                    color: 'white',
                    marginX: 2,
                    '&:hover': {
                        backgroundColor: 'purple.600', // Replace with MUI color or custom theme color
                    },
                }}
            >
                Get goals early
            </Button>
        </Box>
    );
}

export default Sidebar;
