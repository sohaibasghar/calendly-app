import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

export async function POST(req) {
  const { promoCode } = await req.json();

  try {
    const promoCodeObject = await stripe.promotionCodes.list({
      code: promoCode,
      active: true,
      limit: 1,
    });

    if (promoCodeObject.data.length > 0) {
      const coupon = promoCodeObject.data[0].coupon;
      return NextResponse.json({ valid: true, coupon });
    } else {
      return NextResponse.json({ valid: false, message: 'Invalid or expired promo code' });
    }
  } catch (err) {
    return NextResponse.json({ valid: false, message: err.message });
  }
}
