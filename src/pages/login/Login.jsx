import { Helmet } from "react-helmet";
import LoginForm from "../../components/loginForm/LoginForm";

import React from 'react'

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm />
        </div>
    )
};

export default Login