import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DateStartEndPicker(props) {
    const [propStartDate=null,propsEndDate=null] = (props.defaultValue || props.value || "").split(",");
    const [startDate , setStartDate] = React.useState(propStartDate||null);
    const [endDate , setEndDate] = React.useState(propsEndDate||null);
    const getDateValue = (dateObj) => (dateObj && dateObj?.$d?.toLocaleDateString('in') || dateObj);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']} sx={{width:'100%'}}>
        <DatePicker 
            label="Start date" 
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)} 
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
        />
      </DemoContainer>
      <input type='hidden' {...props} value={`${getDateValue(startDate)},${getDateValue(endDate)}`}></input>
    </LocalizationProvider>
  );
}