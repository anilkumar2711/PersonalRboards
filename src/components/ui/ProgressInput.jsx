import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';


const ProgressInput = (props) => {
    const [inputValue, setInputValue] = useState(props.value);
    const maxLength = props.max || 100;
    // Handle input change
    const handleInputChange = (e) => {
        setInputValue(+e.target.value);
    };

    useEffect(()=>{
        inputValue !== props.value && setInputValue(props.value);
    },[props.value])

    // Calculate the progress percentage
    const progress = (inputValue / maxLength) * 100;

    return (
        <Box sx={{ flex: 1, display:'contents' }} className={props.className} >
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center',borderRadius:'40px', padding:'0px 15px' }}>
                <Box sx={{ pr: 1, fontSize: '12px', color: '#565656', fontWeight: '400' }}>{progress}%</Box>
                <Box
                    sx={{ backgroundColor: '#24A249', height: '6px', borderRadius: '50px', }}
                    style={{ width: `${progress}%` }}
                />
                <Box
                    sx={{ backgroundColor: '#d9d9d9', height: '6px', borderRadius: '50px', }}
                    style={{ width: `100%` }}
                />
            </Box>
        </Box>
    );
};

export default ProgressInput;
