import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import RaidStudentCard from './RaidStudentCard';
import RaidStudentToggle from './RaidStudentToggle';
import TotalAssaultService from '../../services/TotalAssaultService';

export default function RaidStudentList() {
  const [view, setView] = useState('recommended');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    TotalAssaultService.getAllStudents()
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);

  const renderStudentCards = (filterCondition) => {
    return students
      .filter(student => {
        return student.categories.some(category => category.name === filterCondition);
      })
      .map((student, index) => (
        <Grid item key={index}>
          <RaidStudentCard 
            studentName={student.name} 
            imageSrc={`/${student.name}.png`}
          />
        </Grid>
      ));
  };

  return (
    <Box
      sx={{
        marginTop: '1vh',
        width: '80vw',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#128AFA',
          borderRadius: '20px',
          padding: '1.5%',
          boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '10px',
            padding: '8px',
            boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.5)',
            width: '15vw',
            marginBottom: '2vh',
          }}
        >
          <RaidStudentToggle view={view} setView={setView} />
        </Box>
        {view === 'recommended' ? (
          <>
            <Typography variant="h6" sx={{ color: 'white', marginBottom: '2vh', textAlign: 'left' }}>
              Recommended Students for DPS
            </Typography>
            <Grid container spacing={2} sx={{ marginBottom: '2vh', justifyContent: 'flex-start' }}>
              {renderStudentCards('DPS')}
            </Grid>

            <Typography variant="h6" sx={{ color: 'white', marginBottom: '2vh', textAlign: 'left' }}>
              Recommended Students for Tank
            </Typography>
            <Grid container spacing={2} sx={{ marginBottom: '2vh', justifyContent: 'flex-start' }}>
              {renderStudentCards('Tank')}
            </Grid>

            <Typography variant="h6" sx={{ color: 'white', marginBottom: '2vh', textAlign: 'left' }}>
              Recommended Students for Boss Unique Abilities
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: 'flex-start' }}>
              {renderStudentCards('Boss Unique Abilities')}
            </Grid>
          </>
        ) : (
          <>
            <Typography variant="h6" sx={{ color: 'white', marginBottom: '2vh', textAlign: 'left' }}>
              Budget Students for DPS
            </Typography>
            <Grid container spacing={2} sx={{ marginBottom: '2vh', justifyContent: 'flex-start' }}>
              {renderStudentCards('Budget DPS')}
            </Grid>

            <Typography variant="h6" sx={{ color: 'white', marginBottom: '2vh', textAlign: 'left' }}>
              Budget Students for Tank
            </Typography>
            <Grid container spacing={2} sx={{ marginBottom: '2vh', justifyContent: 'flex-start' }}>
              {renderStudentCards('Budget Tank')}
            </Grid>

            <Typography variant="h6" sx={{ color: 'white', marginBottom: '2vh', textAlign: 'left' }}>
              Budget Students for Boss Unique Abilities
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: 'flex-start' }}>
              {renderStudentCards('Budget Boss Unique Abilities')}
            </Grid>
          </>
        )}
      </Box>
    </Box>
  );
}
