import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import RaidStudentCard from './RaidStudentCard';
import RaidStudentToggle from './RaidStudentToggle';
import TotalAssaultService from '../../services/TotalAssaultService';
import { useParams, useNavigate } from 'react-router-dom';

export default function RaidStudentList() {
  const { bossName, view } = useParams(); // Extract both bossName and view from URL
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (bossName) {
      // Redirect to default view if none provided
      if (!view || (view !== 'Recommended' && view !== 'Budget')) {
        navigate(`/TotalAssault/${bossName}/Recommended`);
      }
    }
  }, [bossName, view, navigate]);

  useEffect(() => {
    if (bossName) {
      TotalAssaultService.getAllStudents()
        .then(response => {
          setStudents(response.data);
        })
        .catch(error => {
          console.error('Error fetching students:', error);
        });
    }
  }, [bossName]);

  const filterStudentsForBoss = (filterCondition, isBudget = false) => {
    return students
      .filter(student => {
        // Check if the student is associated with the current boss
        const isAssociatedWithBoss = student.total_assaults.some(assault => assault.name === bossName) ||
                                      student.grand_assaults.some(assault => assault.name === bossName);

        return student.categories.some(category => category.name === filterCondition) && isAssociatedWithBoss;
      })
      .map((student, index) => {
        const isInBudget = student.categories.some(category => category.name.startsWith('Budget'));

        return (
          <Grid item key={index}>
            <RaidStudentCard 
              studentName={student.name}
              imageSrc={`/${student.name}.png`}
              isBorrowed={isBudget && isInBudget}
            />
          </Grid>
        );
      });
  };

  if (!bossName) {
    return null; // TODO: Add a component or message that says no boss is selected
  }

  //If view is recommended or budget, set that as current view. If neither, set view as recommended
  const currentView = view === 'Recommended' || view === 'Budget' ? view : 'Recommended';

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
          <RaidStudentToggle view={currentView} setView={(newView) => navigate(`/TotalAssault/${bossName}/${newView}`)} /> {/* Pass the view from URL */}
        </Box>
        {currentView === 'Recommended' ? (
          <>
            <Typography variant="h6" sx={{ color: 'white', marginBottom: '2vh', textAlign: 'left' }}>
              Recommended Students for DPS
            </Typography>
            <Grid container spacing={2} sx={{ marginBottom: '2vh', justifyContent: 'flex-start' }}>
              {filterStudentsForBoss('DPS')}
            </Grid>

            <Typography variant="h6" sx={{ color: 'white', marginBottom: '2vh', textAlign: 'left' }}>
              Recommended Students for Tank
            </Typography>
            <Grid container spacing={2} sx={{ marginBottom: '2vh', justifyContent: 'flex-start' }}>
              {filterStudentsForBoss('Tank')}
            </Grid>

            <Typography variant="h6" sx={{ color: 'white', marginBottom: '2vh', textAlign: 'left' }}>
              Recommended Students for Boss Unique Abilities
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: 'flex-start' }}>
              {filterStudentsForBoss('Boss Unique Abilities')}
            </Grid>
          </>
        ) : (
          <>
            <Typography variant="h6" sx={{ color: 'white', marginBottom: '2vh', textAlign: 'left' }}>
              Budget Students for DPS
            </Typography>
            <Grid container spacing={2} sx={{ marginBottom: '2vh', justifyContent: 'flex-start' }}>
              {filterStudentsForBoss('Budget DPS', true)}
            </Grid>

            <Typography variant="h6" sx={{ color: 'white', marginBottom: '2vh', textAlign: 'left' }}>
              Budget Students for Tank
            </Typography>
            <Grid container spacing={2} sx={{ marginBottom: '2vh', justifyContent: 'flex-start' }}>
              {filterStudentsForBoss('Budget Tank', true)}
            </Grid>

            <Typography variant="h6" sx={{ color: 'white', marginBottom: '2vh', textAlign: 'left' }}>
              Budget Students for Boss Unique Abilities
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: 'flex-start' }}>
              {filterStudentsForBoss('Budget Boss Unique Abilities', true)}
            </Grid>
          </>
        )}
      </Box>
    </Box>
  );
}
