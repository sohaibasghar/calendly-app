import React from 'react';
import PersonCard from './PersonCard';

const PersonList = ({ persons, onPay }) => {
  return (
    <div className="person-list">
      {persons.map((person) => (
        <PersonCard key={person.id} person={person} onPay={onPay} />
      ))}
    </div>
  );
};

export default PersonList;
