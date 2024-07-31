import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import RaidBossCard from './RaidBossCard';
import TotalAssaultService from '../../services/TotalAssaultService';

export default function RaidBossList() {
    const [totalAssaultBoss, setTotalAssaultBoss] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 6;
    const navigate = useNavigate();

    useEffect(() => {
        retrieveTotalAssaultBoss();
    }, []);
    
    const retrieveTotalAssaultBoss = () => {
        TotalAssaultService.getAllTotalAssault() 
            .then(response => {
                setTotalAssaultBoss(response.data);
            })
            .catch(e => {
                console.error('Error fetching total assault bosses:', e);
            });
    };

    const handleNextItem = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % totalAssaultBoss.length);
    };

    const handlePrevItem = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + totalAssaultBoss.length) % totalAssaultBoss.length);
    };

    const handleCardClick = (bossName) => {
        navigate(`/TotalAssault/${bossName}`);
    };

    const currentItems = [];
    for (let i = 0; i < itemsPerPage; i++) {
        currentItems.push(totalAssaultBoss[(currentIndex + i) % totalAssaultBoss.length]);
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '20vh',
                    marginTop: '2vh',
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
                        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.5)',
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '10px',
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
                                    onClick={() => handleCardClick(totalAssault.name)}
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
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
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
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
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
        </>
    );
}