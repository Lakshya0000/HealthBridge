import React, { useState, useEffect, useRef, useLocation } from "react";
import "./signup.css";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Signup = () => {
  const [errors,setErrors]=useState({emailError:""})

  const [formData,setFormData]=useState({email:"", name:"", about:"",password:""})
  const [emailData,setEmailData]=useState({to:"", subject:"Welcome",message:"You are welcome to health bridge"})
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    if(name==="email"){
      setEmailData((prevEmailData) => ({ ...prevEmailData, to: value }));
    }
    console.log(formData)

  }
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const aboutRef = useRef(null);
  const navigate = useNavigate();
  const clearInputFields = () => {
    if (emailRef.current) {
      emailRef.current.value = '';
    }
    if (passwordRef.current) {
      passwordRef.current.value = '';
    }
    if (nameRef.current) {
      nameRef.current.value = '';
    }
    if (aboutRef.current) {
      aboutRef.current.value = '';
    }
  };
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const response=await fetch("http://localhost:9090/api/users/",{
        method:"POST",
        body:JSON.stringify(formData),
        headers:{
          "Content-type":"Application/JSON"
        }

      })
      console.log(response.ok)
      const json=await response.json();
      if(!response.ok){
        setErrors({emailError:"user already exists"})
        toast.error("User already exists")
        console.log(errors)
      }
      if(response.ok){
        console.log(json)
        try {
          await fetch("http://localhost:9090/api/email/send-email", {
            method: "POST",
            body: JSON.stringify(emailData),
            headers: {
              "Content-type": "Application/JSON",
            },
          });
        } catch (e) {
          console.log(e);
        }
        toast.success("Signup successful")
        navigate('/')
        clearInputFields();
      }
    }
    catch(e){
      toast.warn("Something went wrong");
      console.log(e)
    }
  }
  return (
    <>
      <section className="h-100 gradient-form pb-5">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          className="card-img"
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">
                          We are The Tech Titans Team
                        </h4>
                      </div>
                      <h6 className="d-flex justify-content-center">
                        Create a New Account
                      </h6>
                      <br />
                      <Form onSubmit={handleSubmit}>
                         
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          {errors.emailError?<p>{errors.emailError}</p>:null}
                          <Form.Control
                            type="email"
                            name="email"
                            ref={emailRef}
                            placeholder="Email Address"
                            onChange={handleChange}
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formGroupPassword"
                        >
                          <Form.Control
                            type="password"
                            name="password"
                            ref={passwordRef}
                            placeholder="Password"
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formGroupPassword"
                        >
                          <Form.Control
                            type="name"
                            name="name"
                            ref={nameRef}
                            placeholder="name"
                            onChange={handleChange}
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3"
                          controlId="formGroupPassword"
                        >
                          <Form.Control
                            type="about"
                            name="about"
                            ref={aboutRef}
                            placeholder="about"
                            onChange={handleChange}
                          />
                        </Form.Group>
                        
                        <br />
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                        <br /><br />
                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Already Have an account?</p>
                          <Link to="/login" type="button" className="btn btn-danger">Login</Link>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
