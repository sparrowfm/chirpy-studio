import Link from 'next/link';
import { Wordmark } from '@/components/Wordmark';

export default function NotFound() {
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

      {/* Not Found Content */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
        <div className="text-center max-w-md">
          {/* 404 Icon */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#F97316]/20 to-[#D946EF]/20 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-[#F97316]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            Podcast Not Found
          </h1>

          <p className="text-[#A7B0C0] mb-8">
            This podcast doesn&apos;t exist or isn&apos;t available yet.
            Check the URL or explore our other content.
          </p>

          <Link
            href="/"
            className="inline-block px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F97316]/20"
            style={{
              background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)',
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
