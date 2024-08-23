import * as Yup from 'yup';

export const schema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Must be a valid email').required('Email is required'),
});
