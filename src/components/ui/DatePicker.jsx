import * as React from 'react';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Styled DatePicker Container
const StyledDatePickerWrapper = styled('div')(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: '9px 10px', // Inner padding of the input field
    fontSize: '12px'
  }
}));

export default function StyledDatePicker(props) {
  const [value, setValue] = React.useState(dayjs(props.defaultValue || props.value));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDatePickerWrapper>
        <DatePicker
            {...props}
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
      </StyledDatePickerWrapper>
    </LocalizationProvider>
  );
}
