import * as yup from "yup";

let schema = yup.object().shape({
    username: yup.string().min(6).max(40).required(),
    firstName: yup.string().max(30).required(),
    lastName: yup.string().max(30).required(),
    email: yup.string().max(40).required(),
    country: yup.string().max(30).required(),
    password: yup.string().max(40).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
});

export default schema;
