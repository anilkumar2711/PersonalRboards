'use client'
import React, { useState, useEffect } from 'react';
import { Button } from './button';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import { useMixin } from "@/providers/mixin.provider";

function Sidebar() {
    const { service } = useMixin();
    const { icons } = service;
    const router = useRouter();
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    // UseEffect to prevent useRouter from being used before the component is mounted
    useEffect(() => {
        setIsMounted(true);
        console.log({router,pathname});
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
                            color: pathname === '/' ? 'text.primary' : 'text.secondary',
                            backgroundColor: pathname === '/' ? 'grey.200' : 'transparent',
                            paddingY: 1,
                            paddingX: 2,
                            borderRadius: 1,
                            '&:hover': {
                                backgroundColor: 'grey.200',
                            },
                            textDecoration: 'none',
                        }}
                    >
                        <icons.HomeSidebar sx={{ marginRight: 1 }} />
                        <Typography sx={{ paddingLeft: '10px'}}>Home</Typography>
                    </Box>
                </Link>

                {/* Projects Link */}
                <Link href="/projects" passHref>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: pathname === '/projects' ? 'text.primary' : 'text.secondary',
                            backgroundColor: pathname === '/projects' ? 'grey.200' : 'transparent',
                            paddingY: 1,
                            paddingX: 2,
                            borderRadius: 1,
                            '&:hover': {
                                backgroundColor: 'grey.200',
                            },
                            textDecoration: 'none',
                        }}
                    >
                        <icons.ProjectSidebar  sx={{ marginRight: 1}} />
                        <Typography sx={{ paddingLeft: '10px'}}>Projects</Typography>
                    </Box>
                </Link>

                {/* Boards Link */}
                <Link href="/boards" passHref>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: pathname === '/boards' ? 'text.primary' : 'text.secondary',
                            backgroundColor: pathname === '/boards' ? 'grey.200' : 'transparent',
                            paddingY: 1,
                            paddingX: 2,
                            borderRadius: 1,
                            '&:hover': {
                                backgroundColor: 'grey.200',
                            },
                            textDecoration: 'none',
                        }}
                    >
                        <icons.BoardSidebar sx={{ marginRight: 1 }} />
                        <Typography sx={{ paddingLeft: '10px'}}>Boards</Typography>
                    </Box>
                </Link>
                <Link href="/schema" passHref>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: pathname === '/boards' ? 'text.primary' : 'text.secondary',
                            backgroundColor: pathname === '/boards' ? 'grey.200' : 'transparent',
                            paddingY: 1,
                            paddingX: 2,
                            borderRadius: 1,
                            '&:hover': {
                                backgroundColor: 'grey.200',
                            },
                            textDecoration: 'none',
                        }}
                    >
                        <icons.SchemaSidebar sx={{ marginRight: 1 }} />
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
