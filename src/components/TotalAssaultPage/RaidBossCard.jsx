import React from 'react';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';

export default function RaidBossCard({ bossName, imageSrc, onClick }) {
    return (
        <ButtonBase
            focusRipple
            onClick={onClick}
            style={{
                width: '12vw',
                height: '12vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 20,
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
                    }}
                    variant="h5"
                >
                    {bossName}
                </Typography>
            </Paper>
        </ButtonBase>
    );
}