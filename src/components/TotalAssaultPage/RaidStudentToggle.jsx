import React from 'react';
import { Box, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate to handle URL changes

export default function RaidStudentToggle({ view, setView }) {
  const { bossName } = useParams(); // Get bossName from URL
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleViewChange = (newView) => {
    // Update the URL with the new view and the current bossName
    navigate(`/TotalAssault/${bossName}/${newView}`);
  };

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
        onClick={() => handleViewChange('Recommended')}
        sx={{
          backgroundColor: view === 'Recommended' ? '#0D6EFD' : '#128AFA', // Highlights the active button
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
        onClick={() => handleViewChange('Budget')}
        sx={{
          backgroundColor: view === 'Budget' ? '#0D6EFD' : '#128AFA', // Highlights the active button
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
}
