import React from 'react';
import { Box, Typography } from '@mui/material';
import Form from '../../components/Form';
import { RegisterType } from '../../types/forms';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { registerSchema } from '../../helpers/validation';

const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = (values: RegisterType) => {
    localStorage.setItem('user', JSON.stringify(values));
    toast.success('Registration successful');
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 3000);
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <ToastContainer />
      <Typography variant="h3">Register</Typography>
      <Form handleSubmit={handleSubmit as () => void} buttonLabel={'Register'} isRegister schema={registerSchema} />
    </Box>
  );
};

export default Register;
