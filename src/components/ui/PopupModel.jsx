"use client"
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PopupModel = (props) => {
  const {  title, children, width = 400, height = 'auto', name="" } = props;
  const [open,setOpen]   = useState(props.open);
  const handelClose = ()=>{
    setOpen(v=>!v);
    props.onClose && props.onClose();
  };

  useEffect(()=>{
    console.log({open:props.open});
    setOpen(props.open);
  },[props.open]);

  useEffect(()=>{
    console.log("Mounted");
  },[]);

  return (
    <Modal
      open={open}
      onClose={handelClose}
      aria-labelledby="popup-modal-title"
      aria-describedby="popup-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: width,
          height: height,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          outline: 'none',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          {title && (
            <Typography id="popup-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
          )}
          <IconButton id={`${name?name+'-':''}closepopup`} sx={{ marginLeft:'auto'}} onClick={handelClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box id="popup-modal-description">
          {children}
        </Box>
      </Box>
    </Modal>
  );
};

PopupModel.propTypes = {
  open: PropTypes.bool.isRequired, // Determines if the modal is open
  onClose: PropTypes.func, // Function to close the modal
  title: PropTypes.string, // Optional title for the modal
  children: PropTypes.node.isRequired, // Child components to render inside the modal
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Width of the modal (default: 400px)
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Height of the modal (default: auto)
};

export default PopupModel;
