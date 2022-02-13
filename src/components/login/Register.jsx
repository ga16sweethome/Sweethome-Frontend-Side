import React from "react";
import { Button, Form, Modal, Row, Col} from "react-bootstrap";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const Register = (props) => {
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirm, setShowConfirm] = useState(false);

      const register = (values) => {
         console.log("form values", values);
         const data = {
         first_name: values.firstName,
         last_name: values.lastName,
         email: values.email,
         password: values.password,
         };
         formik.setSubmitting(false);
      };

   const formik = useFormik({
      //initial values
      initialValues: {
         firstName: "",
         lastName: "",
         email: "",
         password: "",
         confirmPassword: "",
      },
      //handle schema
      validationSchema: Yup.object({
         firstName: Yup.string().required("first name is a required field"),
         lastName: Yup.string().required("last name is a required field"),
         email: Yup.string().required().email("Invalid email format"),
         password: Yup.string()
            .required()
            .min(6, "Should contain at least 6 characters")
            .matches(/[a-z]/g, "Should contain at least 1 lowercase")
            .matches(/[A-Z]/g, "Should contain at least 1 uppercase")
            .matches(/[0-9]/g, "Should contain at least 1 number"),
         confirmPassword: Yup.string()
            .required("Confirm password is a required")
            .oneOf([Yup.ref("password")], "Password must match"),
   }),
      //handle submission
      onSubmit: register,
   });

   const isError = {
      firstName: formik.touched.firstName && formik.errors.firstName,
      lastName: formik.touched.lastName && formik.errors.lastName,
      email: formik.touched.email && formik.errors.email,
      password: formik.touched.password && formik.errors.password,
      confirmPassword: formik.touched.confirmPassword && formik.errors.confirmPassword,
   };

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
                     Already have account? <button className="btn" >Login</button>
                  </p>
                  </div>
                  <div className=" border-bottom border-ash">
                     <div className="form-signUp px-5">
                        <Form onSubmit={formik.handleSubmit} >
                           <Row>
                              <Col>
                                 <Form.Label className="mb-0">First Name</Form.Label>
                                 <Form.Control 
                                    placeholder="First name" 
                                    name="firstName"
                                    className={isError.firstName && "border-danger"}
                                    {...formik.getFieldProps("firstName")}
                                 />
                                 {isError.firstName && (
                                    <div className="text-danger" style={{fontSize:"12px"}}>{formik.errors.firstName}</div>
                                 )}
                              </Col>
                              <Col>
                                 <Form.Label className="mb-0">Last Name</Form.Label>
                                 <Form.Control 
                                    placeholder="Last name" 
                                    name="lastName"
                                    className={isError.lastName && "border-danger"}
                                    {...formik.getFieldProps("lastName")}
                                 />
                                 {isError.lastName && (
                                    <div className="text-danger" style={{fontSize:"12px"}}>{formik.errors.lastName}</div>
                                 )}
                              </Col>
                           </Row>
                           <Form.Label className="pt-2 mb-0">Email address</Form.Label>
                           <Form.Control
                              type="email"
                              placeholder="Enter email"
                              name="email"
                              className={isError.email && "border-danger"}
                              {...formik.getFieldProps("email")}
                           />
                           {isError.email && (
                              <div className="text-danger" style={{fontSize:"12px"}}>{formik.errors.email}</div>
                           )} 
                           <Form.Label className="pt-2 mb-0">Password</Form.Label>
                           <div 
                              className={`${isError.password && "border-danger"} 
                                 formWrapper d-flex border border-gray-400 rounded`
                              }
                           >
                              <Form.Control 
                                 type={showPassword ? "text" : "password"} 
                                 placeholder="Password" 
                                 name="password"
                                 className="border-0"
                                 {...formik.getFieldProps("password")}
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
                           {isError.password && (
                              <div className="text-danger" style={{fontSize:"12px"}}>{formik.errors.password}</div>
                           )} 
                           <Form.Label className="pt-2 mb-0">Confirm Password</Form.Label>
                           <div 
                              className={`${isError.confirmPassword && "border-danger"} 
                                 formWrapper d-flex border border-gray-400 rounded`
                              }
                           >
                              <Form.Control 
                                 type={showConfirm ? "text" : "password"} 
                                 placeholder="Confirm Password" 
                                 name="confirmPassword"
                                 className="border-0" 
                                 {...formik.getFieldProps("confirmPassword")}
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
                           {isError.confirmPassword && (
                              <div className="text-danger" style={{fontSize:"12px"}}>{formik.errors.confirmPassword}</div>
                           )} 
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
