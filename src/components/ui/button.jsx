import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(MuiButton)(({ theme, size, variant }) => {
  const defaultFontSize = 14;
  const defaultBorderRadius = 4;

  return {
    borderRadius: theme.shape?.borderRadius ?? defaultBorderRadius,
    textTransform: 'none',
    fontWeight: theme.typography?.fontWeightMedium ?? 500,
    fontSize: theme.typography?.pxToRem?.(defaultFontSize) ?? `${defaultFontSize}px`,
    transition: theme.transitions?.create?.(['background-color', 'box-shadow', 'border-color', 'color'], {
      duration: theme.transitions?.duration?.short ?? 250,
    }),
    '&:focus-visible': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${theme.palette?.background?.paper ?? '#fff'}, 0 0 0 4px ${theme.palette?.primary?.main ?? '#1976d2'}`,
    },
    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
    },
    ...(size === 'sm' && {
      padding: '4px 8px',
      fontSize: theme.typography?.pxToRem?.(13) ?? '13px',
    }),
    ...(size === 'lg' && {
      padding: '8px 16px',
      fontSize: theme.typography?.pxToRem?.(16) ?? '16px',
    }),
    ...(size === 'icon' && {
      minWidth: 40,
      width: 40,
      height: 40,
      padding: 0,
    }),
    ...(variant === 'ghost' && {
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: theme.palette?.action?.hover ?? 'rgba(0, 0, 0, 0.04)',
      },
    }),
    ...(variant === 'link' && {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'none',
      },
    }),
  };
});

const Button = React.forwardRef(({ className = '', variant = 'contained', size = 'medium', ...props }, ref) => {
  const muiVariant = variant === 'default' ? 'contained' : 
                     variant === 'destructive' ? 'contained' :
                     variant === 'outline' ? 'outlined' :
                     variant === 'secondary' ? 'contained' :
                     variant === 'ghost' ? 'text' :
                     variant === 'link' ? 'text' : variant;

  const muiColor = variant === 'destructive' ? 'error' : 'primary';

  const muiSize = size === 'sm' ? 'small' :
                  size === 'lg' ? 'large' :
                  size === 'icon' ? 'medium' : size;

  return (
    <StyledButton
      className={className}
      ref={ref}
      variant={muiVariant}
      color={muiColor}
      size={muiSize}
      {...props}
    />
  );
});

Button.displayName = 'Button';

export { Button };