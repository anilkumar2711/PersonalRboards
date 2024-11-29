import React, { useState } from 'react';
import { styled } from '@mui/system';

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const Form = React.forwardRef(({ children, onSubmit, ...props }, ref) => {
  const [display,setDisplay] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    if (onSubmit) {
      onSubmit(data, event);
    }
  };

  const handleReset = (event) => {
    setDisplay(false);
    setTimeout(()=>{setDisplay(true);},0);
    console.log({event});
  };

  return (
    <StyledForm ref={ref} onSubmit={handleSubmit} onReset={handleReset} {...props}>
      {display && children}
    </StyledForm>
  );
});

Form.displayName = 'Form';

export default Form;