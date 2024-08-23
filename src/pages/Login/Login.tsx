import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Form from '../../components/Form';
import { RegisterType } from '../../types/forms';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { loginSchema } from '../../helpers/validation';

const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = (values: RegisterType) => {
        const user = JSON.parse(localStorage.getItem('user') as string);
        user.email === values.email ? navigate('/quiz', { replace: true }) : toast.error('Please provide a registerd email');
    };

    return (
        <Box sx={{ textAlign: 'center' }}>
            <ToastContainer />
            <Typography variant="h3">Login</Typography>
            <Form handleSubmit={handleSubmit as () => void} buttonLabel={'Login'} schema={loginSchema} />
            <Button
                sx={{ mt: 2 }}
                variant="outlined"
                color="secondary"
                onClick={() => navigate('/register', { replace: true })}
            >Register</Button>
        </Box>
    )
}

export default Login
