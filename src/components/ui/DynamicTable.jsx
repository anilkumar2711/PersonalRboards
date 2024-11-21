import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
} from "@mui/material";

const DynamicTable = ({ data: dataProp = [], columns: columnsProp = [], extras=[], fields={}, hasHeader = true }) => {
    const [data, setData] = useState(dataProp);
    const [columns, setColumns] = useState(columnsProp);
    // If columns are not provided, derive from the first row of data
    const tableColumns = [...(columnsProp.length > 0 ? columnsProp : Object.keys(data[0] || [])),...extras];
    const hasField = (column,key) => (!!(fields[column] && fields[column][key]));
    const getField = (column) => (fields[column] || {});

    useEffect(()=>{
        setData(dataProp);
    },[dataProp]);

    return (
        <TableContainer component={Paper}>
            <Table>
                {/* Table Header */}
                {
                    hasHeader && <TableHead>
                        <TableRow>
                            {tableColumns.map((col, index) => (
                                <TableCell key={index} sx={{ fontWeight: "bold",padding:'8px',width: getField(col).width,borderRight: '1px solid #efefef' }}>
                                    <div style={{display:'flex',gap:'2px',alignItems:'center'}}>
                                        {getField(col).headerIcon?<span>{getField(col).headerIcon}</span>:""}
                                        <span>{getField(col).label? getField(col).label :col}</span>
                                    </div>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                }


                {/* Table Body */}
                <TableBody>
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {tableColumns.map((col, colIndex) => (
                                <TableCell key={colIndex} sx={{ padding:'8px',width: getField(col).width,borderRight: '1px solid #efefef' }}>
                                    <Box sx={{ fontSize: "0.875rem", color: "#565656" }}>
                                        {hasField(col,"render")?getField(col).render({col,colIndex,rowIndex,row,value:row[col]}):row[col]}
                                    </Box>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DynamicTable;
