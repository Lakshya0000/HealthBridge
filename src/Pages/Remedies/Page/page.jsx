import React from 'react';
import Appoinment from '../../../Pages/Home/Appoinment/Appoinment';
import Banner from '../Banner/banner';
import Remedie from '../Remedie/remedie';
import Safety from '../Safety/safety';

const Page = () => {
    return (
        <>
          <Banner /> 
          <Remedie />
          <Safety />
          <Appoinment /> 
        </>
    );
};

export default Page;