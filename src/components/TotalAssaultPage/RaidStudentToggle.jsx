import React from 'react';
import { Box, Button } from '@mui/material';

export default function RaidStudentToggle ({ view, setView }) {
    return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Button
            onClick={() => setView('recommended')}
            sx={{
              backgroundColor: view === 'recommended' ? '#0D6EFD' : '#128AFA', // Highlights the active button
              color: 'white',
              '&:hover': {
                backgroundColor: '#0A58CA',
              },
              borderRadius: '12px',
              width: '48%',
            }}
          >
            Recommended
          </Button>
          <Button
            onClick={() => setView('budget')}
            sx={{
              backgroundColor: view === 'budget' ? '#0D6EFD' : '#128AFA', // Highlights the active button
              color: 'white',
              '&:hover': {
                backgroundColor: '#0A58CA',
              },
              borderRadius: '12px',
              width: '48%',
            }}
          >
            Budget
          </Button>
        </Box>
      );
};