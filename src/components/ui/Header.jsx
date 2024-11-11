import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import Dropdown from './Dropdown';
import { Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

function Header() {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/newproject');
  };

  return (
    <Box
      sx={{
        p: 1,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#EDF4FF',
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Box sx={{ pl: 6 }}>
        <img src="Group 152.png" alt="rboard" />
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '50%',
          }}
        >
          <Input 
            type="text" 
            placeholder="Search..." 
            sx={{
               paddingLeft: '10px',
              // paddingRight: '16px',
              // paddingTop: '8px',
              // paddingBottom: '8px',
              borderRadius: '9999px', // full rounding
              width: '100%',
              boxSizing: 'border-box',
            }}
          />
          <Box
            component="svg"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '20px',
              width: '20px',
              color: 'gray',
            }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2, // spacing between child elements
        }}
      >
        <Button
          onClick={handleButtonClick}
          sx={{
            backgroundColor: '#6EA6FF',
            fontSize: '12px',
            fontWeight: '700',
            color: 'white',
          }}
        >
          Create Project
        </Button>
        <Dropdown
          options={options}
          optionTag="a"
          hasDropIcon={false}
          placeholder={
            <Settings
              sx={{
                height: 20,
                width: 20,
              }}
            />
          }
        />
      </Box>
    </Box>
  );
}

export default Header;