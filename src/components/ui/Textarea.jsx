import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';

const StyledTextarea = styled(TextField)(({ theme }) => ({
    '&': {
        width: '100%'
    },
    '& .MuiInputBase-root': {
        borderRadius: theme.shape?.borderRadius ?? 4,
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
        // padding: '10px 12px',
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
    '&.Mui-disabled': {
        opacity: 0.5,
        cursor: 'not-allowed',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette?.action?.disabledBackground ?? 'rgba(0, 0, 0, 0.12)',
        },
    },
}));

const Textarea = React.forwardRef(({ className = '', ...props }, ref) => {
    const [value, setValue] = useState(props.value);
    const handleChange = (...args) => {
        let [e] = args;
        setValue(e.target.value);
        props.onChange && props.onChange(...args);
    };
    return (
        <StyledTextarea
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            inputRef={ref}
            InputProps={{
                classes: {
                    root: className,
                },
            }}
            {...props}
            onChange={(...args)=>handleChange(...args)}
            value={value}
        />
    );
});

Textarea.displayName = 'Textarea';

export default Textarea;