'use client';

import { useState } from 'react';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className = '' }: ContactFormProps) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields');
      return;
    }

    if (!form.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`text-center p-8 rounded-xl bg-[#10141D] border border-[#202635] ${className}`}>
        <div className="text-3xl mb-3">✨</div>
        <p className="text-xl font-medium gradient-text">Message sent!</p>
        <p className="text-[#A7B0C0] mt-2">We&apos;ll get back to you soon.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-[#F97316] hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className="px-4 py-3 rounded-xl bg-[#10141D] border border-[#202635] text-white placeholder:text-[#A7B0C0] focus:border-[#F97316] transition-colors"
          disabled={status === 'loading'}
        />
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Your email"
          className="px-4 py-3 rounded-xl bg-[#10141D] border border-[#202635] text-white placeholder:text-[#A7B0C0] focus:border-[#F97316] transition-colors"
          disabled={status === 'loading'}
        />
      </div>
      <textarea
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        placeholder="How can we help?"
        rows={4}
        className="w-full px-4 py-3 rounded-xl bg-[#10141D] border border-[#202635] text-white placeholder:text-[#A7B0C0] focus:border-[#F97316] transition-colors resize-none"
        disabled={status === 'loading'}
      />
      {status === 'error' && (
        <p className="text-red-400 text-sm">{errorMessage}</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full sm:w-auto px-8 py-3 rounded-xl font-medium text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
        style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
