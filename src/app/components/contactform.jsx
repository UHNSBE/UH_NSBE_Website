'use client'
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_SHEET, {
        redirect: 'follow',
        method: 'POST',
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          category: '',
          message: ''
        });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
      console.error('Error submitting the form', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 text-black sm:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <label htmlFor="name" className="text-sm font-medium text-neutral-700">Name (Required)</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="rounded-lg border border-neutral-300 bg-white p-3 text-black placeholder:text-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
        />

        <label htmlFor="email" className="text-sm font-medium text-neutral-700">Email (Required)</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="rounded-lg border border-neutral-300 bg-white p-3 text-black placeholder:text-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
        />

        <label htmlFor="category" className="text-sm font-medium text-neutral-700">I am ...</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="rounded-lg border border-neutral-300 bg-white p-3 text-black placeholder:text-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
        >
          <option value="" disabled>Select an option</option>
          <option value="A Student">A Student</option>
          <option value="An Alum">An Alum</option>
          <option value="A Sponsor">A Sponsor</option>
          <option value="A Company Representative">A Company Representative</option>
        </select>

        <label htmlFor="message" className="text-sm font-medium text-neutral-700">Message (Required)</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="rounded-lg border border-neutral-300 bg-white p-3 text-black placeholder:text-neutral-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
        ></textarea>

        <button
          type="submit"
          className="btn !w-full !rounded-lg mt-2"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>

        {success === true && <p className="text-green-500 mt-4 mx-auto">Form submitted successfully!</p>}
        {success === false && <p className="text-red-500 mt-4 mx-auto">There was an error submitting the form.</p>}
      </form>
    </div>
  );
}