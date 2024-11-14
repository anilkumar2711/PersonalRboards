"use client";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { Home, PanelsLeftBottom, BriefcaseBusiness } from 'lucide-react';
import { Button } from './button';

function Sidebar() {
//   const router = useRouter();
//   const { pathname } = router; // Get the current path
  const pathname = "";

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
        {/* Home Link */}
        <Box
          component={Link}
          href="/"
          passHref
          sx={{
            display: 'flex',
            gap: 2,
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
          <Home sx={{ marginRight: 1, height: 20, width: 20, color: 'text.primary' }} />
          <Typography>Home</Typography>
        </Box>

        {/* Projects Link */}
        <Box
          component={Link}
          href="/projects"
          passHref
          sx={{
            display: 'flex',
            gap: 2,
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
          <BriefcaseBusiness sx={{ marginRight: 1, height: 20, width: 20, color: 'text.primary' }} />
          <Typography>Projects</Typography>
        </Box>

        {/* Boards Link */}
        <Box
          component="a"
          href="javascript:void(0)"
          sx={{
            display: 'flex',
            gap: 2,
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

      {/* Button */}
      <Button
        sx={{
          fontSize: '12px',
          fontWeight: '700',
          color: 'white',
          margin:2
        }}
      >
        Get goals early
      </Button>
    </Box>
  );
}

export default Sidebar;