import Link from 'next/link';

export function NetworkCTA() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center border-t border-[#202635]">
      {/* Decorative element */}
      <div className="flex justify-center mb-6">
        <div className="w-12 h-1 bg-gradient-to-r from-[#F97316] to-[#D946EF] rounded-full" />
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
        Made with{' '}
        <span className="bg-gradient-to-r from-[#F97316] to-[#D946EF] bg-clip-text text-transparent">
          Chirpy Studio
        </span>
      </h2>

      <p className="text-[#A7B0C0] max-w-lg mx-auto mb-8">
        Create premium, personalized podcast content at scale with AI-powered automation.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-[#F97316] to-[#D946EF] text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#F97316]/20"
        >
          Learn More
        </Link>
        <Link
          href="/docs/mcp"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#202635] text-white font-semibold hover:border-[#F97316]/50 transition-colors"
        >
          View Documentation
        </Link>
      </div>
    </section>
  );
}
