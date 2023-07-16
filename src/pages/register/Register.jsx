import { Helmet } from "react-helmet";
import RegisterForm from "../../components/registerForm/RegisterForm";

import React from 'react'

const Register = () => {
    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegisterForm />
        </div>
    )
};

export default Register