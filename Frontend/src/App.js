import React, { useState} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About/About';
import Approved from './Pages/Approved/Approved';
import Contact from './Pages/Contact/Contact/Contact';
import Dentist from './Pages/Dentist/Denitst/Dentist';
import Footer from './Pages/Home/Footer/Footer.jsx';
import Header from './Pages/Home/Header/Header.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Page from './Pages/Remedies/Page/page';
import Signup from './Pages/Signup/signup.jsx';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { DiseaseData } from './Data/Disease.js'; 
import Main from './Pages/Diseases/Main/main.jsx';
function App() {
  const [isloggedin, setisloggedin] = useState(false);
  const [email, setemail] = useState('');
  return (
    <div className="App">
      <Router>
        <Header isloggedin={isloggedin} setisloggedin={setisloggedin} email={email} setemail={setemail}/>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick 
          />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/remedies' element={<Page />} />
          <Route path='/doctor' element={<Dentist />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/approved' element={<Approved />} />
          <Route path='/login' element={<Login isloggedin={isloggedin} setisloggedin={setisloggedin} email={email} setemail={setemail}/>} />
          <Route path='/signup' element={<Signup isloggedin={isloggedin} setisloggedin={setisloggedin} email={email} setemail={setemail}/>} />
          <Route path='/Cough' element={<Main title={DiseaseData[0].title} description={DiseaseData[0].description} img={DiseaseData[0].img}/>} />
          <Route path='/Fever' element={<Main title={DiseaseData[1].title} description={DiseaseData[1].description} img={DiseaseData[1].img}/>} />
          <Route path='/StomachAche' element={<Main title={DiseaseData[2].title} description={DiseaseData[2].description} img={DiseaseData[2].img}/>} />
          <Route path='/Vomiting' element={<Main title={DiseaseData[3].title} description={DiseaseData[3].description} img={DiseaseData[3].img}/>} />
          <Route path='/HeadAche' element={<Main title={DiseaseData[0].title} description={DiseaseData[0].description} img={DiseaseData[0].img}/>} />
          <Route path='/BodyPain' element={<Main title={DiseaseData[1].title} description={DiseaseData[1].description} img={DiseaseData[1].img}/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer isloggedin={isloggedin} setisloggedin={setisloggedin}/>
      </Router>
    </div>
  );
}

export default App;
