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
            fontSize: '28px',
            border: '4px solid white',
            borderRadius: '15px',
            padding: '10px 20px',
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
            fontSize: '20px',
            margin: '0 24px',
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
            fontSize: '20px',
            margin: '0 24px',
          }}
        >
          Grand Assault
        </Button>
      </Toolbar>
    </AppBar>
  );
};