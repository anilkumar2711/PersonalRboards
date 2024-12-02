
"use client"
import { Input } from '@/components/ui/Input';
import { useMixin } from '@/providers/mixin.provider';
import { Box, Typography, Card, CardContent, Grid, } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const phdProjects = [
    { title: 'Isolation and Identification of bacterial strains in the forest soils of Bhadrachalam', owner: 'Jéssica Texiera', duration: '3 Years 2 months' },
    { title: 'Isolation and Identification of bacterial strains in the forest soils of Bhadrachalam', owner: 'Jéssica Texiera', duration: '3 Years 2 months' },
    { title: 'Isolation and Identification of bacterial strains in the forest soils of Bhadrachalam', owner: 'Jéssica Texiera', duration: '3 Years 2 months' },
];

export function BoardsPage(props) {
    const { $store,$emit, setStore,router, setComponent, api, service } = useMixin();
    const [ state,setState] = useState({
        selectedProject: null,
        projects:[],
        boards:[]
    });

    const node = setComponent("BoardsPage",{state});
    
    const projectOptions = state.projects.map(v => ({value: v.id, label: v.name}));

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

    const handleCardClick = (board) => {
        router.push(`/board?id=${board.id}&project_id=${board.project_id}`);
    };

    const handleProjectSearch = (searchText)=>{
        searchProjects(searchText);
    };

    const handelProjectSelect = (event,value,option)=>{
        setState((v) => ({ ...v, selectedProject: v.projects.find(p=>p.id==value) }));
    }

    const getBoards = (projectId)=>{
        if(!projectId) return;
        api.get(`/boards/${state.selectedProject?.id}`).then((boardsList)=>{
            setState((v) => ({ ...v, boards: boardsList }));
        });
    }

    const getAllBoards = ()=>{
        api.get(`/boards`).then((boardsList)=>{
            setState((v) => ({ ...v, boards: boardsList }));
        });
    };

    useEffect(()=>{
        getBoards(state.selectedProject?.id);
    },[state.selectedProject]);

    useEffect(()=>{
        getAllBoards();
    },[]);

    return (<Box sx={{ margin: 2 }}>
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <Box>
            <div style={{ position:'relative', width: '300px'}}>
                <Input 
                    onSearch={()=>handleProjectSearch()} 
                    type="search" 
                    placeholder="Search projects for boards"  
                    options={projectOptions} 
                    icon={Search}
                    onChange={(...args)=>handelProjectSelect(...args)} 
                    >
                </Input>
                {/* <Search style={{ position:'absolute', top:0, left:0, transform:'translate(50%, 25%)' }}/> */}
            </div>
            </Box>
             
            <Box sx={{marginRight:'10px'}}>
            <Button onClick={()=>$emit.trigger("openBoardCreate")} 
                sx={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "white",
                  }}
            >New</Button>
            </Box>
        </Box>
        <Box sx={{ mb: 4, pt: 4 }}>
            <Typography fontWeight="600" fontSize='14px' color='#B3ABAB'>Ph.D Projects</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {state.boards.map((board, index) => (
                    <Grid item xs={12} sm={4} key={index}>
                        <Card sx={{ border: '1px solid #D9D9D9', borderRadius: '15px', boxShadow: 'none', padding: '10px', cursor: 'pointer' }}
                            onClick={() => handleCardClick(board)}>
                            <Box
                                component="img"
                                src="project_01.png" // Replace with actual image URL
                                alt="Project"
                                sx={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: '15px' }}
                            />
                            <CardContent>
                                <Typography fontWeight="600" fontSize='12px' color='#B3ABAB' sx={{ mb: 1 }}>
                                    {board.name}
                                </Typography>
                                <Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center', }}>
                                        <img src="profile_image.png" alt='profileimage' sx={{ width: 35, height: 35, }} />
                                        {
                                            state.selectedProject && <>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'initial', paddingLeft: '10px' }}>
                                                    <Box>
                                                        <Typography fontWeight="500" fontSize='12px' color='#B3ABAB'>{state.selectedProject.owner.full_name}</Typography>
                                                    </Box>
                                                    <Box>
                                                        <Typography fontWeight="400" fontSize='12px' color='#24A249'>
                                                            {service.date(state.selectedProject.endDate).duration(state.selectedProject.startDate)}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </>
                                        }
                                    </Box>

                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </Box>);
}


export default BoardsPage;