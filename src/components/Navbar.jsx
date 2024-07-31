import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{
      backgroundColor: '#128AFA', // Blue Archive Color
    }}>
      <Toolbar>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'RetroComputer',
            fontSize: {
              xs: '1.5vh',    // Extra small screens or Phone Screens
              sm: '1.5vh',  // Small screens or Small Tablet Screens or Foldable Phone Screens (Samsung Fold)
              md: '2vh',    // Medium screens or Large Tablets (Ipad Pro size) 
              lg: '2.5vh',  // Large screens or Low Resolution Monitors
              xl: '1.75vh'     // Extra large screens or High Resolution Monitors
            },
            border: '3px solid white',
            borderRadius: '10px',
            padding: {
              xs: '0px 5px',
              sm: '5px 10px',
              md: '8px 15px',
              lg: '10px 20px',
              xl: '10px 20px'
            },
          }}
        >
          Blue Archive
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/TotalAssault"
          size="small"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'RetroComputer',
            fontSize: {
              xs: '1.25vh',
              sm: '1.5vh',
              md: '2vh',
              lg: '2.5vh',
              xl: '1.75vh' 
            },
            margin: {
              xs: '0 4px',   // Extra small screens
              sm: '0 6px',   // Small screens
              md: '0 12px',   // Medium screens
              lg: '0 24px',  // Large screens
              xl: '0 24px'   // Extra large screens
            },
          }}
        >
          Total Assault
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/GrandAssault"
          size="small"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'RetroComputer',
            fontSize: {
              xs: '1.25vh',
              sm: '1.5vh',
              md: '2vh',
              lg: '2.5vh',
              xl: '1.75vh' 
            },
            margin: {
              xs: '0 4px',   // Extra small screens
              sm: '0 6px',   // Small screens
              md: '0 12px',   // Medium screens
              lg: '0 24px',  // Large screens
              xl: '0 24px'   // Extra large screens
            },
          }}
        >
          Grand Assault
        </Button>
      </Toolbar>
    </AppBar>
  );
}