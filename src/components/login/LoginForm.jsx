import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";


const LoginForm = (props) => {
  const [showPassword, setShowPassword] = useState(false);

   const login = (values) => {
      console.log(login)
      const data = {
         email: values.email,
         password: values.password,
      };
      console.log(data)

      formik.setSubmitting(false);
   };

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
      },

      validationSchema: Yup.object({
         email: Yup.string().required('Please enter your email'),
         password: Yup.string().required('Please enter your password'),
      }),

      onSubmit : login,
   });

   const isError = {
      email: formik.touched.email && formik.errors.email,
      password: formik.touched.password && formik.errors.password,
   };

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
                  Don’t have account? <button className="btn">Sign Up</button>
               </p>
               </div>
               <div className=" border-bottom border-ash pb-5">
               <div className="form-login">
                  <Form onSubmit={formik.handleSubmit}>
                     <Form.Label className="pt-2">Email Address</Form.Label>
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
                     <Form.Label className="pt-2">Password</Form.Label>
                     <div 
                        className={`${isError.password && "border-danger"} 
                           formWrapper d-flex border border-gray-400 rounded`
                        }
                     >
                        <Form.Control 
                           className="border-0" 
                           type={showPassword ? "text" : "password"} 
                           placeholder="Password" 
                           name="password"
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
                  </Form>
                </div>
                <Button 
                  className='button-login fw-bold' 
                  variant='secondary'
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  Login
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
