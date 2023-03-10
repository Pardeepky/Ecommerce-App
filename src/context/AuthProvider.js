import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AuthContext from './Auth-Context'

const AuthProvider = (props) => {
    const [token, setToken] = useState(null);

    const userIsLoggedIn = !!token;

    const loginHandler = (token) => {
        localStorage.setItem('token', JSON.stringify(token));
        setToken(token);
    }

    const logoutHandler = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userName')
        setToken(null);
    }

    const authContext = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
    }, [])

    return (
        <AuthContext.Provider value={authContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider