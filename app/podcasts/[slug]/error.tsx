'use client';

import Link from 'next/link';
import { Wordmark } from '@/components/Wordmark';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen bg-[#0B0E14]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#202635] bg-[#0B0E14]/90 backdrop-blur-lg">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Wordmark />
          </Link>
          <Link
            href="/"
            className="text-sm text-[#A7B0C0] hover:text-white transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>

      {/* Error Content */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
        <div className="text-center max-w-md">
          {/* Error Icon */}
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#F97316]/20 to-[#D946EF]/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-[#F97316]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-white mb-4">
            Something went wrong
          </h1>

          <p className="text-[#A7B0C0] mb-8">
            We couldn&apos;t load this podcast. This might be a temporary issue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F97316]/20"
              style={{
                background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)',
              }}
            >
              Try Again
            </button>

            <Link
              href="/"
              className="px-6 py-3 rounded-xl font-semibold text-white border border-[#202635] hover:border-[#F97316]/30 transition-colors"
            >
              Go Home
            </Link>
          </div>

          {/* Error Details (dev only) */}
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-8 text-left">
              <summary className="text-sm text-[#A7B0C0] cursor-pointer hover:text-white">
                Error details
              </summary>
              <pre className="mt-2 p-4 rounded-lg bg-[#10141D] border border-[#202635] text-xs text-[#A7B0C0] overflow-auto">
                {error.message}
                {error.digest && `\nDigest: ${error.digest}`}
              </pre>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}
