import Stripe from 'stripe';
import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

type METADATA = {
    firstName: string,
    lastName: string,
    uhId: string,
    email: string,
    major: string,
    gender: string,
    classification: string,
    tShirtSize: string,
    internationalStudent: string,
    birthday: string,
};
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: NextRequest) {
    const body = await request.text();
    const endpointSecret = process.env.STRIPE_SECRET_WEBHOOK_KEY!;
    const sig = headers().get('stripe-signature') as string;
    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    } catch (err) {
        return new Response(`Webhook Error: ${err}`, {
            status: 400
        });
    }

    const eventType = event.type;
    if (
        eventType !== 'checkout.session.completed' &&
        eventType !== 'checkout.session.async_payment_succeeded'
    )
        return new Response('Server Error', {
            status: 500
        });

    const data = event.data.object;
    const metadata = data.metadata as METADATA;
    const firstName = metadata.firstName;
    const lastName = metadata.lastName;
    const uhId = metadata.uhId;
    const email = metadata.email;
    const major = metadata.major;
    const gender = metadata.gender;
    const classification = metadata.classification;
    const tShirtSize = metadata.tShirtSize;
    const internationalStudent = metadata.internationalStudent;
    const birthday = metadata.birthday;

    const formData = {
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
    };

    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxb66pkTfQI0gpWQI3FCKuvtBtJpu9tPQV9ZPu3Beo1fJZuuo7vKRAhu9-sTdilPQ6p/exec', {
            redirect: 'follow',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
          }

        return new Response('New Member Added', {
            status: 200
        });
    } catch (error) {
        return new Response('Server error', {
            status: 500
        });
    }
}