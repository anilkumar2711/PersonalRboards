'use client'
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Box, Typography } from '@mui/material';
import { CalendarDays, CheckSquare, NotepadText, FlaskConical, Maximize2, Ellipsis } from 'lucide-react';
import { useMixin } from "@/providers/mixin.provider";

function HomePage() {
  const { service } = useMixin();
  const { icons } = service;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', p:6 }}>
      <Typography variant="h2" sx={{ fontSize: '20px', fontWeight: '700', color: '#565656' }}>
        Good morning Divakar
      </Typography>

      <Box sx={{ display: 'grid',paddingTop:'10px', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: '8px', height:"350px" }}>
        
        {/* Recents */}
        <Card>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: '700', color: '#565656', }}>Recents</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <icons.ExpandFull sx={{  color: '#565656' }} />
              <icons.DotsMenu sx={{  color: '#565656' }} />
            </Box>
          </Box>
          <CardContent>
            <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center' }}>
                <icons.SelectCheckBox sx={{ marginRight: '8px', marginRight:'5px', color: '#565656', }} />
                <Typography sx={{ fontSize: '12px', fontWeight: '700', color: '#565656', paddingRight:"8px",paddingLeft:'12px' }}>Task:</Typography>
                <Typography sx={{ fontSize: '12px',fontWeight: '400', color: '#565656' }}> Search for soil samples</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center' }}>
                <icons.ExperimentFill sx={{ marginRight: '8px',color: '#565656' }} />
                <Typography sx={{ fontSize: '12px', fontWeight: '700', color: '#565656',paddingRight:"8px",paddingLeft:'12px' }}>Experiment:</Typography>
                <Typography sx={{ fontSize: '12px',fontWeight: '400', color: '#565656' }}> DNA Isolation from soil samples</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center' }}>
                <icons.SuveryList sx={{ marginRight: '8px', color: '#565656' }} />
                <Typography sx={{ fontSize: '12px', fontWeight: '700', color: '#565656',paddingRight:"8px",paddingLeft:'12px' }}>Survey:</Typography>
                <Typography sx={{ fontSize: '12px',fontWeight: '400', color: '#565656' }}> DNA Isolation from soil samples</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Agenda */}
        <Card>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px' }}>
            <Typography sx={{ fontSize: '16px', fontWeight: '700', color: '#565656' }}>Agenda</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', gap: '8px' }}>
              <icons.ExpandFull sx={{  color: '#565656' }} />
              <icons.DotsMenu sx={{ color: '#565656' }} />
            </Box>
          </Box>
          <CardContent sx={{ paddingTop: '24px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center',height:'220px',color:'#5F6368', }}>
            <CalendarDays style={{height: '150px', width: '150px',}} sx={{  color: '#565656' }} />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* LineUp */}
      <Card>
        {/* <CardHeader>
          <CardTitle sx={{ color: '#565656' }}>LineUp</CardTitle>
        </CardHeader> */}
        <CardContent>
          <Typography sx={{ fontSize: '16px', fontWeight: '700', color: '#565656' }}>LineUp</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default HomePage; 