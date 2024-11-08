import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: '40px',
    borderRadius: theme.shape?.borderRadius ?? 4,
    backgroundColor: theme.palette?.background?.paper ?? '#fff',
    transition: theme.transitions?.create?.([
      'border-color',
      'background-color',
      'box-shadow',
    ], {
      duration: theme.transitions?.duration?.short ?? 250,
    }),
    '&:hover': {
      backgroundColor: theme.palette?.action?.hover ?? 'rgba(0, 0, 0, 0.04)',
    },
    '&.Mui-focused': {
      backgroundColor: theme.palette?.background?.paper ?? '#fff',
      boxShadow: `0 0 0 2px ${theme.palette?.primary?.main ?? '#1976d2'}`,
    },
  },
  '& .MuiInputBase-input': {
    padding: '10px 12px',
    fontSize: theme.typography?.fontSize ?? '0.875rem',
    '&::placeholder': {
      color: theme.palette?.text?.secondary ?? 'rgba(0, 0, 0, 0.6)',
      opacity: '1',
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette?.divider ?? 'rgba(0, 0, 0, 0.23)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette?.text?.primary ?? 'rgba(0, 0, 0, 0.87)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette?.primary?.main ?? '#1976d2',
    borderWidth: '2px',
  },
  '&.Mui-disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette?.action?.disabledBackground ?? 'rgba(0, 0, 0, 0.12)',
    },
  },
}));

const Input = React.forwardRef(({ className = '', ...props }, ref) => {
  const [value,setValue] = useState(props.value);

  useEffect(()=>{
    setValue(props.value);
  },[props.value]);
  
  console.log(props.value,value);
  return (
    <StyledTextField
      variant="outlined"
      fullWidth
      inputRef={ref}
      InputProps={{
        classes: {
          root: className,
        },
      }}
      {...props}
      onChange={(e)=>setValue(e.target.value)}
      value={value}
    />
  );
});

Input.displayName = 'Input';

export { Input };