import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// Retrieve a checkout session for confirmation page
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get('session_id');
    if (!sessionId) {
      return NextResponse.json({ ok: false, error: 'Missing session_id' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items.data.price.product', 'payment_intent.charges'],
    });

    return NextResponse.json({
      ok: true,
      session: {
        id: session.id,
        amount_total: session.amount_total,
        currency: session.currency,
        status: session.status,
        customer_email: session.customer_details?.email || session.customer_email,
        receipt_url: (session as any).receipt_url || null,
        metadata: session.metadata,
        line_items: session.line_items?.data.map(item => ({
          description: item.description,
          quantity: item.quantity,
          amount_total: item.amount_total,
        })),
      },
    });
  } catch (error: any) {
    console.error('Session fetch error', error);
    return NextResponse.json({ ok: false, error: error.message || 'Server error' }, { status: 500 });
  }
}
