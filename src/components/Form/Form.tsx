import React, { FC } from 'react';
import { Formik, Form as FormikForm, } from 'formik';
import { Box, Button, TextField, } from '@mui/material';


interface Props {
    buttonLabel: string
    handleSubmit: () => void
    isRegister?: boolean
    schema: any
}
const Form: FC<Props> = ({ buttonLabel, handleSubmit, isRegister, schema }) => {

    const initialValues = {
        ...(isRegister && { firstName: '' }),
        ...(isRegister && { lastName: '' }),
        email: '',
        password: ''
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}
            validateOnChange={false}
        >
            {({ errors, handleChange, handleSubmit }) => (
                <FormikForm noValidate onSubmit={handleSubmit}>
                    <Box sx={{ pt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {isRegister && <><TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="text"
                            name='firstName'
                            label="First Name"
                            variant="outlined"
                            onChange={handleChange}
                            error={!!errors.firstName}
                            helperText={errors.firstName ? errors.firstName : ''}
                        />
                            <TextField
                                style={{ width: "200px", margin: "5px" }}
                                type="text"
                                name='lastName'
                                label="Last Name"
                                variant="outlined"
                                onChange={handleChange}
                                error={!!errors.lastName}
                                helperText={errors.lastName ? errors.lastName : ''}
                            /></>}
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="email"
                            name='email'
                            label="Email"
                            variant="outlined"
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email ? errors.email : ''}
                        />
                        <TextField
                            style={{ width: "200px", margin: "5px" }}
                            type="password"
                            name='password'
                            label="Password"
                            variant="outlined"
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password ? errors.password : ''}
                        />
                        <Box sx={{ pt: 3 }}>
                            <Button variant="contained" color="primary" type='submit'>
                                {buttonLabel}
                            </Button>
                        </Box>
                    </Box>
                </FormikForm>)}
        </Formik>
    );
};

export default Form;
