import Link from 'next/link';

interface NetworkCTAProps {
  variant?: 'full' | 'compact';
}

export function NetworkCTA({ variant = 'full' }: NetworkCTAProps) {
  if (variant === 'compact') {
    return (
      <section className="max-w-4xl mx-auto px-6 py-8">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#F97316]/10 to-[#D946EF]/10 border border-[#202635]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-white font-semibold">
                Want to create podcasts like this?
              </p>
              <p className="text-sm text-[#A7B0C0]">
                AI-powered production. Full creative control.
              </p>
            </div>
            <Link
              href="/#signup"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#F97316] to-[#D946EF] text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#F97316]/20 whitespace-nowrap"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center border-t border-[#202635]">
      {/* Decorative element */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-1 bg-gradient-to-r from-[#F97316] to-[#D946EF] rounded-full" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        What will{' '}
        <span className="bg-gradient-to-r from-[#F97316] to-[#D946EF] bg-clip-text text-transparent">
          you
        </span>{' '}
        create?
      </h2>

      <p className="text-[#A7B0C0] max-w-lg mx-auto mb-4">
        These podcasts were made with Chirpy Studio—AI-powered production that handles
        research, scripting, voice, and sound design automatically.
      </p>

      <p className="text-lg text-white font-medium mb-8">
        From idea to podcast in minutes.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/#signup"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#F97316] to-[#D946EF] text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#F97316]/20"
        >
          Join the Waitlist
        </Link>
        <Link
          href="/docs/mcp"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#202635] text-white font-semibold hover:border-[#F97316]/50 transition-colors"
        >
          Build with Our API
        </Link>
      </div>

      {/* Social proof hint */}
      <p className="text-sm text-[#A7B0C0] mt-8">
        Podcasters, brands, and publishers are already creating with Chirpy Studio.
      </p>
    </section>
  );
}
