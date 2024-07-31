import React from 'react';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';

export default function RaidBossCard({ bossName, imageSrc, onClick }) {
    return (
        <ButtonBase
            focusRipple
            onClick={onClick}
            sx={{
                width: '12vw',
                height: '12vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: {
                    xs: '5px',  // Extra small screens
                    sm: '10px', // Small screens
                    md: '10px', // Medium screens
                    lg: '10px', // Large screens
                    xl: '15px'  // Extra large screens
                },
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
                    borderRadius: {
                        xs: '5px',  // Extra small screens
                        sm: '10px', // Small screens
                        md: '10px', // Medium screens
                        lg: '10px', // Large screens
                        xl: '15px'  // Extra large screens
                    },
                    overflow: 'hidden',
                }}
            >
                <img
                    style={{
                        width: '100%',
                        height: '75%',
                        objectFit: 'cover',
                    }}
                    alt={bossName}
                    src={imageSrc}
                />
                <Typography
                    sx={{
                        color: 'black',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        width: '100%',
                        marginTop: 'auto',
                        fontSize: '2vh',
                    }}
                    variant="h5"
                >
                    {bossName}
                </Typography>
            </Paper>
        </ButtonBase>
    );
}
