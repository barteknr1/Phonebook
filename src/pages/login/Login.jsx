import LoginForm from "../../components/loginForm/LoginForm";
import { Helmet, HelmetProvider } from "react-helmet-async";

import React from 'react'

const Login = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm />
        </HelmetProvider>
    )
};

export default Login