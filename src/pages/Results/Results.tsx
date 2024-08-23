import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import TypeWritter from '../../components/TypeWritter/TypeWritter';
import ConfettiExplosion from 'react-confetti-explosion';
import { quizQuestions } from '../../helpers/questions';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { capitaliseFirstLetter } from '../../helpers/capitaliseFirstLetter';

const Results = () => {
    const [showLine2, setShowLine2] = useState(false);
    const [showLine3, setShowLine3] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const location = useLocation();
    const results = location.state;
    console.log(results);
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
    const correctAnswer = (number: number) => quizQuestions[number].options.find((option) => option.isCorrect);
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
    };
    return (
        !showAnswers ?
            (<Box className='resultsContainer' sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}  >
                <Box sx={{ backgroundColor: 'white', height: '500px', width: '1000px', borderRadius: '8px', pt: 4 }}>
                    <ConfettiExplosion />
                    <TypeWritter text={`Congratulations ${capitaliseFirstLetter(user.firstName)}!`} typographyVariant='h3' sx={{ pt: 5 }} onFinish={() => setShowLine2(true)} />
                    {showLine2 && <TypeWritter text={`You Scored ${results.score}`} typographyVariant='h3' sx={{ pt: 5 }} onFinish={() => setShowLine3(true)} />}
                    {showLine3 && <TypeWritter text={` ${cheer(results.score)}`} typographyVariant='h3' sx={{ pt: 5 }} />}
                    <Button
                        sx={{ mt: 5 }}
                        variant="contained"
                        color="primary"
                        onClick={() => setShowAnswers(true)}>
                        See Answers
                    </Button>
                </Box >
            </Box >
            ) : (
                <Box sx={{ textAlign: 'center' }}>
                    <TypeWritter text={`${capitaliseFirstLetter(user.firstName)} here are the answers`} typographyVariant='h3' sx={{ py: 8 }} />
                    <Carousel
                        centerMode
                        infinite={true}
                        arrows={true}
                        responsive={responsive}
                        keyBoardControl={true}
                        transitionDuration={500}
                        containerClass="carousel-container"
                    >
                        {results ? results.userAnswers.map((result: any, index: number) => {
                            return (
                                <Box key={index} sx={{ textAlign: 'center', backgroundColor: 'lightblue', height: '400px', width: '600px', borderRadius: '8px' }}>
                                    <Typography variant='h6' sx={{ pt: 5 }} >{result.question}</Typography>
                                    <Typography variant='h6' sx={{ pt: 5 }} >{`Your Answer: ${result.answer}`}</Typography>
                                    <Typography variant='h6' sx={{ pt: 5 }} >{`Correct Answer: ${correctAnswer(index)?.answer}`}</Typography>
                                </Box>)
                        }
                        ) : null}
                    </Carousel>
                </Box>)
    )
}

export default Results
