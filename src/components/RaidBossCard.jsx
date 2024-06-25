import React from 'react';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';

export default function RaidBossCard({bossName, imageSrc}) {
    return (
        <ButtonBase
            focusRipple
            style={{
                width: '12vw',
                height: '12vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 32,
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
                borderRadius: 8,
                overflow: 'hidden',
                }}
            >
                <img
                style={{
                    width: '100%',
                    height: '70%',
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
                        width: '100%', // To ensure text doesn't overflow
                        marginTop: 'auto', // Pushes the text to the bottom
                    }}
                    variant="h5"
                >
                {bossName}
                </Typography>
            </Paper>
        </ButtonBase>
    )
}