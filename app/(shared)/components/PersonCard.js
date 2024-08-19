import React from 'react';
import PaymentButton from './PaymentButton';

const PersonCard = ({ person, onPay }) => {
  return (
    <div className="person-card">
      <h2>{person.name}</h2>
      <p>{person.description}</p>
     <PaymentButton person={person}/>
    </div>
  );
};

export default PersonCard;
