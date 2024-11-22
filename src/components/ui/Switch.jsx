import React, { useState } from "react";
import { Switch, styled } from "@mui/material";

// Custom Styled Switch using MUI's styled API
const StyledCustomSwitch = styled(Switch)(({ theme }) => ({
  border:'2px solid #565656',
  borderRadius:'5px',
  width: '40px', // Adjust the width of the switch
  height: '25px', // Adjust the height of the switch
  padding: 0,
  display: "flex",
  "& .MuiButtonBase-root": {
    pointerEvent:'noen'
  },
  "& .MuiFormControlLabel-label" : {
    marginLeft: '5px'
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&:hover": {
      backgroundColor: "white", // Hover effect for the off state
    },
    "&.Mui-checked": {
      transform: "translateX(16px)", // Moves the thumb to the right when toggled
      color: "#fff", // Thumb color when toggled on
      "&:hover": {
        backgroundColor: "#F5F5F5", // Hover effect for the on state
      },
      "& + .MuiSwitch-track": {
        backgroundColor: "#F5F5F5", // Dark gray for the track when toggled on
        opacity: 1,
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: "#565656", 
      }
    },
  },
  "& .MuiSwitch-thumb": {
      borderRadius: 5,
      width: 15, // Thumb size
      height: 18,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Shadow for the thumb
      background:"#F5F5F5"
  },
  "& .MuiSwitch-track": {
    borderRadius: 0, // Makes the track rounded
    backgroundColor: "#565656", // Light gray for the track when off
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  }
}));

const SwitchWrapper = (props) => {
  const { value, disabled, readonly,trueLabel="On", falseLabel="Off" } = props;
  const [checked, setChecked] = useState(value);

  const handleChange = (event) => {
    if (!readonly) {
      setChecked(event.target.checked);
    }
  };

  return (
    <div style={{
        display:'flex',
        gap:4,pointerEvents:readonly?'none':'auto',
        background: "#F5F5F5",
        padding: "5px",
        borderRadius: "5px",
        borderColor: "#F8E6E6",
        borderWidth: "1px",
        borderStyle: "solid",
        alignItems: "center"
    }}>
        <StyledCustomSwitch
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          inputProps={{ "aria-label": "custom-controlled" }}
        />
        <span style={{fontWeight:'600'}} >{checked?trueLabel:falseLabel}</span>
    </div>
  );
};

export default SwitchWrapper;
