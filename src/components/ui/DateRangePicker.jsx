import React, { useState } from 'react';
import { DateRangePicker as MuiDateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { TextField, Box } from '@mui/material';
import { styled } from '@mui/system';

const StyledDateRangePicker = styled(MuiDateRangePicker)(({ theme }) => {
  const borderRadius = theme?.shape?.borderRadius || 4;
  const backgroundColor = theme?.palette?.background?.paper || '#fff';
  const transitionDuration = theme?.transitions?.duration?.short || 250;
  const hoverColor = theme?.palette?.action?.hover || 'rgba(0, 0, 0, 0.04)';
  const primaryColor = theme?.palette?.primary?.main || '#1976d2';
  const textColor = theme?.palette?.text?.secondary || 'rgba(0, 0, 0, 0.6)';
  const dividerColor = theme?.palette?.divider || 'rgba(0, 0, 0, 0.23)';
  const primaryTextColor = theme?.palette?.text?.primary || 'rgba(0, 0, 0, 0.87)';

  return {
    '&': {
        width:'100%'
    },
    '& .MuiInputBase-root': {
      height: '35px',
      borderRadius: borderRadius,
      backgroundColor: backgroundColor,
      transition: theme?.transitions?.create(
        ['border-color', 'background-color', 'box-shadow'],
        {
          duration: transitionDuration,
        }
      ),
      '&:hover': {
        backgroundColor: hoverColor,
      },
      '&.Mui-focused': {
        backgroundColor: backgroundColor,
        boxShadow: `0 0 0 2px ${primaryColor}`,
      },
    },
    '& .MuiInputBase-input': {
      padding: '10px 12px',
      fontSize: theme?.typography?.fontSize || '0.875rem',
      '&::placeholder': {
        color: textColor,
        opacity: 1,
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: dividerColor,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: primaryTextColor,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: primaryColor,
      borderWidth: '2px',
    },
  };
});

const DateRangePicker = React.forwardRef(({ className = '', ...props }, ref) => {
  const [value, setValue] = useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} >
      <Box display="flex" gap={2} className={className} ref={ref} sx={{width:'100%'}} >
        <StyledDateRangePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            if (props.onChange) {
              props.onChange(newValue);
            }
          }}
          renderInput={(startProps, endProps) => (
            <>
              <TextField {...startProps} fullWidth />
              <TextField {...endProps} fullWidth />
            </>
          )}
          {...props}
        />
        <input type='hidden' name={props.name} value={value.map(v=>v && v.toLocaleDateString('in'))} disabled={props.disabled} readOnly={props.readOnly} />
      </Box>
    </LocalizationProvider>
  );
});

DateRangePicker.displayName = 'DateRangePicker';

export default DateRangePicker;
