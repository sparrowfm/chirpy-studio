'use client';

import { useState } from 'react';

interface SubscribeButtonsProps {
  feedUrl: string;
}

interface PodcastApp {
  name: string;
  getUrl: (feedUrl: string) => string;
  icon: React.ReactNode;
  color: string;
}

const PODCAST_APPS: PodcastApp[] = [
  {
    name: 'Apple Podcasts',
    getUrl: (feed) => `podcast://${feed.replace(/^https?:\/\//, '')}`,
    color: '#D056F6',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3a7 7 0 110 14 7 7 0 010-14zm0 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm0 1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
      </svg>
    ),
  },
  {
    name: 'Overcast',
    getUrl: (feed) => `overcast://x-callback-url/add?url=${encodeURIComponent(feed)}`,
    color: '#FC7E0F',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
  {
    name: 'Pocket Casts',
    getUrl: (feed) => `pktc://subscribe/${feed.replace(/^https?:\/\//, '')}`,
    color: '#F43E37',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
      </svg>
    ),
  },
  {
    name: 'Castro',
    getUrl: (feed) => `castros://subscribe/${feed.replace(/^https?:\/\//, '')}`,
    color: '#00CCBF',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 110 12 6 6 0 010-12zm0 3a3 3 0 100 6 3 3 0 000-6z" />
      </svg>
    ),
  },
];

export function SubscribeButtons({ feedUrl }: SubscribeButtonsProps) {
  const [showCopied, setShowCopied] = useState(false);

  const handleCopyRSS = async () => {
    try {
      await navigator.clipboard.writeText(feedUrl);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy RSS URL:', error);
    }
  };

  if (!feedUrl) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Podcast App Buttons */}
      {PODCAST_APPS.map((app) => (
        <a
          key={app.name}
          href={app.getUrl(feedUrl)}
          className="group flex items-center gap-2 px-4 py-3 rounded-xl bg-[#10141D] border border-[#202635] hover:border-[#F97316]/30 transition-all duration-300 hover:shadow-lg"
          title={`Subscribe on ${app.name}`}
        >
          <span
            className="transition-transform duration-300 group-hover:scale-110"
            style={{ color: app.color }}
          >
            {app.icon}
          </span>
          <span className="text-sm font-medium text-white hidden sm:inline">
            {app.name}
          </span>
        </a>
      ))}

      {/* Copy RSS URL Button */}
      <button
        onClick={handleCopyRSS}
        className="relative flex items-center gap-2 px-4 py-3 rounded-xl bg-[#10141D] border border-[#202635] hover:border-[#F97316]/30 transition-all duration-300 hover:shadow-lg group"
        title="Copy RSS Feed URL"
      >
        <svg
          className="w-6 h-6 text-[#A7B0C0] group-hover:text-[#F97316] transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>
        <span className="text-sm font-medium text-white hidden sm:inline">
          {showCopied ? 'Copied!' : 'Copy RSS'}
        </span>

        {/* Copied Toast */}
        {showCopied && (
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-[#F97316] text-white text-xs font-medium whitespace-nowrap animate-fade-in-up">
            RSS URL copied!
          </span>
        )}
      </button>
    </div>
  );
}
