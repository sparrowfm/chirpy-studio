import { Wordmark } from '@/components/Wordmark'
import Link from 'next/link'

export const metadata = {
  title: 'Getting Started | Chirpy Studio',
  description: 'Create your first podcast episode in about 5 minutes with Chirpy Studio',
}

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-[var(--border)] bg-[var(--card-bg)] backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Wordmark />
          </Link>
          <Link
            href="/docs/studio"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors"
          >
            ← Studio Docs
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-[var(--border)] bg-gradient-to-br from-[var(--background)] to-[var(--card-bg)]">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-sm text-[var(--text-muted)] mb-4">
            <Link href="/docs/studio" className="hover:text-[#F97316]">Studio</Link>
            <span className="mx-2">/</span>
            <span>Getting Started</span>
          </div>
          <h1 className="text-4xl font-black mb-4">
            <span style={{ color: '#F97316' }}>Create Your First Episode</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl">
            Go from idea to finished podcast episode in about 5 minutes. No recording equipment, editing software, or technical skills required.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* What You'll Create */}
        <section className="mb-12 p-6 rounded-2xl border border-[#F97316]/30 bg-[#F97316]/5">
          <h2 className="font-semibold text-[var(--foreground)] mb-2">What you&apos;ll create</h2>
          <p className="text-[var(--text-muted)]">
            By the end of this guide, you&apos;ll have a complete podcast episode with professional narration,
            background music, and sound effects—ready to share or publish.
          </p>
        </section>

        {/* Step 1 */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl shrink-0"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
            >
              1
            </div>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Open the Studio
            </h2>
          </div>
          <div className="ml-16 space-y-4">
            <p className="text-[var(--text-muted)]">
              Open the Studio and sign in with your account. The Studio is currently in private beta—<Link href="/#signup" className="text-[#F97316] hover:underline">join the waitlist</Link> to get access.
            </p>
            <p className="text-[var(--text-muted)]">
              You&apos;ll see three panels:
            </p>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li className="flex items-start gap-2">
                <span style={{ color: '#F97316' }}>•</span>
                <span><strong className="text-[var(--foreground)]">Left:</strong> Your episode library—all your past episodes live here</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F97316' }}>•</span>
                <span><strong className="text-[var(--foreground)]">Middle:</strong> Chat with your AI co-creator</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F97316' }}>•</span>
                <span><strong className="text-[var(--foreground)]">Right:</strong> Your script editor</span>
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <p className="text-sm text-[var(--text-muted)] italic">
                Screenshot placeholder: Studio interface overview
              </p>
            </div>
          </div>
        </section>

        {/* Step 2 */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl shrink-0"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
            >
              2
            </div>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Choose a Series
            </h2>
          </div>
          <div className="ml-16 space-y-4">
            <p className="text-[var(--text-muted)]">
              Use the dropdown at the top to select which podcast series you&apos;re creating for. Each series has its own style, voice, and personality.
            </p>
            <p className="text-[var(--text-muted)]">
              If you&apos;re brand new, you might see a demo series to try. Later, you&apos;ll <Link href="/docs/studio/creating-series" className="text-[#F97316] hover:underline">create your own series</Link> with your preferred settings.
            </p>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <p className="text-sm text-[var(--text-muted)] italic">
                Screenshot placeholder: Series dropdown selector
              </p>
            </div>
          </div>
        </section>

        {/* Step 3 */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl shrink-0"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
            >
              3
            </div>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Describe Your Episode
            </h2>
          </div>
          <div className="ml-16 space-y-4">
            <p className="text-[var(--text-muted)]">
              In the chat panel, tell the AI what you want to create. Be as specific or as open-ended as you like:
            </p>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                <p className="text-sm font-mono text-[var(--foreground)]">
                  &quot;Write me a script about the history of coffee&quot;
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                <p className="text-sm font-mono text-[var(--foreground)]">
                  &quot;Create an episode explaining how black holes work, make it fun and accessible&quot;
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                <p className="text-sm font-mono text-[var(--foreground)]">
                  &quot;Turn this article into a podcast episode: [paste URL or text]&quot;
                </p>
              </div>
            </div>
            <p className="text-[var(--text-muted)]">
              The AI will research your topic (if needed) and write a complete script with narration, music cues, and sound effects.
            </p>
          </div>
        </section>

        {/* Step 4 */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl shrink-0"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
            >
              4
            </div>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Review Your Script
            </h2>
          </div>
          <div className="ml-16 space-y-4">
            <p className="text-[var(--text-muted)]">
              Your script appears in the right panel. Take a moment to read through it. You&apos;ll see:
            </p>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li className="flex items-start gap-2">
                <span style={{ color: '#F97316' }}>•</span>
                <span><strong className="text-[var(--foreground)]">Narration:</strong> The spoken content of your episode</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#D946EF' }}>•</span>
                <span><strong className="text-[var(--foreground)]">MUSIC:</strong> Cues for background music (marked in bold)</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#D946EF' }}>•</span>
                <span><strong className="text-[var(--foreground)]">SFX:</strong> Sound effects to enhance the storytelling</span>
              </li>
            </ul>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <p className="text-sm text-[var(--text-muted)] italic">
                Screenshot placeholder: Script editor with sample script
              </p>
            </div>
          </div>
        </section>

        {/* Step 5 */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl shrink-0"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
            >
              5
            </div>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Make Changes (Optional)
            </h2>
          </div>
          <div className="ml-16 space-y-4">
            <p className="text-[var(--text-muted)]">
              Happy with the script? Skip to the next step. Want to make changes? You have two options:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--foreground)] mb-2">Edit it yourself</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Click anywhere in the script and type. Your changes save automatically.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                <h3 className="font-semibold text-[var(--foreground)] mb-2">Ask the AI to revise</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Select text you want changed, describe what you want, and click <strong>Revise with AI</strong>.
                </p>
              </div>
            </div>
            <p className="text-[var(--text-muted)]">
              Examples of revision requests:
            </p>
            <ul className="space-y-1 text-sm text-[var(--text-muted)]">
              <li>&quot;Make this section more dramatic&quot;</li>
              <li>&quot;Simplify this explanation&quot;</li>
              <li>&quot;Add a joke here&quot;</li>
              <li>&quot;Make the ending more impactful&quot;</li>
            </ul>
          </div>
        </section>

        {/* Step 6 */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl shrink-0"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
            >
              6
            </div>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Generate Your Episode
            </h2>
          </div>
          <div className="ml-16 space-y-4">
            <p className="text-[var(--text-muted)]">
              When your script is ready, click <strong>Submit to TTS</strong> (text-to-speech).
            </p>
            <p className="text-[var(--text-muted)]">
              Behind the scenes, Chirpy Studio:
            </p>
            <ol className="space-y-2 text-[var(--text-muted)]">
              <li className="flex items-start gap-2">
                <span className="text-[#F97316] font-semibold">1.</span>
                <span>Converts your narration to natural-sounding speech</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F97316] font-semibold">2.</span>
                <span>Selects music that matches your script&apos;s mood</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F97316] font-semibold">3.</span>
                <span>Finds and places sound effects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#F97316] font-semibold">4.</span>
                <span>Mixes everything together professionally</span>
              </li>
            </ol>
            <p className="text-[var(--text-muted)]">
              This takes 1-2 minutes. You&apos;ll see a progress indicator while it works.
            </p>
          </div>
        </section>

        {/* Step 7 */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-xl shrink-0"
              style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
            >
              7
            </div>
            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Listen and Download
            </h2>
          </div>
          <div className="ml-16 space-y-4">
            <p className="text-[var(--text-muted)]">
              When your episode is ready, an audio player appears at the bottom of the screen. Press play to listen!
            </p>
            <p className="text-[var(--text-muted)]">
              From here you can:
            </p>
            <ul className="space-y-2 text-[var(--text-muted)]">
              <li className="flex items-start gap-2">
                <span style={{ color: '#F97316' }}>•</span>
                <span>Download the MP3 file</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F97316' }}>•</span>
                <span>Share a link to your episode</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F97316' }}>•</span>
                <span>Publish to your podcast feed</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Success Box */}
        <section className="mb-12 p-6 rounded-2xl border-2 border-[#10B981] bg-[#10B981]/5">
          <h2 className="font-bold text-xl text-[#10B981] mb-2">You did it!</h2>
          <p className="text-[var(--text-muted)]">
            You just created a complete podcast episode with AI. Your episode is saved in your library—you can come back to it anytime.
          </p>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Next Steps
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/docs/studio/creating-series"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Create your own series →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Set up a podcast with your preferred voice, style, and branding.
              </p>
            </Link>
            <Link
              href="/docs/studio/creating-episodes"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Learn more about episodes →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Research topics, use different sources, and advanced editing.
              </p>
            </Link>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Tips for Great Episodes
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Be specific</h3>
              <p className="text-sm text-[var(--text-muted)]">
                &quot;Write about coffee&quot; is okay. &quot;Write about how Ethiopian coffee farmers are adapting to climate change&quot; is better.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Use research</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Type &quot;research [topic]&quot; before writing your script. The AI will gather facts and sources to make your episode more accurate.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Iterate</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Your first draft doesn&apos;t have to be perfect. Select sections and ask for revisions until it sounds right.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Listen before publishing</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Always preview your episode. Sometimes things that read well don&apos;t sound right when spoken aloud.
              </p>
            </div>
          </div>
        </section>

        {/* Need Help */}
        <section className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border)]">
          <h2 className="font-semibold text-[var(--foreground)] mb-2">Need help?</h2>
          <p className="text-[var(--text-muted)]">
            If you get stuck or have questions, reach out at{' '}
            <a href="mailto:support@chirpy.studio" className="text-[#F97316] hover:underline">
              support@chirpy.studio
            </a>
          </p>
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
