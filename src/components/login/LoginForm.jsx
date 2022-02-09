import React from 'react';
import {Button, Form} from "react-bootstrap";
import {BsGoogle} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";
import {AiOutlineEyeInvisible} from "react-icons/ai";

const LoginForm = ({onClose}) => {
    return (
        <div className="loginForm-wrapper">
            <div className="background-login">
                <div className="welcome">
                    <h1>Welcome Back!</h1>
                    <p>Rhoncus sed at nulla odio. Faucibus quam magna feugiat vitae in. 
                    Risus et fermentum in risus nibh praesent netus bibendum</p>
                </div>
            </div>
            <div className="login">
                <button onClick={onClose}className="login-close">&#10005;</button>
                <div className="login-text">
                    <h1 className="Text">Login</h1>
                    <p>Don’t have account? <a href='#'>Sign Up</a></p>
                </div>
                <div className="form-login">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/><AiOutlineEyeInvisible />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                </div>
                <Button className="button-login" variant="secondary"><b>Login</b></Button>
                <div className="button-social">
                <Button variant="mint"><BsGoogle /> &nbsp;Google</Button>
                <Button variant="mint"><FaFacebookF/> &nbsp;Facebook</Button>
                </div>
            </div>
            
        </div>
        
    );
};

export default LoginForm;