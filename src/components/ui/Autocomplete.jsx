import React, { useState, useEffect } from 'react';
import { Autocomplete as MuiAutocomplete, TextField } from '@mui/material';
import { styled } from '@mui/system';

const StyledAutocomplete = styled(MuiAutocomplete)(({ theme }) => ({
  '&': {
    width:'100%'
  },
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
}));

const Autocomplete = React.forwardRef(({ 
  className = '', 
  options = [], 
  renderOption,
  value: propValue,
  onChange: propOnChange,
  inputValue: propInputValue,
  onInputChange: propOnInputChange,
  ...props 
}, ref) => {
  const [localValue, setLocalValue] = useState(propValue ?? null);
  const [localInputValue, setLocalInputValue] = useState(propInputValue ?? '');

  useEffect(() => {
    if (propValue !== undefined) {
      setLocalValue(propValue);
    }
  }, [propValue]);

  useEffect(() => {
    if (propInputValue !== undefined) {
      setLocalInputValue(propInputValue);
    }
  }, [propInputValue]);

  const handleChange = (event, newValue) => {
    let selectedValue = typeof newValue === "string" ? newValue : newValue.value;
    setLocalValue(selectedValue);
    propOnChange && propOnChange(event, selectedValue,newValue);
  };

  const handleInputChange = (event, newInputValue) => {
    setLocalInputValue(newInputValue);
    propOnInputChange && propOnInputChange(event, newInputValue);
  };

  const defaultRenderOption = (props, option) => (
    <li {...props}>
      {typeof option == "string"? option: option.label}
    </li>
  );

  return (
    <StyledAutocomplete
      options={options}
      renderInput={(params) => <TextField {...params} {...props} />}
      renderOption={renderOption || defaultRenderOption}
      value={localValue}
      onChange={handleChange}
      inputValue={localInputValue}
      onInputChange={handleInputChange}
      ref={ref}
      {...props}
    />
  );
});

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete;