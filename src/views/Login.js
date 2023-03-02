import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";
import AuthContext from "../context/Auth-Context";
import classes from './Login.module.css'

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const authCtx = useContext(AuthContext)

    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e) => {
        try {
            e.preventDefault()
            const enteredEmail = emailRef.current.value;
            const enteredPassword = passwordRef.current.value;
            setIsLoading(true);
            const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC-CShizmUodvM-OuftQTwj5jMSeS8cIxU', {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setIsLoading(false);
            if (res.ok) {
                const data = await res.json();
                authCtx.login(data.idToken);
                navigate('/store');
            } else {
                const err = await res.json();
                alert(err.error.message)
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className={classes.loginWrapper}>
                <h2>Login</h2>
                <Form onSubmit={onSubmit}>
                    <FormGroup floating>
                        <Input
                            id="login-email"
                            placeholder="Enter Email"
                            type="email"
                            innerRef={emailRef}
                        />
                        <Label for="login-email">Email</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input
                            id="login-password"
                            placeholder="Enter Password"
                            type="password"
                            innerRef={passwordRef}
                        />
                        <Label for="login-password">Password</Label>
                    </FormGroup>
                    {!isLoading && <Button type="submit">Submit</Button>}
                    {isLoading && <Button>Submitting...</Button>}
                </Form>
            </div>
        </>
    );
};

export default Login;
