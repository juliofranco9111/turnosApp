import React from 'react';
import { DateTimePicker } from '../components/ui/NewAppointment/DateTimePicker';
import { ProfessionalCard } from '../components/ui/NewAppointment/ProfessionalCard';

export const NewAppointmentReq = () => {
  return (
    <>
      <ProfessionalCard />
      <DateTimePicker />
    </>
  );
};
