import React from 'react';
import { fontSize, styled } from '@mui/system';
import { Input } from './Input';

const StyledInputField = styled('div',{
    shouldForwardProp: (prop) => ["children"].includes(prop) // Prevent `icon` from being forwarded to the DOM
  })(({ isTitle, minWidth }) => ({
    marginTop:'5px !important',
    "& .InputWrapperBlock": {
        minWidth:minWidth || "300px"
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',//theme.palette?.divider ?? 'rgba(0, 0, 0, 0.23)'
        // backgroundColor:'#f6f6f6'
    },
   '& .MuiInputBase-root.Mui-focused': {
        boxShadow: 'none !important',
        backgroundColor: '#f6f6f6'
    },
    '& .MuiFormLabel-root:not(.Mui-focused,.MuiFormLabel-filled)': {
        transform: "translate(14px, 6px) scale(1)"
    },
    ...(isTitle?{
        '& .MuiInputBase-root': {
            backgroundColor: '#fff'
        },
        '& .MuiInputBase-root.Mui-focused': {
            boxShadow: 'none !important',
            backgroundColor: '#f6f6f6'
        },
        '& .MuiInputBase-root input':{
            fontSize: "x-large"
        }
    }:{})
    
}));

const InputWrapper = React.forwardRef(({ ...props }, ref) => {
    return (
        <StyledInputField style={{width:'100%'}} className='InputWrapper' {...props} >
            <div style={{display:'inline-block'}} className='InputWrapperBlock' >
                <Input placeholder="Empty" {...props} ref={ref} />
            </div>
        </StyledInputField>
    )
});



StyledInputField.displayName = 'InputWrapper';

export { InputWrapper as Input };