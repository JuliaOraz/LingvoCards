import * as Yup from 'yup';


export const registerSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Name is too short - should be 2 chars minimum.'),
    lastName: Yup.string()
        .min(2, 'Surname is too short - should be 2 chars minimum.'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required.'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters long.'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Repeat password"),
});