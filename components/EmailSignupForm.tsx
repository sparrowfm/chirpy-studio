'use client';

import { useState } from 'react';

interface EmailSignupFormProps {
  className?: string;
  variant?: 'inline' | 'stacked';
}

export function EmailSignupForm({ className = '', variant = 'inline' }: EmailSignupFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message || "You're on the list!");
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`text-center p-6 rounded-xl bg-[#10141D] border border-[#202635] ${className}`}>
        <div className="text-2xl mb-2">🎉</div>
        <p className="text-lg font-medium gradient-text">{message}</p>
        <p className="text-sm text-[#A7B0C0] mt-2">We&apos;ll be in touch soon.</p>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-xl bg-[#10141D] border border-[#202635] text-white placeholder:text-[#A7B0C0] focus:border-[#F97316] transition-colors"
          disabled={status === 'loading'}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-6 py-3 rounded-xl font-medium text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 animate-pulse-glow"
          style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
        >
          {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
        </button>
        {status === 'error' && (
          <p className="text-red-400 text-sm text-center">{message}</p>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-xl bg-[#10141D] border border-[#202635] text-white placeholder:text-[#A7B0C0] focus:border-[#F97316] transition-colors"
        disabled={status === 'loading'}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 rounded-xl font-medium text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 whitespace-nowrap animate-pulse-glow"
        style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
      >
        {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-sm sm:absolute sm:-bottom-6">{message}</p>
      )}
    </form>
  );
}
