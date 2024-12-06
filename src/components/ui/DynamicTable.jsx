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
    Typography,
    Button
} from "@mui/material";
import { Search, ListFilter } from 'lucide-react';
import Link from "next/link";
import { Input } from "./Input";

const DynamicTable = ({ data: dataProp = [], columns: columnsProp = [], extras = [], fields = {}, hasHeader = true, hasToolbar = false, newroute = "/createproject" }) => {
    const [data, setData] = useState(dataProp);
    const [columns, setColumns] = useState(columnsProp);
    // If columns are not provided, derive from the first row of data
    const tableColumns = [...(columnsProp.length > 0 ? columnsProp : Object.keys(data[0] || [])), ...extras];
    const hasField = (column, key) => (!!(fields[column] && fields[column][key]));
    const getField = (column) => (fields[column] || {});

    const [ state,setState] = useState({
        selectedProject: null,
        projects:[],
    });
    const projectOptions = state.projects.map(v => ({value: v.id, label: v.name}));
    const handleProjectSearch = (searchText)=>{
        searchProjects(searchText);
    };

    // const handelProjectSelect = (event,value,option)=>{
    //     setState((v) => ({ ...v, selectedProject: v.projects.find(p=>p.id==value) }));
    // }

    const searchProjects = (search)=>{
        api.get("/projects", {
            limit: 10,
            page: 1,
            search
        }).then(({data:projects}) => {
            setState((v) => ({ ...v, projects }));
            // console.log(projects)
        });
    };

    useEffect(() => {
        setData(dataProp);
    }, [dataProp]);

    return (<Box sx={{width:'100%'}}>
        {hasToolbar && <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '5px 10px', ml: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Box
                    component="img"
                    src="star 2.png"
                    alt="star"
                    sx={{ mr: 1, height: 16, width: 20 }}
                />
                <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: '700', color: '#B3ABAB' }}>
                    Active
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    pr: 2,
                }}
            >
                
                <div style={{width:'300px'}}>
                    <Input 
                        onSearch={()=>handleProjectSearch()} 
                        type="search" 
                        placeholder="Search"
                        options={projectOptions} 
                        icon={Search}
                        // onChange={(...args)=>handelProjectSelect(...args)} 
                        >
                    </Input>
                </div>
                <button style={{ padding: '0px 10px' }}><ListFilter sx={{ mr: 1, height: 16, width: 16, paddingLeft: '8px' }} /></button>
                <Link href={newroute} >
                    <Button
                        sx={{
                            fontSize: "12px",
                            fontWeight: "700",
                            color: "white",
                            backgroundColor:'var(--variant-containedBg)'
                        }}
                    >
                        New
                    </Button>
                </Link>
            </Box>
        </Box>}
        <TableContainer component={Paper}>
            <Table>
                {/* Table Header */}
                {
                    hasHeader && <TableHead >
                        <TableRow>
                            {tableColumns.map((col, index) => (
                                <TableCell key={index} sx={{ fontWeight: "bold", padding: '8px', width: getField(col).width, borderRight: '1px solid #efefef' }}>
                                    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                                        {getField(col).headerIcon ? <span>{getField(col).headerIcon}</span> : ""}
                                        <span>{getField(col).label ? getField(col).label : col}</span>
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
                                <TableCell key={colIndex} sx={{ padding: '8px', width: getField(col).width, borderRight: '1px solid #efefef' }}>
                                    <Box sx={{ fontSize: "0.875rem", color: "#565656" }}>
                                        {hasField(col, "render") ? getField(col).render({ col, colIndex, rowIndex, row, value: row[col] }) : row[col]}
                                    </Box>
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
    );
};

export default DynamicTable;
