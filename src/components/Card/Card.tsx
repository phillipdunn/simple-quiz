import { Box, Chip, Typography } from '@mui/material'
import React, { FC } from 'react'
import { QuestionType } from '../../types/questions'
import TypeWritter from '../TypeWritter/TypeWritter'

interface Props {
    checkAnswer: (answer: string) => void
    question: QuestionType

}
const Card: FC<Props> = ({ checkAnswer, question }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TypeWritter text={`${question.question}`} />
            <Box>
                {question.options.map((option, index) => {
                    return (
                        <Chip sx={{ ml: 2 }} key={index} onClick={() => checkAnswer(option.answer)} label={option.answer} color='info' />
                    )
                })}
            </Box>
        </Box>
    )
}

export default Card
