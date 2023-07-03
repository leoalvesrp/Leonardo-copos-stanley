import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const priceId = data.priceId;

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/success/{CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000',
    });
    return NextResponse.json(session.url);
  } catch (error) {
    return new NextResponse('POST Error', { status: 500 });
  }
}
