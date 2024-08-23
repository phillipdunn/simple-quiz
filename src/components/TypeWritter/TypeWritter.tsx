
import { Typography } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import { useState, useRef, useEffect, FC } from 'react'

interface Props {
    text: any
    onFinish?: () => void | undefined
    delay?: number
    typographyVariant?: string
}
const TypeWritter: FC<Props> = ({ text, onFinish, delay = 100, typographyVariant = 'Body1' }) => {
    const to = useRef<NodeJS.Timeout | undefined>(undefined)
    const [charIndex, setCharIndex] = useState<any>(1)

    useEffect(() => {
        if (charIndex < text.length) {
            to.current = setTimeout(() => setCharIndex(charIndex + 1), delay)
        } else {
            onFinish && onFinish()
        }
        return () => clearTimeout(to.current) // cleanup on unmount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [charIndex])

    return <Typography variant={typographyVariant as Variant}>{text.substring(0, charIndex)}</Typography>
}

export default TypeWritter
