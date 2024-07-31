import React from 'react';
import { Box, Button } from '@mui/material';

export default function RaidStudentToggle ({ view, setView }) {
    return (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%', // Make the container take up full width
          }}
        >
          <Button
            onClick={() => setView('recommended')}
            sx={{
              backgroundColor: view === 'recommended' ? '#0D6EFD' : '#128AFA', // Highlight the active button
              color: 'white',
              '&:hover': {
                backgroundColor: '#0A58CA',
              },
              borderRadius: '12px', // Adjust border radius
              width: '48%', // Adjust width to fit within the container
            }}
          >
            Recommended
          </Button>
          <Button
            onClick={() => setView('budget')}
            sx={{
              backgroundColor: view === 'budget' ? '#0D6EFD' : '#128AFA', // Highlight the active button
              color: 'white',
              '&:hover': {
                backgroundColor: '#0A58CA',
              },
              borderRadius: '12px', // Adjust border radius
              width: '48%', // Adjust width to fit within the container
            }}
          >
            Budget
          </Button>
        </Box>
      );
};