import * as yup from 'yup';

let schema = yup.object().shape({
  username: yup.string().min(6).max(40).required('username is required'),
  first_name: yup.string().max(30).required('first name is required'),
  last_name: yup.string().max(30).required('last name is required'),
  email: yup.string().max(40).required('email is required'),
  country: yup.string().max(30).required('country is required'),
  password: yup.string().max(40).required('password is required'),
  // confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  user_role: yup.boolean(),
});

export const logInSchema = yup.object().shape({
  username: yup.string().min(6).max(40).required('username is required'),
  password: yup.string().max(40).required('password is required'),
});
export default schema;
