import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailAbleAppointment from '../AvailableAppointment/AvailAbleAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner 
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
            ></AppointmentBanner>
            <AvailAbleAppointment
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
            ></AvailAbleAppointment>
        </div>
    );
};

export default Appointment;