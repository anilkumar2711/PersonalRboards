"use client";
import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import Autocomplete from './Autocomplete';
import InputTags from "./InputTags";
import DateRangePicker from './DateRangePicker';
import Textarea from './Textarea';
import RangeSlider from './RangeSlider';
import DatePicker from "./DatePicker";
import DateStartEndPicker from "./DateStartEndPicker";
import ProgressInput from "./ProgressInput";
import Switch from './Switch';
import clsx from 'clsx';

const StyledTextField = styled(TextField,{
  shouldForwardProp: (prop) => !["icon"].includes(prop) // Prevent `icon` from being forwarded to the DOM
})(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: '35px',
    borderRadius: theme.shape?.borderRadius ?? 4,
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
  '& .MuiFormLabel-root.MuiFormLabel-filled': {
    outline:"none"
  },
}));

const Input = React.forwardRef(({ classNameProp = '', type = 'text', ...props }, ref) => {
  const [value, setValue] = useState(props.value);

  const handleChange = (e) => {
    setValue(e.target.value);
    props.onChange && props.onChange(e.target.value,e);
  };

  useEffect(() => {
    value!=props.value && setValue(props.value);
  }, [props.value]);

  console.log("rerender",props.name,props.value);

  const className = clsx('AppInput', classNameProp);

  if (type === 'search') {
    return <Autocomplete {...props} className={className} ref={ref} />;
  }

  if (type === 'tags') {
    return <InputTags {...props} className={className} ref={ref} />;
  }

  if (type === 'daterange') {
    return <DateRangePicker {...props} className={className} ref={ref} />;
  }
  if (type === 'datestartend') {
    return <DateStartEndPicker {...props} className={className} ref={ref} />;
  }
  if (type === 'date'){
    return <DatePicker {...props} className={className} ref={ref} />;
  }

  if (type === 'textarea') {
    return <Textarea {...props} className={className} ref={ref} />;
  }

  if (type === 'range') {
    return <RangeSlider {...props} className={className} ref={ref} />;
  }

  if(type === 'progress') {
    return <ProgressInput {...props} className={className} ref={ref} />;
  }

  if(type === 'switch') {
    return <Switch {...props} className={className} ref={ref} />;
  }

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
      className={className}
      onChange={(...args)=>handleChange(...args)}
      value={value}
      type={type}
    />
  );
});

Input.displayName = 'Input';

export { Input };