"use client";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

type SessionData = {
  id: string;
  amount_total: number | null;
  currency: string | null;
  status: string | null;
  customer_email?: string | null;
  receipt_url?: string | null;
  metadata?: Record<string, string>;
  line_items?: Array<{
    description: string | null;
    quantity: number | null;
    amount_total: number | null;
  }>
};

export default function SuccessPage() {
  const params = useSearchParams();
  const sessionId = params.get('session_id');
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<SessionData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sessionId) {
      setError('Missing session id');
      setLoading(false);
      return;
    }
    (async () => {
      try {
        const res = await fetch(`/api/stripe/session?session_id=${sessionId}`);
        const data = await res.json();
        if (!data.ok) throw new Error(data.error || 'Failed to load session');
        setSession(data.session);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [sessionId]);

  return (
    <div className="py-32 w-11/12 mx-auto max-w-4xl">
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-5xl md:text-6xl mb-6">Welcome to UH NSBE!</h1>
        {loading && <p className="text-lg">Loading your membership details…</p>}
        {error && <p className="text-red-500 text-lg">{error}</p>}
      </div>

      {session && (
        <div className="space-y-8">
          <div className="text-center">
            <p className="text-2xl mb-4">
              Congratulations <span className="font-bold text-amber-600">{session.metadata?.firstName} {session.metadata?.lastName}</span>!
            </p>
            <p className="text-lg text-gray-900 mb-6">
              Your membership payment was successful and you&apos;re now officially part of the UH NSBE family.
            </p>
          </div>

          {/* Payment Details Card */}
          <div className="bg-neutral-900/60 text-white rounded-lg p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Member:</span> {session.metadata?.firstName} {session.metadata?.lastName}</p>
                <p><span className="font-semibold">Email:</span> {session.customer_email || session.metadata?.email}</p>
                <p><span className="font-semibold">UH ID:</span> {session.metadata?.uhId}</p>
                <p><span className="font-semibold">Major:</span> {session.metadata?.major}</p>
              </div>
              <div>
                <p><span className="font-semibold">Classification:</span> {session.metadata?.classification}</p>
                <p><span className="font-semibold">T-Shirt Size:</span> {session.metadata?.tShirtSize}</p>
                <p><span className="font-semibold">Amount Paid:</span> ${((session.amount_total || 0) / 100).toFixed(2)}</p>
                <p><span className="font-semibold">Payment Status:</span> <span className="text-green-400 capitalize">{session.status}</span></p>
              </div>
            </div>
          </div>

          {/* What's Next Card */}
          <div className="bg-amber-600/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">What&apos;s Next?</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>You&apos;ll receive a confirmation email with additional membership information</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Keep an eye out for information about picking up your membership t-shirt</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Join our social media and Discord community for event updates</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Attend General Body Meetings and networking events throughout the semester</span>
              </li>
            </ul>
          </div>

          <div className="text-center text-sm text-gray-600 mt-8">
            <p>Questions about your membership? Contact us at membership@uhnsbe.org</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {session.receipt_url && (
              <a 
                href={session.receipt_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Receipt
              </a>
            )}
            <Link 
              href="/membership" 
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors"
            >
              Return to Membership
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
