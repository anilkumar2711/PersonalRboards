import React, { useState, useEffect } from 'react';
import { Autocomplete as MuiAutocomplete, TextField, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';

const StyledAutocomplete = styled(MuiAutocomplete, {
  shouldForwardProp: (prop) => !["icon"].includes(prop) // Prevent `icon` from being forwarded to the DOM
})(({ theme, icon, value }) => ({
  '&': {
    width: '100%'
  },
  '& .MuiInputBase-root': {
    ...(icon ? { paddingLeft: '40px' } : {}),
    height: '35px',
    borderRadius: theme.shape?.borderRadius ?? 4,
    // backgroundColor: theme.palette?.background?.paper ?? '#fff',
    transition: theme.transitions?.create?.([
      'border-color',
      'background-color',
      'box-shadow',
    ], {
      duration: theme.transitions?.duration?.short ?? 250,
    }),
    '&:hover': {
      // backgroundColor: theme.palette?.action?.hover ?? 'rgba(0, 0, 0, 0.04)',
    },
    '&.Mui-focused': {
      backgroundColor: theme.palette?.background?.paper ?? '#fff',
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
}));

const getOptionValue = (option, attrib = 'value') => (typeof option == "string" ? option : (option && option[attrib] || ""));
const getOption = (options, value) => (options.find(v => typeof v == 'string' ? v == value : v.value == value));

const Autocomplete = React.forwardRef(({
  className = '',
  options = [],
  renderInput,
  renderOption,
  value: propValue,
  onChange: propOnChange,
  inputValue: propInputValue,
  onInputChange: propOnInputChange,
  hasPlacehoderColor = false,
  ...props
}, ref) => {
  const [localValue, setLocalValue] = useState(propValue ?? null);
  const [localInputValue, setLocalInputValue] = useState(propInputValue ?? '');
  const [selectedOption, setSelectedOption] = useState(getOption(options, propValue) || {});
  const placeholderColor = getOptionValue(selectedOption, 'color');
  const localLabelValue = selectedOption?.label || localValue;
  useEffect(() => {
    if (propValue !== undefined) {
      setLocalValue(propValue);
      setSelectedOption(getOption(options, propValue));
    }
  }, [propValue]);


  console.log({localLabelValue,localInputValue});

  useEffect(() => {
    if (propInputValue !== undefined) {
      setLocalInputValue(propInputValue);
    }
  }, [propInputValue]);

  const handleChange = (event, newValue,...args) => {
    let selectedValue = typeof newValue === "string" ? newValue : newValue.value;
    setLocalValue(selectedValue);
    setSelectedOption(newValue);
    // console.log({newValue,args});
    propOnChange && propOnChange(event, selectedValue, newValue);
  };

  const handleInputChange = (event, newInputValue) => {
    setLocalInputValue(newInputValue);
    propOnInputChange && propOnInputChange(event, newInputValue);
  };

  const defaultRenderOption = (props, option) => (
    <li {...props} key={option.value} >
      {typeof option == "string" ? option : option.label}
    </li>
  );

  const handelSearch = (event, value) => {
    const searched = event.target.value;
    props.onSearch && props.onSearch(value, event);
    console.log({ event, value });
  }

  const defaultRenderInput = (params) => <span style={{ position: 'relative' }}>
    <TextField
      {...params}
      {...props}
      sx={{
        ...(hasPlacehoderColor ? { backgroundColor: placeholderColor } : {})
      }}
      onChange={(...args) => handelSearch(...args)}
    />
    {props.icon ? <span style={{
      position: 'absolute',
      left: '0px',
      top: '50%',
      transform: 'translate(50%, -25%)'
    }}>
      <props.icon option={selectedOption} />
    </span> : ""}
  </span>;


  const wrapperRederInput = (...args) => {
    return (renderInput ? renderInput(...args, selectedOption) : defaultRenderInput(...args));
  }

  return (
    <StyledAutocomplete
      options={options}
      renderInput={wrapperRederInput || defaultRenderInput}
      renderOption={renderOption || defaultRenderOption}
      value={localLabelValue}
      onChange={handleChange}
      inputValue={localInputValue}
      onInputChange={handleInputChange}
      ref={ref}
      {...props}
    />
  );
});

Autocomplete.displayName = 'Autocomplete';

export default Autocomplete;