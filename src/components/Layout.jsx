"use client"
import React from 'react';
import Sidebar from './ui/Sidebar';
import Header from './ui/Header';
import { Box } from '@mui/material';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Box
        sx={{
          display: 'flex',
          height: 'calc(100vh - 58px)', // Full viewport height
          backgroundColor: 'grey.100',
        }}
      >
        <Sidebar />
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Page content */}
          <Box
            sx={{
              flex: 1,
              p: 2,
              overflow: 'auto',
              backgroundColor: 'white',
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Layout;

