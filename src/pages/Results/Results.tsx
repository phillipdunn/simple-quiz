import { Box } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import TypeWritter from '../../components/TypeWritter/TypeWritter';
import ConfettiExplosion from 'react-confetti-explosion';

const Results = () => {
    const [showLine2, setShowLine2] = React.useState(false);
    const [showLine3, setShowLine3] = React.useState(false);
    const location = useLocation();
    const results = location.state;
    const user = JSON.parse(localStorage.getItem('user') as string);
    const cheer = (score: number) => {
        if (score <= 2) {
            return 'You can do better!';
        } else if (score <= 4) {
            return 'Good Job!';
        } else {
            return 'Excellent!';
        }
    }
    return (
        <Box className='resultsContainer' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}  >
            <Box sx={{ backgroundColor: 'white', height: '500px', width: '1000px', borderRadius: '8px', pt: 4 }}>
                <ConfettiExplosion />
                <TypeWritter text={`Congratulations ${user.firstName}!`} typographyVariant='h3' sx={{ pt: 5 }} onFinish={() => setShowLine2(true)} />
                {showLine2 && <TypeWritter text={`You Scored ${results.score}`} typographyVariant='h3' sx={{ pt: 5 }} onFinish={() => setShowLine3(true)} />}
                {showLine3 && <TypeWritter text={` ${cheer(results.score)}`} typographyVariant='h3' sx={{ pt: 5 }} />}
            </Box >
        </Box >
    )
}

export default Results
