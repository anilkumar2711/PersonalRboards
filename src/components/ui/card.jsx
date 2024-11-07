import React from 'react';
import { 
  Card as MuiCard, 
  CardHeader as MuiCardHeader, 
  CardContent as MuiCardContent, 
  CardActions as MuiCardActions, 
  Typography
} from '@mui/material';

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <MuiCard
    ref={ref}
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  />
));

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <MuiCardHeader
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  />
));

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    variant="h3"
    component="h3"
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
));

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <Typography
    ref={ref}
    variant="body2"
    className={`text-sm text-muted-foreground ${className}`}
    {...props}
  />
));

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <MuiCardContent ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
));

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <MuiCardActions
    ref={ref}
    className={`flex items-center p-6 pt-0 ${className}`}
    {...props}
  />
));

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardTitle.displayName = 'CardTitle';
CardDescription.displayName = 'CardDescription';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };