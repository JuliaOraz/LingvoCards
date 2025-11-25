// import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { registerSchema } from '../../validation/registerSchema';

export default function Register() {
    const handleSubmit = (values) => {
        console.log("submitted:", values);
    };

    // const [formData, setFormData] = useState({
    //     name: '',
    //     surname: '',
    //     email: '',
    //     password: '',
    //     repeatPassword: '',
    // });

    // const handleChange = ({ target: { name, value } }) => {

    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     console.log(formData)
    // }

    return (
        <>
            <h1>Register</h1>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
                validationSchema={registerSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" type="text" />
                    <ErrorMessage name="firstName" />

                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" />

                    <label htmlFor="email">Email Address</label>
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />

                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" />
                    <ErrorMessage name="password" />

                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field name="confirmPassword" type="password" />
                    <ErrorMessage name="confirmPassword" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

        </>
    )
}