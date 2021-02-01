import * as yup from "yup";

let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    country: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required()
});

export default schema;