'use client'
import React from 'react';
import PersonList from './(shared)/components/PersonList';

const persons = [
  { id: 1, name: 'Person 1', description: 'Description 1', calendlyUrl: 'https://calendly.com/sohaibasghar1997' },
  { id: 2, name: 'Person 2', description: 'Description 2', calendlyUrl: 'https://calendly.com/sohaibasghar1997' },
];

export default function HomePage() {
  const handlePayment = (person) => {
    console.log(`Processing payment for ${person.name}`);
  };

  return (
    <div>
      <h1>Available Persons</h1>
      <PersonList persons={persons} onPay={handlePayment} />
    </div>
  );
}
