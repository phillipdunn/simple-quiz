import React, { useState } from 'react'
import { quizQuestions } from '../../helpers/questions'
import Card from '../../components/Card'
import { Box, Button } from '@mui/material';
import TypeWritter from '../../components/TypeWritter/TypeWritter';
import { Answers, QuestionType } from '../../types/questions';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Answers[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);
    const user = JSON.parse(localStorage.getItem('user') as string);
    const navigate = useNavigate();

    const startTrivia = async () => {
        setGameOver(false);
        setQuestions(quizQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
    };

    const checkAnswer = (anwser: string) => {
        if (!gameOver) {
            console.log(anwser);
            const correctAnswer = questions[number].options.find((option) => option.isCorrect);
            console.log(correctAnswer);
            setUserAnswers((prevAnswers) => [
                ...prevAnswers,
                { question: questions[number].question, answer: anwser, correct: anwser === correctAnswer?.answer },
            ]);
            if (correctAnswer?.answer === anwser) {
                setScore((prevScore) => prevScore + 1);
            }
            if (number === questions.length - 1) {
                setGameOver(true);
                navigate('/results', { state: { userAnswers, score } });
            } else {
                setNumber((prevNumber) => prevNumber + 1);
            }
        }
    };


    return (

        <Box className='quizContainer' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Box sx={{ backgroundColor: 'white', height: '500px', width: '1000px', borderRadius: '8px', pt: 4 }}>
                {gameOver ?
                    (<>
                        <TypeWritter text={`Hi ${user.firstName}, are you ready to begin the quiz?`} typographyVariant='h4' />
                        <Button
                            sx={{ mt: 2 }}
                            variant="contained"
                            color="primary"
                            onClick={() => startTrivia()}>
                            Begin the Quiz
                        </Button>
                    </>
                    ) : (<Card question={questions[number]} checkAnswer={checkAnswer} />)
                }
            </Box>
        </Box>
    )
}

export default Quiz
