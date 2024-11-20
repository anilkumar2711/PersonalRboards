import React, { useState, useEffect } from 'react';
import { Autocomplete as MuiAutocomplete, TextField, Chip } from '@mui/material';
import { height, styled } from '@mui/system';
import { Tag } from 'lucide-react';

const StyledAutocomplete = styled(MuiAutocomplete,{
  shouldForwardProp: (prop) => !["icon"].includes(prop) // Prevent `icon` from being forwarded to the DOM
})(({ theme }) => ({
  '&': {
    width: '100%',
    height: 'auto'
  },
  '& .MuiFormControl-root': {
    height: 'auto',
  },
  '& .MuiInputBase-root': {
    height: 'auto',
    paddingTop: '0',
    paddingBottom: '0',
    borderRadius: theme.shape?.borderRadius ?? 4,
    transition: theme.transitions?.create?.(['border-color', 'background-color', 'box-shadow'], {
      duration: theme.transitions?.duration?.short ?? 250,
    }),
    '&.Mui-focused': {
      boxShadow: `0 0 0 2px ${theme.palette?.primary?.main ?? '#1976d2'}`,
    },
  },
  '& .MuiInputBase-input': {
    padding: '10px 12px',
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
  '& .MuiChip-root': {
    margin: theme.spacing(0.5), // Space between chips
  },
}));

const InputTags = React.forwardRef(({
  className = '',
  options = [],
  renderOption,
  value: propValue = [],
  onChange: propOnChange,
  ...props
}, ref) => {
  const [localValue, setLocalValue] = useState(typeof propValue == "string"?propValue.split(","):propValue);

  useEffect(() => {
    // if (propValue !== localValue) setLocalValue(propValue);
    console.log({propValue});
  }, [props.value]);

  const handleChange = (event, newValue) => {
    setLocalValue(newValue);
    propOnChange && propOnChange(event, newValue);
  };

  const defaultRenderOption = (props, option) => (
    <li {...props}>
      {typeof option === 'string' ? option : option.label}
    </li>
  );

  return (<>
    <StyledAutocomplete
      multiple
      options={options}
      freeSolo
      value={localValue}
      onChange={handleChange}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            variant="outlined"
            icon={props.icon?<props.icon fill={typeof option === 'string' ? "" : option?.color} />:<Tag/>}
            label={typeof option === 'string' ? option : option?.label}
            {...getTagProps({ index })}
          />
        ))
      }
      renderOption={renderOption || defaultRenderOption}
      renderInput={(params) => (
        <span style={{position:'relative'}} >
          <TextField
            {...params}
            {...props}
            placeholder="Select Options"
          />
        </span>
      )}
      ref={ref}
    />
    <input name={props.name} type='hidden' value={localValue.map(v=>v?.value||v)}/>
    </>
  );
});

InputTags.displayName = 'InputTags';

export default InputTags;
