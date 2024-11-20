import * as React from 'react';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Styled wrapper for DatePicker customization
const StyledDatePickerWrapper = styled('div')(({ theme }) => ({
  width:'100%',
  display:'flex',
  gap:'10px',
  '& .MuiInputBase-input': {
    padding: '6px 10px', // Inner padding of the input field
    fontSize: '12px', // Adjusted font size
    color: theme.palette.text.primary, // Text color
  },
  '& .MuiFormLabel-root': {
    fontSize: '12px',
    transform:'translate(10px, 50%) scale(1)'
  },
  '& .MuiFormLabel-root.MuiFormLabel-filled': {
    transform: 'translate(14px, -9px) scale(0.75)', // Adjusted position and size when focused
  },
}));

export default function DateStartEndPicker(props) {
  const [propStartDate = null, propEndDate = null] = (props.defaultValue || props.value || '').split(',');
  const [startDate, setStartDate] = React.useState(propStartDate || null);
  const [endDate, setEndDate] = React.useState(propEndDate || null);

  const getDateValue = (dateObj) => (dateObj && dateObj?.$d?.toISOString().split("T")[0]) || dateObj;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDatePickerWrapper>
        {/* Start Date */}
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
        {/* End Date */}
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth />}
        />
      </StyledDatePickerWrapper>
      {/* Hidden input for passing combined date values */}
      <input
        type="hidden"
        {...props}
        value={`${getDateValue(startDate)},${getDateValue(endDate)}`}
      />
    </LocalizationProvider>
  );
}
