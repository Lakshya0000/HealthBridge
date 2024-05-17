import React, {useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Appoinment.css';

const Appoinment = () => {
    const [formData,setFormData]=useState({name:"", email:"", phone:"",subject:"",message:""})
    const [emailData,setEmailData]=useState({to:"", subject:"Feedback",message:"Thank you for submitting your valuable feedback"})
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        if(name==="email"){
          setEmailData((prevEmailData) => ({ ...prevEmailData, to: value }));
        }
        console.log(formData)
    
    }
    const emaiMe= {
        to : "khushalmidha24@gmail.com",
        subject : "Feedback Recieved",
        message : "Feedback Recieved from" + formData.email + "\n Name : " + formData.name + "\n Phone : " + formData.phone  + "\n Message : " + formData.message 
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            await fetch("http://localhost:9090/api/email/send-email", {
              method: "POST",
              body: JSON.stringify(emailData),
              headers: {
                "Content-type": "Application/JSON",
              },
            });
            try {
              await fetch("http://localhost:9090/api/email/send-email", {
                method: "POST",
                body: JSON.stringify(emaiMe),
                headers: {
                  "Content-type": "Application/JSON",
                },
              });
              toast.success("Feedback sent successful")
            } catch (e) {
              console.log(e);
              toast.warn("Something went wrong!");
            }
          } catch (e) {
            console.log(e);
            toast.warn("Something went wrong!");
          }

    }
    
    return (
        <section className="appoinment-wrapper">
            <Container>
                <Row>
                    <Col sm={12} md={12}>
                        <div className="section-title">
                            <h1 className="mt-5">Feedback</h1>
                        </div>
                        <div className="appoinment-form">
                            <form onSubmit={handleSubmit} className="row">
                                <Col md={6} lg={6}>
                                    <input type="text" name="name" placeholder="Name" onChange={handleChange} required/>
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="email" name="email" placeholder="Email" onChange={handleChange}   required/>
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="phone" name="phone" placeholder="Phone" onChange={handleChange}  required/>
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="text" name="subject" placeholder="Subject" onChange={handleChange}  required/>
                                </Col>
                                <Col md={12} lg={12}>
                                    <textarea name="Message" cols="30" rows="10" placeholder="Message" onChange={handleChange} required></textarea>
                                </Col>
                                <Link to="/login"><button className="theme-btn btn-fill form-btn mt-5">Submit</button></Link>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Appoinment;