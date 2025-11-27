'use client';

import { useState } from 'react';

// Common TLD typos and their corrections
const TLD_TYPOS: Record<string, string> = {
  '.con': '.com',
  '.cmo': '.com',
  '.ocm': '.com',
  '.vom': '.com',
  '.xom': '.com',
  '.comm': '.com',
  '.ent': '.net',
  '.nte': '.net',
  '.ogr': '.org',
  '.orgg': '.org',
  '.gmai.com': '.gmail.com',
  '.gmial.com': '.gmail.com',
  '.gamil.com': '.gmail.com',
};

function checkEmailTypo(email: string): string | null {
  const lowerEmail = email.toLowerCase();
  for (const [typo, correction] of Object.entries(TLD_TYPOS)) {
    if (lowerEmail.endsWith(typo)) {
      return email.slice(0, -typo.length) + correction;
    }
  }
  return null;
}

interface EmailSignupFormProps {
  className?: string;
  variant?: 'inline' | 'stacked';
  buttonText?: string;
}

export function EmailSignupForm({ className = '', variant = 'inline', buttonText = 'Join the Waitlist' }: EmailSignupFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const [suggestion, setSuggestion] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    // Check for common typos
    const corrected = checkEmailTypo(email);
    if (corrected && !suggestion) {
      setSuggestion(corrected);
      setStatus('error');
      setMessage(`Did you mean ${corrected}?`);
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
          onChange={(e) => {
            setEmail(e.target.value);
            setSuggestion(null);
            if (status === 'error') setStatus('idle');
          }}
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
          {status === 'loading' ? 'Submitting...' : buttonText}
        </button>
        {status === 'error' && (
          <div className="text-center">
            <p className="text-red-400 text-sm">{message}</p>
            {suggestion && (
              <button
                type="button"
                onClick={() => {
                  setEmail(suggestion);
                  setSuggestion(null);
                  setStatus('idle');
                  setMessage('');
                }}
                className="text-[#F97316] text-sm mt-1 hover:underline"
              >
                Yes, use {suggestion}
              </button>
            )}
          </div>
        )}
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setSuggestion(null);
          if (status === 'error') setStatus('idle');
        }}
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
        {status === 'loading' ? 'Submitting...' : buttonText}
      </button>
      {status === 'error' && (
        <div className="text-center sm:absolute sm:-bottom-8">
          <p className="text-red-400 text-sm">{message}</p>
          {suggestion && (
            <button
              type="button"
              onClick={() => {
                setEmail(suggestion);
                setSuggestion(null);
                setStatus('idle');
                setMessage('');
              }}
              className="text-[#F97316] text-sm hover:underline"
            >
              Yes, use {suggestion}
            </button>
          )}
        </div>
      )}
    </form>
  );
}
