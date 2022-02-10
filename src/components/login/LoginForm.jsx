import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter your email"),
      password: Yup.string()
        .min(8, "minimun 8 characters")
        .max(10, "maximum 10 characters")
        .required("Please enter your password"),
    }),

    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };
    },
  });
  return (
    <Modal
      show={props.show}
      fullscreen
      size="lg"
      aria-labelledby="contained-modal-login"
      centered
    >
      <Modal.Body className="p-0">
        <div className="loginForm-wrapper">
          <div className="background-login">
            <div className="welcome-text">
              <h1 className="textWelcome">Welcome Back!</h1>
              <br />
              <p>
                Rhoncus sed at nulla odio. Faucibus quam magna feugiat vitae in.
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
            <div className="form-login">
              <Form onSubmit="{formik.handleSubmit}">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  <AiOutlineEyeInvisible />
                </Form.Group>
              </Form>
            </div>
            <Button className="button-login" variant="secondary">
              <b>Login</b>
            </Button>
            <div className="button-social">
              <Button variant="mint">
                <BsGoogle /> &nbsp;Google
              </Button>
              <Button variant="mint">
                <FaFacebookF /> &nbsp;Facebook
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginForm;
