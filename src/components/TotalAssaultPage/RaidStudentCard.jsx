import React from 'react';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';

export default function RaidStudentCard({ studentName, imageSrc, onClick, isBorrowed }) {
  return (
    <ButtonBase
      focusRipple
      onClick={onClick}
      sx={{
        width: '7.5vw',
        height: '15vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: {
          xs: '5px',  // Extra small screens
          sm: '10px',  // Small screens
          md: '10x',  // Medium screens
          lg: '10px',  // Large screens
          xl: '15px'   // Extra large screens
        },
        overflow: 'visible',
        position: 'relative',
      }}
    >
      {isBorrowed && (
        <Box
          sx={{
            position: 'absolute',
            top: '2vh',
            left: '-0.5vw',
            padding: '0.5% 5%',
            backgroundColor: 'red',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '4px',
            transform: 'rotate(-35deg)',
            transformOrigin: 'top left',
            fontSize: '0.6vw',
            zIndex: 5,
            whiteSpace: 'nowrap',
          }}
        >
          Borrow
        </Box>
      )}
      <Paper
        elevation={5}
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          borderRadius: {
            xs: '5px',  // Extra small screens
            sm: '10px',  // Small screens
            md: '10x',  // Medium screens
            lg: '10px',  // Large screens
            xl: '15px'   // Extra large screens
          },
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          style={{
            width: 'auto',
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'cover',
            position: 'absolute',
            marginBottom: '15%',
          }}
          alt={studentName}
          src={imageSrc}
        />
        <Typography
          sx={{
            color: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
            marginTop: 'auto',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            zIndex: 2,
            fontSize: '1.5vh',
          }}
          variant="h6"
        >
          {studentName}
        </Typography>
      </Paper>
    </ButtonBase>
  );
}
