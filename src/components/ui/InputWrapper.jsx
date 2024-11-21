import React from 'react';
import { styled } from '@mui/system';
import { Input } from './Input';

const StyledInputField = styled('div',{
    shouldForwardProp: (prop) => ["children"].includes(prop) // Prevent `icon` from being forwarded to the DOM
  })(({ theme }) => ({
    marginTop:'5px !important',
    "& .InputWrapperBlock": {
        minWidth:"300px"
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',//theme.palette?.divider ?? 'rgba(0, 0, 0, 0.23)'
        // backgroundColor:'#f6f6f6'
    },
    '& .MuiInputBase-root': {
        backgroundColor:'#f6f6f6'
    }
}));

const InputWrapper = React.forwardRef(({ ...props }, ref) => {
    return (
        <StyledInputField style={{width:'100%'}} className='InputWrapper'>
            <div style={{display:'inline-block'}} className='InputWrapperBlock' >
                <Input placeholder="Empty" {...props} ref={ref} />
            </div>
        </StyledInputField>
    )
});



StyledInputField.displayName = 'InputWrapper';

export { InputWrapper as Input };