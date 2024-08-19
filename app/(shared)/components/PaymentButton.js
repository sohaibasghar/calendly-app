// 'use client'
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// const PaymentButton = ({ person }) => {
//   const handleClick = async () => {
//     const stripe = await stripePromise;

//     const response = await fetch('/api/checkout_sessions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name: person.name,
//         amount: 10000, // $100 in cents
//         successUrl: `${window.location.origin}/booking?url=${encodeURIComponent(person.calendlyUrl)}`,
//         cancelUrl: `${window.location.origin}/cancel`,
//       }),
//     });

//     const session = await response.json();
//     await stripe.redirectToCheckout({ sessionId: session.id, });
//   };

//   return <button onClick={handleClick}>Pay $100 to Book</button>;
// };

// export default PaymentButton;
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const PaymentButton = ({ person }) => {
  const [promoCode, setPromoCode] = useState('');
  const [amount, setAmount] = useState(10000); // $100 in cents
  const [error, setError] = useState('');

  const handleApplyPromoCode = async () => {
    const response = await fetch('/api/validate_promo_code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ promoCode }),
    });

    const data = await response.json();

    if (data.valid) {
      const discountAmount = data.coupon.amount_off || (amount * data.coupon.percent_off) / 100;
      setAmount(amount - discountAmount);
      setError('');
    } else {
      setError(data.message);
    }
  };

  const handleClick = async () => {
    const stripe = await stripePromise;

    const response = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: person.name,
        amount,
        successUrl: `${window.location.origin}/calendly?url=${encodeURIComponent(person.calendlyUrl)}`,
        cancelUrl: `${window.location.origin}/`,
      }),
    });

    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Enter promo code"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
      /> */}
      {/* <button onClick={handleApplyPromoCode}>Apply Promo Code</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>Amount: ${(amount / 100).toFixed(2)}</p> */}
      <button onClick={handleClick}>Pay ${amount / 100} to Book</button>
    </div>
  );
};

export default PaymentButton;
