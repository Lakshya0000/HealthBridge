import React from "react";
import Banner from "../Banner/banner";
import Intro from "../Intro/intro";
import Disease from "../Disease/disease";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
const Main = (props) => {
    return(
        <>
            <Banner title={props.title}/>
            <Intro/>
            <Disease title={props.title} description={props.description} img={props.img} />
        </>
    );
};

export default Main;