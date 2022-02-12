import React from "react";
import { Button, Form, Modal, Row, Col
 } from "react-bootstrap";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const Register = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
 
  return (
     <div className="loginModal d-flex">
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
               <div className="signUp-text px-5 pt-5">
               <h2 className="fw-bold">Sign Up</h2>
               <p>
                  Already have account? <a href="#">Login</a>
               </p>
               </div>
               <div className=" border-bottom border-ash py-2">
                  <div className="form-signUp px-5">
                     <Form className="pb-2">
                        <Row>
                           <Col>
                              <Form.Label>First Name</Form.Label>
                              <Form.Control placeholder="First name" />
                           </Col>
                           <Col>
                              <Form.Label>Last Name</Form.Label>
                              <Form.Control placeholder="Last name" />
                           </Col>
                        </Row>
                     </Form>
                     <Form className="pb-2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                           type="email"
                           placeholder="Enter email"
                        />
                     </Form>
                     <Form className="pb-2">
                        <Form.Label>Password</Form.Label>
                        <div className="formWrapper d-flex border border-gray-400 rounded">
                           <Form.Control 
                              className="border-0" 
                              type={showPassword ? "text" : "password"} 
                              placeholder="Password" 
                           />
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
                     </Form>
                     <Form className="pb-2">
                        <Form.Label>Confirm Password</Form.Label>
                        <div className="formWrapper d-flex border border-gray-400 rounded">
                           <Form.Control 
                              className="border-0" 
                              type={showConfirm ? "text" : "password"} 
                              placeholder="Password" 
                           />
                           <Button 
                              className="showIcon bg-transparent text-dark border-0 shadow-none"
                              onClick={(e) => {
                                 e.preventDefault();
                                 setShowConfirm(!showConfirm);
                              }}
                           >
                              {showConfirm ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                           </Button>
                        </div>
                     </Form>
                  </div>
                  <Button className="button-signUp mx-auto my-3 fw-bold" variant="secondary">
                     Sign Up
                  </Button>
               </div>
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
    </div>
  );
};

export default Register;
