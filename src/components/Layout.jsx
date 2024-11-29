"use client"
import React, { useEffect } from 'react';
import Sidebar from './ui/Sidebar';
import Header from './ui/Header';
import { Box } from '@mui/material';
import Alert from './ui/Alert';
import { useMixin } from '@/providers/mixin.provider';

function Layout({ children }) {
  const { service } = useMixin();
  
  useEffect(()=>{
    service.methods.getLoggedUser();
  },[]);

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
              overflow: 'auto',
              backgroundColor: 'white',
            }}
          >
            {children}
          </Box>
          <Alert/>
        </Box>
      </Box>
    </>
  );
}

export default Layout;

