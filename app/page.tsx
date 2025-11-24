import { Wordmark } from '@/components/Wordmark'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center space-y-8">
        <Wordmark className="justify-center" />

        <h1 className="text-4xl font-bold">
          <span style={{ color: '#F97316' }}>AI-Powered</span>{' '}
          <span style={{ color: '#D946EF' }}>Podcast Creation</span>
        </h1>

        <p className="text-xl text-[var(--text-muted)]">
          From research to final mix, Chirpy Studio orchestrates the complete podcast production pipeline.
        </p>

        <div className="flex gap-4 justify-center pt-8">
          <a
            href="/docs/mcp"
            className="px-6 py-3 rounded-xl font-medium text-white shadow-lg hover:shadow-xl transition-shadow"
            style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
          >
            MCP Documentation
          </a>
          <a
            href="https://studio.chirpy.studio"
            className="px-6 py-3 rounded-xl font-medium border border-border bg-card hover:bg-[var(--card-bg)] transition-colors"
          >
            Dashboard
          </a>
        </div>

        <div className="pt-16 text-sm text-[var(--text-muted)]">
          <p>Coming soon: API Documentation • Pricing • About Us</p>
        </div>
      </div>
    </div>
  )
}
