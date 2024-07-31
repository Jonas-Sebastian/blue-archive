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
        overflow: 'hidden', // Ensures that content does not overflow the border
        position: 'relative', // Enables positioning of child elements relative to this container
      }}
    >
      <Paper
        elevation={5}
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative', // Relative positioning to stack text on image
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
          variant="h6" // Use h6 to fit better within the card
        >
          {studentName}
        </Typography>
      </Paper>
    </ButtonBase>
  );
}
