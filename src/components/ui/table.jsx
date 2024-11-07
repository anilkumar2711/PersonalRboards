import React from 'react';
import { 
  Table as MuiTable, 
  TableHead as MuiTableHead,
  TableBody as MuiTableBody,
  TableRow as MuiTableRow,
  TableCell as MuiTableCell,
  TableFooter as MuiTableFooter,
  TableContainer,
  Paper
} from '@mui/material';

const Table = React.forwardRef(({ className, ...props }, ref) => (
  <TableContainer component={Paper} className="w-full overflow-auto">
    <MuiTable
      ref={ref}
      className={`w-full caption-bottom text-sm ${className}`}
      {...props}
    />
  </TableContainer>
));

const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <MuiTableHead ref={ref} className={`[&_tr]:border-b ${className}`} {...props} />
));

const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <MuiTableBody
    ref={ref}
    className={`[&_tr:last-child]:border-0 ${className}`}
    {...props}
  />
));

const TableFooter = React.forwardRef(({ className, ...props }, ref) => (
  <MuiTableFooter
    ref={ref}
    className={`bg-primary font-medium text-primary-foreground ${className}`}
    {...props}
  />
));

const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <MuiTableRow
    ref={ref}
    className={`border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted ${className}`}
    {...props}
  />
));

const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <MuiTableCell
    component="th"
    ref={ref}
    className={`h-12 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  />
));

const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <MuiTableCell
    ref={ref}
    className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}
    {...props}
  />
));

const TableCaption = React.forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={`mt-4 text-sm text-muted-foreground ${className}`}
    {...props}
  />
));

Table.displayName = 'Table';
TableHeader.displayName = 'TableHeader';
TableBody.displayName = 'TableBody';
TableFooter.displayName = 'TableFooter';
TableRow.displayName = 'TableRow';
TableHead.displayName = 'TableHead';
TableCell.displayName = 'TableCell';
TableCaption.displayName = 'TableCaption';

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};