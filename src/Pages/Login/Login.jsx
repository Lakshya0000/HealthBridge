import React, { useState, useRef, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';

const Login = ({isloggedin , setisloggedin, email, setemail}) => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };
  const clearInputFields = () => {
    if (emailRef.current) {
      emailRef.current.value = '';
    }
    if (passwordRef.current) {
      passwordRef.current.value = '';
    }
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const loginHandler = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setemail(user.email);
    clearInputFields();
    // setFormErrors(validateForm(user));
    // setIsSubmit(true);
    // if (!formErrors) {

    // }

    try {
      const response = await fetch("http://localhost:9090/api/users/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      if (!response.ok) {
        console.log("not authenticated");
        setIsSubmitting(false);
        toast.error("Invalid credentials");
      }
      if (response.ok) {
        console.log("Login successful");
        console.log(json);
        setIsSubmitting(false);
        toast.success("Login successful");
        setisloggedin(true);
        navigate("/"); 
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSubmitting(false);
      toast.warn("Invalid Credentials");
    }
  };
  return (
    <>
      <section className="h-100 gradient-form pb-5">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
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
                      <p className="d-flex justify-content-start">
                        Please login to your account
                      </p>
                      <form onSubmit={loginHandler}>
                        <div className="form-outline mb-4">
                          <input
                            onChange={changeHandler}
                            type="email"
                            name="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Email Address"
                            required
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            onChange={changeHandler}
                            type="password"
                            name="password"
                            id="form2Example22"
                            placeholder="Password"
                            className="form-control"
                            required
                          />
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button type="submit" className="theme-btn btn-fill" disabled={isSubmitting}>
                          {isSubmitting && <Spinner animation="border" />}{!isSubmitting && "Login"}
                          </button>
                          <a
                            className="text-muted text-decoration-none"
                            href="#!"
                          >
                            Forgot password?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <Link
                            to="/signup"
                            type="button"
                            className="btn btn-danger"
                          >
                            Create New
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
