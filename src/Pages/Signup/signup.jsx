import React from "react";
import "./signup.css";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const Signup = () => {
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
                      <Form>
                        <Form.Group className="mb-3" controlId="formGroupText">
                          <Form.Control placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                          <Form.Control
                            type="email"
                            placeholder="Email Address"
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formGroupPassword"
                        >
                          <Form.Control
                            type="password"
                            placeholder="Password"
                          />
                        </Form.Group>
                        <Form.Group controlId="formGridRole">
                          <Form.Select defaultValue="Role">
                            <option value="doctor">Doctor</option>
                            <option value="user">User</option>
                          </Form.Select>
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
