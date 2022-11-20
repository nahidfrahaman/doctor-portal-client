import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contactus from '../Contactus/Contactus';
import DentalCare from '../DentalCare/DentalCare.js';
import Informations from '../Section/Informations';
import Services from '../Service/Services';
import Testimonals from '../Testimonal/Testimonals';

const Home = () => {
    return (
        <div className='m-6' > 
          <Banner></Banner>  
          <Informations></Informations>
          <Services></Services>
          <DentalCare></DentalCare>
          <Appointment></Appointment>
          <Testimonals></Testimonals>
          <Contactus></Contactus>
        </div>
    );
};

export default Home;