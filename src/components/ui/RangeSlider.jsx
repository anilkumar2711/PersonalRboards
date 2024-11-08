import React, { useEffect, useState } from 'react';
import { Slider, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: theme.palette?.primary?.main ?? '#1976d2',
  height: 3,
  '& .MuiSlider-thumb': {
    height: 14,
    width: 14,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'inherit',
    },
    '&:before': {
      display: 'none',
    },
  },
  '& .MuiSlider-valueLabel': {
    lineHeight: 1.2,
    fontSize: 12,
    background: 'unset',
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: '50% 50% 50% 0',
    backgroundColor: theme.palette?.primary?.main ?? '#1976d2',
    transformOrigin: 'bottom left',
    transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
    '&:before': { display: 'none' },
    '&.MuiSlider-valueLabelOpen': {
      transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    },
    '& > *': {
      transform: 'rotate(45deg)',
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette?.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette?.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

const ValueTag = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  padding: '2px 6px',
  borderRadius: '4px',
  backgroundColor: theme.palette?.primary?.main ?? '#1976d2',
  color: theme.palette?.primary?.contrastText ?? '#ffffff',
  fontSize: '0.75rem',
  fontWeight: 'bold',
  marginTop: '8px',
}));

const RangeSlider = React.forwardRef(({ 
  className = '', 
  label,
  min = 0,
  max = 100,
  step = 1,
  value: defaultValue = [min, max],
  onChange,
  ...props 
}, ref) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange && onChange(event, newValue);
  };

  const calculatePercentage = (val) => {
    return Math.round(((val - min) / (max - min)) * 100);
  };

  return (
    <Box className={className} style={{width: '100%'}}>
      {label && (
        <Typography id="range-slider" gutterBottom>
          {label}
        </Typography>
      )}
      <StyledSlider
        ref={ref}
        min={min}
        max={max}
        step={step}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        value={value}
        onChange={handleChange}
        {...props}
      />
      <Box display="flex" justifyContent="space-between">
          {min !=value[0] &&  <ValueTag>{calculatePercentage(value[0])}%</ValueTag> }
          {max !=value[1] &&  <ValueTag>{calculatePercentage(value[1])}%</ValueTag> }
      </Box>
    </Box>
  );
});

RangeSlider.displayName = 'RangeSlider';

export default RangeSlider;