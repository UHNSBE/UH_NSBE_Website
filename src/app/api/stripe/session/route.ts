import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// Retrieve a checkout session for confirmation page
export async function GET(request: NextRequest) {
  try {
    const sessionId = request.nextUrl.searchParams.get('session_id');
    if (!sessionId) {
      return NextResponse.json({ ok: false, error: 'Missing session_id' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: [
        'line_items.data.price.product',
        'payment_intent.charges',
        'payment_intent.latest_charge',
      ],
    });

    // Safely derive receipt URL from the latest charge if available
    let receiptUrl: string | null = null;
    if (session.payment_intent && typeof session.payment_intent !== 'string') {
      const pi = session.payment_intent as Stripe.PaymentIntent;
      // Prefer latest_charge (expanded above) for receipt URL
      const latestCharge = typeof pi.latest_charge !== 'string' ? pi.latest_charge : null;
      if (latestCharge && (latestCharge as any).receipt_url) {
        receiptUrl = (latestCharge as any).receipt_url as string;
      }
    }

    return NextResponse.json({
      ok: true,
      session: {
        id: session.id,
        amount_total: session.amount_total,
        currency: session.currency,
        status: session.status,
        customer_email: session.customer_details?.email || session.customer_email,
        receipt_url: receiptUrl,
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
