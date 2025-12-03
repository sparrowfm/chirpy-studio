import { Wordmark } from '@/components/Wordmark'
import Link from 'next/link'

export const metadata = {
  title: 'Studio Console | Chirpy Studio',
  description: 'Learn how to create podcasts with Chirpy Studio - your AI-powered audio storytelling platform',
}

export default function StudioDocsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Wordmark />
          </Link>
          <Link
            href="/docs"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            ← All Docs
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-[var(--border)] bg-gradient-to-br from-[var(--background)] to-[var(--card-bg)]">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-black mb-6">
            <span style={{ color: '#F97316' }}>Studio Console</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-4">
            Your creative hub for AI-powered podcast production.
          </p>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-8">
            Create professional podcasts with an AI co-creator—from idea to finished episode.
          </p>
          <Link
            href="/docs/studio/getting-started"
            className="inline-block px-6 py-3 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
            style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Quick Links */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#F97316' }}>
            Guides
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/docs/studio/getting-started"
              className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-2 group-hover:text-[#F97316] transition-colors">
                    Getting Started
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    Create your first podcast episode in about 5 minutes. No technical skills required.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/docs/studio/creating-series"
              className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">📚</div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-2 group-hover:text-[#F97316] transition-colors">
                    Creating Series
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    Set up your podcast show with custom branding, voice, and style—your AI learns your preferences.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/docs/studio/creating-episodes"
              className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎙️</div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-2 group-hover:text-[#F97316] transition-colors">
                    Creating Episodes
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    Turn ideas into finished episodes—write scripts, add music, and generate professional audio.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/docs/studio/voices"
              className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎤</div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-2 group-hover:text-[#F97316] transition-colors">
                    Voices
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    Choose and customize AI voices for your podcast narration.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/docs/studio/audio-production"
              className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎵</div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-2 group-hover:text-[#F97316] transition-colors">
                    Audio Production
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    Add music, sound effects, and professional mixing to your episodes.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/docs/studio/publishing"
              className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">📡</div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-2 group-hover:text-[#F97316] transition-colors">
                    Publishing
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    Download, share, and distribute your episodes to podcast platforms.
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/docs/studio/troubleshooting"
              className="bg-[var(--card-bg)] rounded-2xl p-6 border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">🔧</div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-2 group-hover:text-[#F97316] transition-colors">
                    Troubleshooting
                  </h3>
                  <p className="text-sm text-[var(--text-muted)]">
                    Solve common issues and get help when you&apos;re stuck.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* What You Can Create */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#D946EF' }}>
            What You Can Create
          </h2>
          <div className="space-y-4 text-[var(--text-muted)]">
            <p>
              Chirpy Studio handles the technical work so you can focus on telling great stories:
            </p>
            <ul className="grid md:grid-cols-2 gap-3">
              {[
                'Daily news and current events podcasts',
                'Educational content and explainers',
                'Meditation and wellness audio',
                'Fiction and narrative storytelling',
                'Business and thought leadership',
                'Blog-to-podcast conversions',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span style={{ color: '#F97316' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#F97316' }}>
            How It Works
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
              >
                1
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)] mb-1">Tell the AI what you want</h3>
                <p className="text-[var(--text-muted)]">
                  Describe your episode idea in plain language—a topic, a story angle, or paste in content you want to adapt.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
              >
                2
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)] mb-1">Review and refine</h3>
                <p className="text-[var(--text-muted)]">
                  The AI creates a script with narration, music cues, and sound effects. Edit it yourself or ask the AI to make changes.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
              >
                3
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)] mb-1">Generate your episode</h3>
                <p className="text-[var(--text-muted)]">
                  Click a button and your script becomes a fully produced podcast episode—professional voice, music, and all.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-muted)]">
            <Wordmark />
            <p>&copy; 2025 Chirpy Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
