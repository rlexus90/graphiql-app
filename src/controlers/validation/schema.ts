import * as yup from 'yup';

export const setupSchema = () => {
  return yup.object({
    name: yup.string().min(2, 'Name to short').required('Input name'),
    email: yup.string().email('Not valid email').required('Input email'),
    password1: yup
      .string()
      .matches(/[A-Z]/, 'Password must have 1 uppercase letter')
      .matches(/[a-z]/, 'Password must have 1 lowercase letter')
      .matches(/\d/, 'Password must have 1 digit')
      .matches(
        /[!@#$%^&*]/,
        'Password must have 1 special character (!@#$%^&*)'
      )
      .min(8)
      .required('Input password'),
    password2: yup
      .string()
      .oneOf([yup.ref('pasword1')], 'Passwords must match')
      .required('Input password'),
    password: yup.string().required('Input password'),
  });
};

export const setupLoginSchema = () => {
  return yup.object({
    email: yup.string().email('Not valid email').required('Input email'),
    password: yup.string().required('Input password'),
  });
};
