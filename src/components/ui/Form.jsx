import React from 'react';
import { styled } from '@mui/system';

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

export const Form = React.forwardRef(({ children, onSubmit, ...props }, ref) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    if (onSubmit) {
      onSubmit(data, event);
    }
  };

  return (
    <StyledForm ref={ref} onSubmit={handleSubmit} {...props}>
      {children}
    </StyledForm>
  );
});

Form.displayName = 'Form';

export default Form;