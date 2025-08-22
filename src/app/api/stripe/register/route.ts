import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
// To handle a POST request to /api/membership
export async function POST(request: NextRequest) {

    try {
        const formData = await request.json();

        const checkoutSession: Stripe.Checkout.Session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                price: 'price_1Q3MQsFlyqBu00S0fl20fCSa',
                quantity: 1
                }
            ],
            mode: 'payment',
            success_url: `https://uh-nsbe-website.vercel.app/membership`,
            cancel_url: `https://uh-nsbe-website.vercel.app/membership`,
            metadata: formData
        });
        return NextResponse.json({result: checkoutSession, ok: true});
    } catch(error){
        console.log(error);
        return new NextResponse('Internal Server', { status: 500 });
    }
}
