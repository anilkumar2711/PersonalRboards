import React, { useEffect, useState } from "react";
import { Box, Slider } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledProgressInputWrapper = styled(Box)(({ theme, disabled }) => ({
    '&:hover .MuiSlider-thumb ': {
        display: disabled?'none':'flex'
    }
}));

const ProgressInput = (props) => {
    const [inputValue, setInputValue] = useState(props.value || 0);
    const maxLength = props.max || 100;
    const minLength = props.min || 0;

    // Handle input change
    const handleSliderChange = (event, newValue) => {
        if(!props.disabled) {
            setInputValue(newValue);
            if (props.onChange) {
                props.onChange(newValue, event); // Call the parent-provided onChange handler if available
            }
        }
    };

    useEffect(() => {
        if (inputValue !== props.value) {
            setInputValue(props.value);
        }
    }, [props.value]);

    // Calculate the progress percentage
    const progress = Math.min((inputValue / maxLength) * 100, 100);

    return (
        <StyledProgressInputWrapper sx={{ flex: 1, display: "contents" }} className={props.className} {...props} >
            {/* Progress Bar Wrapper */}
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "10px 13px",
                }}
            >
                {/* Progress Percentage */}


                {/* Progress Bar */}
                <Box
                    sx={{
                        position: "relative",
                        width: "100%",
                        height: "10px",
                        borderRadius: "50px",
                        display: 'flex',
                        gap: '5px'
                    }}
                >
                    <Box
                        sx={{
                            fontSize: "14px",
                            color: "#565656",
                            fontWeight: "400",
                            width: 'min-content',
                            position: 'relative',
                            bottom: '3px'
                        }}
                    >
                        {progress.toFixed(1)}%
                    </Box>
                    {/* Filled Progress */}
                    <Box
                        sx={{
                            backgroundColor: "#d9d9d9",
                            flexGrow: 1,
                            borderRadius: "40px",
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: "#24A249",
                                height: "100%",
                                borderRadius: "50px",
                                transition: "width 0.2s"
                            }}
                            style={{ width: `${progress}%` }}
                        />
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                            }}
                        >
                            {/* Slider */}
                            <Slider
                                value={inputValue}
                                min={minLength}
                                max={maxLength}
                                onChange={handleSliderChange}
                                aria-labelledby="progress-slider"
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translateY(-70%)",
                                    width: "100%",
                                    color: "transparent",
                                    "& .MuiSlider-thumb": {
                                        backgroundColor: "#24A249",
                                        width: "15px",
                                        height: "15px",
                                        display: 'none',
                                        "&:hover": {
                                            boxShadow: "0 0 0 8px rgba(36, 162, 73, 0.2)",
                                        },
                                    },
                                    "& .MuiSlider-track": { backgroundColor: "transparent", border: 'none' },
                                    "& .MuiSlider-rail": { backgroundColor: "transparent" },
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <input type="hidden" name={props.name} value={inputValue} ></input>
        </StyledProgressInputWrapper>
    );
};

export default ProgressInput;
