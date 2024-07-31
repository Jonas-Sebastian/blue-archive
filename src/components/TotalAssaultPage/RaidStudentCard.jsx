import React from 'react';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';

export default function RaidStudentCard({ studentName, imageSrc, onClick }) {
  return (
    <ButtonBase
      focusRipple
      onClick={onClick}
      style={{
        width: '7.5vw',
        height: '15vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          backgroundColor: 'rgba(255, 255, 255, 0.85)', // Adjust opacity here
          backdropFilter: 'blur(10px)',
          borderRadius: 5,
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            position: 'absolute',
            top: '-10%',
          }}
          alt={studentName}
          src={imageSrc}
        />
        <Typography
          sx={{
            ccolor: 'black',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
            marginTop: 'auto',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }}
          variant="h6"
        >
          {studentName}
        </Typography>
      </Paper>
    </ButtonBase>
  );
}
