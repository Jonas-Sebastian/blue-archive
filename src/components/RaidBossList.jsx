import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Paper from '@mui/material/Paper';
import RaidBossCard from './RaidBossCard';
import TotalAssaultService from '../services/TotalAssaultService';

export default function RaidBossList() {
    const [totalAssaultBoss, setTotalAssaultBoss] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        retrieveTotalAssaultBoss();
    }, []);
    
    const retrieveTotalAssaultBoss = () => {
        TotalAssaultService.getAll()
            .then(response => {
                setTotalAssaultBoss(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const handleNextItem = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % totalAssaultBoss.length);
    };

    const handlePrevItem = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + totalAssaultBoss.length) % totalAssaultBoss.length);
    };

    const currentItems = [];
    for (let i = 0; i < itemsPerPage; i++) {
        currentItems.push(totalAssaultBoss[(currentIndex + i) % totalAssaultBoss.length]);
    }

    return (
        <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '20vh', // Full viewport height to center vertically
            marginTop: '2vh',
            //backgroundColor: '#FFFFFF', // For testing the size of the Box Container of the Raid Boss List
        }}
        >  
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '15vh',
                width: '80vw',
                backgroundColor: '#128AFA',
                border: '2px solid #128AFA',
                borderRadius: '20px',
                boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.5)', // Add drop shadow
                position: 'relative', // Ensure relative positioning for inner content
                }}
            >
                <Box
                    sx={{
                    display: 'flex',
                    gap: '10px', // Adjust the gap/margin between RaidBossCards
                    justifyContent: 'center',
                    width: '100%',
                    }}
                >
                    {currentItems.map((totalAssault, index) => (
                        totalAssault && (
                            <RaidBossCard 
                                key={index}
                                bossName={totalAssault.name}
                                imageSrc={`/${totalAssault.name}.png`}
                            />
                        )
                    ))}
                </Box>
            </Box>
            <Button
                onClick={handlePrevItem}
                sx={{
                backgroundColor: 'transparent',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Adjust opacity on hover
                },
                width: '5vw',
                height: '15vh', 
                boxShadow: 'none', 
                position: 'absolute',
                left: '5vw',
                zIndex: 1, 
                }}
            >
                <ArrowBackIcon sx={{ fontSize: '5rem', color: 'white' }} /> 
            </Button>
            <Button
                onClick={handleNextItem}
                sx={{
                backgroundColor: 'transparent',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Adjust opacity on hover
                },
                width: '5vw',
                height: '15vh',
                boxShadow: 'none',
                position: 'absolute',
                right: '5vw',
                zIndex: 1,
                }}
            >
                <ArrowForwardIcon sx={{ fontSize: '5rem', color: 'white' }} />
            </Button>
        </Box>
    );
};