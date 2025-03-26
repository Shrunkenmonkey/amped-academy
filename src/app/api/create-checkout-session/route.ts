import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('STRIPE_SECRET_KEY is not configured');
      return NextResponse.json(
        { error: 'Payment system is not configured' },
        { status: 500 }
      );
    }

    const body = await req.json();
    console.log('Received checkout request:', body);

    const { items } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      console.error('Invalid items in request:', items);
      return NextResponse.json(
        { error: 'Items array is required' },
        { status: 400 }
      );
    }

    // Create line items for Stripe using price IDs
    const lineItems = items.map(item => ({
      price: item.id, // This should be the Stripe price ID
      quantity: item.quantity,
    }));

    console.log('Creating Stripe session with line items:', lineItems);

    // Verify the price exists in Stripe
    try {
      for (const item of lineItems) {
        const price = await stripe.prices.retrieve(item.price);
        console.log(`Verified price ${item.price}:`, price);
      }
    } catch (error) {
      console.error('Error verifying price:', error);
      return NextResponse.json(
        { error: `Invalid price ID: ${error instanceof Error ? error.message : 'Unknown error'}` },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/shop`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'GB', 'AU', 'NZ'], // Add more countries as needed
      },
    });

    console.log('Stripe session created:', session.id);

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Error creating checkout session: ${errorMessage}` },
      { status: 500 }
    );
  }
} 