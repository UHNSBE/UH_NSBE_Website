"use client";
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

export default function UHMembershipFormPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    uhId: '',
    email: '',
    major: '',
    gender: 'Male',
    classification: 'Freshman',
    tShirtSize: 'S',
    internationalStudent: 'No',
    birthday: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);
      if (!stripe) throw new Error('Stripe failed to load');
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ membershipType: 'uh-local', ...formData }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Checkout failed');
      const { error: redirectError } = await stripe.redirectToCheckout({ sessionId: data.result.id });
      if (redirectError) throw redirectError;
    } catch (err: any) {
      setError(err.message || 'Unexpected error');
      setSubmitting(false);
    }
  };

  return (
    <div className="py-32 w-11/12 mx-auto max-w-3xl">
      <h1 className="text-5xl md:text-6xl text-center mb-10">University of Houston Chapter Membership</h1>
      <p className="text-center mb-12 max-w-xl mx-auto">Fill out the form below to register. You'll be redirected to our secure Stripe checkout. After payment you'll get an on-site confirmation.</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-6">
          <label className="flex flex-col text-sm gap-1">First Name
            <input name="firstName" required value={formData.firstName} onChange={handleChange} className="p-2 rounded-md border border-gray-300 text-black" placeholder="First Name" />
          </label>
          <label className="flex flex-col text-sm gap-1">Last Name
            <input name="lastName" required value={formData.lastName} onChange={handleChange} className="p-2 rounded-md border border-gray-300 text-black" placeholder="Last Name" />
          </label>
          <label className="flex flex-col text-sm gap-1">UH ID / PSID
            <input name="uhId" required value={formData.uhId} onChange={handleChange} className="p-2 rounded-md border border-gray-300 text-black" placeholder="PSID" />
          </label>
          <label className="flex flex-col text-sm gap-1">Email
            <input type="email" name="email" required value={formData.email} onChange={handleChange} className="p-2 rounded-md border border-gray-300 text-black" placeholder="Email" />
          </label>
          <label className="flex flex-col text-sm gap-1">Major
            <input name="major" required value={formData.major} onChange={handleChange} className="p-2 rounded-md border border-gray-300 text-black" placeholder="Major" />
          </label>
          <label className="flex flex-col text-sm gap-1">Gender
            <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 rounded-md border border-gray-300 text-black" required>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </label>
          <label className="flex flex-col text-sm gap-1">Classification
            <select name="classification" value={formData.classification} onChange={handleChange} className="p-2 rounded-md border border-gray-300 text-black" required>
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
              <option>Graduate</option>
            </select>
          </label>
          <label className="flex flex-col text-sm gap-1">T-Shirt Size
            <select name="tShirtSize" value={formData.tShirtSize} onChange={handleChange} className="p-2 rounded-md border border-gray-300 text-black" required>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </label>
          <label className="flex flex-col text-sm gap-1">International Student?
            <select name="internationalStudent" value={formData.internationalStudent} onChange={handleChange} className="p-2 rounded-md border border-gray-300 text-black" required>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </label>
          <label className="flex flex-col text-sm gap-1">Birthday
            <input type="date" name="birthday" required value={formData.birthday} onChange={handleChange} className="p-2 rounded-md border border-gray-300 text-black" />
          </label>
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button disabled={submitting} type="submit" className="p-3 bg-amber-600 text-white rounded-md mt-4 disabled:opacity-60 disabled:cursor-not-allowed">
          {submitting ? 'Redirecting…' : 'Proceed to Secure Payment'}
        </button>
        <p className="text-xs text-center text-gray-400 mt-4">You will be redirected to Stripe Checkout. All payments are secure.</p>
      </form>
    </div>
  );
}
