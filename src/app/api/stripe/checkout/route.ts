import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe (Node environment; uses secret key)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// Auto-detect environment based on public key
const isProduction = !process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY?.includes('pk_test_');

// Map membership types to Stripe product IDs (auto-switches based on environment)
const MEMBERSHIP_PRODUCTS: Record<string, { productId: string; quantity?: number }> = {
  'uh-local': { 
    productId: isProduction ? 'prod_QvCqIraPo2bzm6' : 'prod_QvFNOsA8uQA8rb', 
    quantity: 1 
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      membershipType = 'uh-local',
      firstName,
      lastName,
      uhId,
      email,
      major,
      gender,
      classification,
      tShirtSize,
      internationalStudent,
      birthday,
    } = body || {};

    if (!MEMBERSHIP_PRODUCTS[membershipType]) {
      return NextResponse.json({ ok: false, error: 'Invalid membership type' }, { status: 400 });
    }

    const { productId, quantity = 1 } = MEMBERSHIP_PRODUCTS[membershipType];

    // Retrieve product to get its default price dynamically
    const product = await stripe.products.retrieve(productId, { expand: ['default_price'] });
    let priceId: string | undefined;
    if (typeof product.default_price === 'string') {
      priceId = product.default_price;
    } else if (product.default_price && typeof product.default_price === 'object') {
      priceId = product.default_price.id;
    }
    if (!priceId) {
      return NextResponse.json({ ok: false, error: 'Product missing default price' }, { status: 500 });
    }

    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      success_url: `${origin}/membership/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/membership/uh?canceled=1`,
      metadata: {
        firstName: firstName || '',
        lastName: lastName || '',
        uhId: uhId || '',
        email: email || '',
        major: major || '',
        gender: gender || '',
        classification: classification || '',
        tShirtSize: tShirtSize || '',
        internationalStudent: internationalStudent || '',
        birthday: birthday || '',
        membershipType,
      },
    });

    return NextResponse.json({ ok: true, result: checkoutSession });
  } catch (error: any) {
    console.error('Checkout error', error);
    return NextResponse.json({ ok: false, error: error.message || 'Server error' }, { status: 500 });
  }
}
