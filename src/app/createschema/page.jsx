"use client";

import React, { useState } from 'react';
import { Grid, Box, Typography, Paper } from '@mui/material';
import { Assignment, Flag, Tag, CalendarMonth } from '@mui/icons-material';
import { Input } from '@/components/ui/Input';
import Form from '@/components/ui/Form';
import { IoMdMenu } from "react-icons/io";
import { AlignCenter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CreateSchema = () => {
  const [formData, setFormData] = useState({
    project: 'Project',
    objective: 'Objective',
    experiment: 'Experiment',
    repeats: '',
    sampleType: 'Sample type',
    sampleName: 'Sample Name',
    protocol: 'DNS Isolation protocol',
    taskName: '',
    toDo: 'TO DO',
    assignee: 'Assignee',
    dueDate: 'Due Date',
    priority: 'Priority',
    tags: 'Tags',
  });

  const handleSubmit = (data, event) => {
    console.log({ data, event });
  };

  const handleChange = (name) => (event) => {
    // setFormData({ ...formData, [name]: event.target.value });
  };

  const handleCreate = () => {
    console.log(formData);
  };

  // Options for select inputs
  const projectOptions = [
    { value: 'Project 1', label: 'Project 1' },
    { value: 'Project 2', label: 'Project 2' },
  ];
  const objectiveOptions = [
    { value: 'Objective 1', label: 'Objective 1' },
    { value: 'Objective 2', label: 'Objective 2' },
  ];
  const experimentOptions = [
    { value: 'Experiment 1', label: 'Experiment 1' },
    { value: 'Experiment 2', label: 'Experiment 2' },
  ];

  return (
    <Box sx={{ paddingTop: '25px' }}>
      <Box
        elevation={3}
        sx={{
          padding: 2,
          maxWidth: 800,
          margin: 'auto',
          borderRadius: '15px',
          border: '1px solid #6EA6FF',
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: 2, color: '#565656', fontWeight: '700', fontSize: '15px' }}>
          Task
        </Typography>
        <Form onSubmit={handleSubmit} >
          <Grid container spacing={1}>
            {/* Row 1 */}

            <Grid item xs={3}>
              <Input
                icon={IoMdMenu}
                name="Project"
                type="search"
                options={projectOptions}
                value={formData.project}

              />
            </Grid>
            <Grid item xs={3}>
              <Input
                name="Objective"
                type="search"
                options={objectiveOptions}
                value={formData.objective}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                name="Experiment"
                type="search"
                options={experimentOptions}
                value={formData.experiment}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                name="No of repeats"
                type="number"
                placeholder="No of repeats"
                value={formData.repeats}
              />
            </Grid>

            {/* Row 2 */}
            <Grid item xs={4}>
              <Input
                name="Sample Type"
                type="search"
                options={experimentOptions} // Example options
                value={formData.sampleType}
              />
            </Grid>
            <Grid item xs={8}>
              <Input
                name="Sample Name"
                type="text"
                value={formData.sampleName}
              />
            </Grid>

            {/* Row 3 */}
            <Grid item xs={12}>
              <Input
                name="DNS Isolation Protocol"
                type="search"
                options={experimentOptions} // Example options
                value={formData.protocol}
              />
            </Grid>

            {/* Row 4 */}
            <Grid item xs={12}>
              <Input
                label="Task Name"
                name="task_name"
                type="text"
                value={formData.taskName}
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                name="To Do"
                type="text"
                value={formData.toDo}
              // icon={Flag}
              />
            </Grid>
            {/* Row 5 */}
            <Grid item xs={2}>
              <Input
                name="Assignee"
                type="text"
                value={formData.assignee}
                icon={Assignment}
              />
            </Grid>
            <Grid item xs={3}>
              <Input
                name="Due Date"
                type="date"
                value={formData.dueDate}
                icon={CalendarMonth}
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                name="Priority"
                type="text"
                value={formData.priority}
                icon={Flag}
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                name="Tags"
                type="text"
                value={formData.tags}
                icon={Tag}
              />
            </Grid>
          </Grid>

          {/* Buttons */}
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3, gap:4 }}>
            
           
            <Button  sx={{width: '280px',color:"#565656",fontWeight:'700', fontSize:'15px', borderRadius:'15px', border:'1px solid #F8E6E6'}} variant="outlined" >
              Cancel
            </Button>
          
           
            <Button sx={{width: '280px',color:"white", backgroundColor:'#9266F5',fontWeight:'700', fontSize:'15px', borderRadius:'15px', border:'1px  #F8E6E6'}}
              onClick={handleCreate}
              // disabled={!formData.taskName}
            >
              Create
            </Button>
            
            
          </Box>
        </Form>
      </Box>
    </Box>

  );
};

export default CreateSchema;
