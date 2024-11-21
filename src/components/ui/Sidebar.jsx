'use client';
import React, { useState, useEffect } from 'react';
import { Button } from './button';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import { useMixin } from "@/providers/mixin.provider";

function Sidebar(props) {
    const { service,sidemnu:sideMenuRoutes } = useMixin();
    const { icons } = service;
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    // UseEffect to ensure component mounts before using hooks
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Optionally, render a spinner or placeholder
    }

    return (
        <Box
            sx={{
                width: '16rem',
                backgroundColor: 'white',
                paddingY: 2,
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                {sideMenuRoutes.map((route) => {
                    const IconComponent = icons[route.icon]; // Dynamically fetch the icon
                    return (
                        <Link key={route.path} href={route.path} passHref>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: pathname === route.path ? 'text.primary' : 'text.secondary',
                                    backgroundColor: pathname === route.path ? 'grey.200' : 'transparent',
                                    paddingY: 1,
                                    paddingX: 2,
                                    borderRadius: 1,
                                    '&:hover': {
                                        backgroundColor: 'grey.200',
                                    },
                                    textDecoration: 'none',
                                }}
                            >
                                {IconComponent && <IconComponent sx={{ marginRight: 1 }} />}
                                <Typography sx={{ paddingLeft: '10px' }}>{route.label}</Typography>
                            </Box>
                        </Link>
                    );
                })}
            </Box>

            {/* Get Goals Button */}
            <Button
                sx={{
                    marginTop: 'auto',
                    backgroundColor: 'primary.main',
                    color: 'white',
                    marginX: 2,
                    '&:hover': {
                        backgroundColor: 'purple.600',
                    },
                }}
            >
                Get goals early
            </Button>
        </Box>
    );
}

export default Sidebar;
