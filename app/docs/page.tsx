import { Wordmark } from '@/components/Wordmark';
import Link from 'next/link';

export const metadata = {
  title: 'Documentation | Chirpy Studio',
  description: 'Chirpy Studio documentation - API reference and MCP tools guide',
};

export default function DocsIndexPage() {
  return (
    <div className="min-h-screen bg-[#0B0E14]">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-[#202635] bg-[#0B0E14]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Wordmark />
          </Link>
          <Link
            href="/"
            className="text-sm text-[#A7B0C0] hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Documentation</span>
        </h1>
        <p className="text-[#A7B0C0] text-lg mb-12">
          Learn how to integrate Chirpy Studio into your applications.
        </p>

        {/* Documentation Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* MCP Tools */}
          <Link
            href="/docs/mcp"
            className="group gradient-border p-6 hover:bg-[#10141D]/80 transition-colors"
          >
            <div className="text-3xl mb-4">🔧</div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-[#F97316] transition-colors">
              MCP Tools
            </h2>
            <p className="text-[#A7B0C0] text-sm mb-4">
              Model Context Protocol integration for Claude Code and Claude Desktop.
              Create podcast episodes using natural language.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#F97316]">
              <span>View Documentation</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>

          {/* REST API */}
          <Link
            href="/docs/api"
            className="group gradient-border p-6 hover:bg-[#10141D]/80 transition-colors"
          >
            <div className="text-3xl mb-4">⚡</div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-[#D946EF] transition-colors">
              REST API
            </h2>
            <p className="text-[#A7B0C0] text-sm mb-4">
              Direct API access for custom integrations. Full control over the
              podcast creation pipeline.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#D946EF]">
              <span>View Documentation</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        </div>

        {/* Coming Soon */}
        <div className="mt-12 p-6 rounded-xl border border-[#202635] bg-[#10141D]/50">
          <h3 className="font-semibold mb-2">More documentation coming soon</h3>
          <p className="text-[#A7B0C0] text-sm">
            We&apos;re working on additional guides, tutorials, and examples.
            <Link href="/#signup" className="text-[#F97316] hover:underline ml-1">
              Join the waitlist
            </Link> to be notified when new documentation is available.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#202635] mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#A7B0C0]">
            <Wordmark />
            <p>&copy; 2025 Chirpy Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
