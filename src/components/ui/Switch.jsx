import React, { useState } from "react";
import { Switch, styled } from "@mui/material";

// Custom Styled Switch using MUI's styled API
const StyledCustomSwitch = styled(Switch)(({ theme }) => ({
  width: 50, // Adjust the width of the switch
  height: 26, // Adjust the height of the switch
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
    color: "#4A4A4A", // Color for the off state
    "&:hover": {
      backgroundColor: "white", // Hover effect for the off state
    },
    "&.Mui-checked": {
      transform: "translateX(24px)", // Moves the thumb to the right when toggled
      color: "#fff", // Thumb color when toggled on
      "&:hover": {
        backgroundColor: "#4A4A4A", // Hover effect for the on state
      },
      "& + .MuiSwitch-track": {
        backgroundColor: "#4A4A4A", // Dark gray for the track when toggled on
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 22, // Thumb size
    height: 22,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Shadow for the thumb
  },
  "& .MuiSwitch-track": {
    borderRadius: 13, // Makes the track rounded
    backgroundColor: "#E0E0E0", // Light gray for the track when off
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
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
