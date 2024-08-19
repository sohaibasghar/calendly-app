import React from 'react';
import CalendlyWidget from '../(shared)/components/CalendlyWidget';

const Booking = ({searchParams}) => {
    console.log(searchParams)
return <CalendlyWidget url={searchParams.url}/>
};

export default Booking;
