import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
   const [showPassword, setShowPassword] = useState(false)
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter your email'),
      password: Yup.string()
        .min(8, 'minimun 8 characters')
        .max(10, 'maximum 10 characters')
        .required('Please enter your password'),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // const data = {
      //   email: values.email,
      //   password: values.password,
      // };
    },
  });
  return (
    <div className='loginModal d-flex'>
      <Modal
        show={props.show}
        fullscreen
        size='lg'
        aria-labelledby='contained-modal-login'
        centered>
        <Modal.Body className='p-0'>
          <div className='loginForm-wrapper'>
            <div className='background-login'>
              <div className='welcome-text'>
                <h1 className='textWelcome'>Welcome Back!</h1>
                <br />
                <p>
                  Rhoncus sed at nulla odio. Faucibus quam magna feugiat vitae
                  in.
                  <br />
                  Risus et fermentum in risus nibh praesent netus bibendum
                </p>
              </div>
            </div>
            <div className="login">
               <button onClick={() => props.onHide()} className="login-close">
               &#10005;
               </button>
               <div className="login-text">
               <h1 className="Text">Login</h1>
               <p>
                  Don’t have account? <a href="#">Sign Up</a>
               </p>
               </div>
               <div className=" border-bottom border-ash pb-5">
               <div className="form-login">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email Address</Form.Label>
                     <Form onSubmit={formik.handleSubmit}>
                     <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={formik.handleChange}
                        // value={formik.values.email}
                      />
                      <p>{formik.errors.email}</p>
                      <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <div className="formWrapper d-flex border border-gray-400 rounded">
                        <Form.Control 
                           className="border-0" 
                           type={showPassword ? "text" : "password"} 
                           placeholder="Password" />
                        <Button 
                           className="showIcon bg-transparent text-dark border-0 shadow-none"
                           onClick={(e) => {
                              e.preventDefault();
                              setShowPassword(!showPassword);
                           }}
                        >
                           {showPassword ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                        </Button>
                     </div>
                  </Form.Group>
                </div>
                <Button className='button-login' variant='secondary'>
                  <b>Login</b>
                </Button>
              </div>
              <div className='button-social'>
                <Button variant='mint'>
                  <BsGoogle /> &nbsp;Google
                </Button>
                <Button variant='mint'>
                  <FaFacebookF /> &nbsp;Facebook
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LoginForm;
