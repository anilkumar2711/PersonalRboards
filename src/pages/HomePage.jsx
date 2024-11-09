import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Box, Typography } from '@mui/material';
import { CalendarDays, CheckSquare, NotepadText, FlaskConical, Maximize2, Ellipsis } from 'lucide-react';

function HomePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <Typography variant="h2" sx={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--txtblack)' }}>
        Good morning Divakar
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: '1.5rem' }}>
        
        {/* Recents */}
        <Card>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1.5rem' }}>
            <Typography sx={{ fontSize: '1rem', fontWeight: 'medium', color: 'var(--txtblack)' }}>Recents</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
              <Maximize2 sx={{ height: '1rem', width: '1rem', color: 'var(--txtblack)' }} />
              <Ellipsis sx={{ height: '1rem', width: '1rem', color: 'var(--txtblack)' }} />
            </Box>
          </Box>
          <CardContent>
            <Box component="ul" sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center' }}>
                <CheckSquare sx={{ marginRight: '0.5rem', height: '1rem', width: '1rem', color: 'var(--txtblack)' }} />
                <Typography sx={{ fontSize: '1rem', fontWeight: 'medium', color: 'var(--txtblack)' }}>Task:</Typography>
                <Typography sx={{ fontSize: '1rem', color: 'var(--txtblack)' }}> Search for soil samples</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center' }}>
                <FlaskConical sx={{ marginRight: '0.5rem', height: '1rem', width: '1rem', color: 'var(--txtblack)' }} />
                <Typography sx={{ fontSize: '1rem', fontWeight: 'medium', color: 'var(--txtblack)' }}>Experiment:</Typography>
                <Typography sx={{ fontSize: '1rem', color: 'var(--txtblack)' }}> DNA Isolation from soil samples</Typography>
              </Box>
              <Box component="li" sx={{ display: 'flex', alignItems: 'center' }}>
                <NotepadText sx={{ marginRight: '0.5rem', height: '1rem', width: '1rem', color: 'var(--txtblack)' }} />
                <Typography sx={{ fontSize: '1rem', fontWeight: 'medium', color: 'var(--txtblack)' }}>Survey:</Typography>
                <Typography sx={{ fontSize: '1rem', color: 'var(--txtblack)' }}> DNA Isolation from soil samples</Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>

        {/* Agenda */}
        <Card>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1.5rem' }}>
            <Typography sx={{ fontSize: '1rem', fontWeight: 'medium', color: 'var(--txtblack)' }}>Agenda</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
              <Maximize2 sx={{ height: '1rem', width: '1rem', color: 'var(--txtblack)' }} />
              <Ellipsis sx={{ height: '1rem', width: '1rem', color: 'var(--txtblack)' }} />
            </Box>
          </Box>
          <CardContent sx={{ paddingTop: '1.5rem' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CalendarDays sx={{ height: '6rem', width: '6rem', color: 'var(--txtblack)' }} />
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* LineUp */}
      <Card>
        <CardHeader>
          <CardTitle sx={{ color: 'var(--txtblack)' }}>LineUp</CardTitle>
        </CardHeader>
        <CardContent>
          <Typography sx={{ color: 'var(--txtblack)' }}>No upcoming events</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default HomePage;
