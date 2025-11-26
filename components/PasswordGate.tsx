'use client';

import { useState, useEffect, ReactNode } from 'react';

interface PasswordGateProps {
  children: ReactNode;
}

export function PasswordGate({ children }: PasswordGateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if already authenticated
    checkAuth();
  }, []);

  async function checkAuth() {
    try {
      const response = await fetch('/api/docs-auth');
      const data = await response.json();
      setIsAuthenticated(data.authenticated);
    } catch {
      setIsAuthenticated(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/docs-auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setError(data.error || 'Invalid password');
        setPassword('');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  // Loading state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#0B0E14] flex items-center justify-center">
        <div className="animate-pulse text-[#A7B0C0]">Loading...</div>
      </div>
    );
  }

  // Password form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B0E14] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <span className="text-2xl font-bold">
              <span className="text-[#F97316]">CHIRPY</span>
              <span className="text-[#D946EF]">STUDIO</span>
            </span>
            <h1 className="text-xl font-semibold mt-4 text-white">
              Protected Documentation
            </h1>
            <p className="text-[#A7B0C0] mt-2 text-sm">
              Enter the password to access this documentation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-[#10141D] border border-[#202635] rounded-lg text-white placeholder-[#5A6378] focus:outline-none focus:border-[#F97316] transition-colors"
                disabled={isLoading}
                autoFocus
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading || !password}
              className="w-full py-3 bg-gradient-to-r from-[#F97316] to-[#D946EF] text-white font-medium rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Verifying...' : 'Access Documentation'}
            </button>
          </form>

          <p className="text-center text-[#5A6378] text-xs mt-6">
            Need access?{' '}
            <a href="/#contact" className="text-[#F97316] hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    );
  }

  // Authenticated - show content
  return <>{children}</>;
}
