import React, {useState, useRef} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import Spinner from 'react-bootstrap/Spinner';
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
        message : "Feedback Recieved from \n" + formData.email + "\n Name : " + formData.name + "\n Phone : " + formData.phone  + "\n Message : " + formData.message 
    }
    const [isSubmitting, setIsSubmitting] = useState(false);
    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const messageRef = useRef(null);
    const subjectRef = useRef(null);
    const phoneRef = useRef(null);
    const clearInputFields = () => {
        if (emailRef.current) {
          emailRef.current.value = '';
        }
        if (nameRef.current) {
          nameRef.current.value = '';
        }
        if (messageRef.current) {
          messageRef.current.value = '';
        }
        if (subjectRef.current) {
          subjectRef.current.value = '';
        }
        if (phoneRef.current) {
          phoneRef.current.value = '';
        }
      };
    const handleSubmit=async (e)=>{
        e.preventDefault();
        setIsSubmitting(true);
        clearInputFields();
        try {
            await fetch("http://16.16.254.138:9090/api/email/send-email", {
              method: "POST",
              body: JSON.stringify(emailData),
              headers: {
                "Content-type": "Application/JSON",
              },
            });
            try {
              await fetch("http://16.16.254.138:9090/api/email/send-email", {
                method: "POST",
                body: JSON.stringify(emaiMe),
                headers: {
                  "Content-type": "Application/JSON",
                },
              });
              setIsSubmitting(false);
              toast.success("Feedback sent successful")
            } catch (e) {
              console.log(e);
              setIsSubmitting(false);
              toast.warn("Something went wrong!");
            }
          } catch (e) {
            console.log(e);
            setIsSubmitting(false);
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
                                    <input type="text" name="name" placeholder="Name" ref={nameRef} onChange={handleChange} required/>
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="email" name="email" placeholder="Email" ref={emailRef} onChange={handleChange}   required/>
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="phone" name="phone" placeholder="Phone" ref={phoneRef} onChange={handleChange}  required/>
                                </Col>
                                <Col md={6} lg={6}>
                                    <input type="text" name="subject" placeholder="Subject" ref={subjectRef} onChange={handleChange}  required/>
                                </Col>
                                <Col md={12} lg={12}>
                                    <textarea name="message" cols="30" rows="10" placeholder="Message" ref={messageRef} onChange={handleChange} required></textarea>
                                </Col>
                                <div className="d-flex align-items-center justify-content-center pb-4"><button className="theme-btn btn-fill btn-lg form-btn mt-5" type="submit" name="submit" disabled={isSubmitting}>{isSubmitting && <Spinner animation="border" />}{!isSubmitting && "Submit"}</button></div>
                                
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Appoinment;