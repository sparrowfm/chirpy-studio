import { Wordmark } from '@/components/Wordmark'
import Link from 'next/link'

export const metadata = {
  title: 'Voices | Chirpy Studio',
  description: 'Choose and customize AI voices for your podcast episodes in Chirpy Studio',
}

export default function VoicesPage() {
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
            <span>Voices</span>
          </div>
          <h1 className="text-4xl font-black mb-4">
            <span style={{ color: '#F97316' }}>Voices</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl">
            Your podcast&apos;s voice is its personality. Choose from professional AI voices and fine-tune them to match your content perfectly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Choosing a Voice */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Choosing a Voice
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Each series has a primary voice that narrates all its episodes. When setting up a series or editing its settings, you&apos;ll see the voice selector.
          </p>
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Browse Voices</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Scroll through the voice library to see available options. Each voice shows its name, category, and a brief description.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Search Voices</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Use the search box to find voices by name or characteristic. Try searching for &quot;warm,&quot; &quot;professional,&quot; or &quot;energetic.&quot;
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Preview Voices</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Click the play button next to any voice to hear a sample. This helps you find the right match for your content.
              </p>
            </div>
          </div>
        </section>

        {/* What to Consider */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Finding the Right Voice
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            The best voice depends on your content and audience. Consider:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Tone</h3>
              <p className="text-sm text-[var(--text-muted)]">
                A news podcast needs a clear, authoritative voice. A meditation podcast needs something calm and soothing.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Energy</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Match the voice energy to your content. Upbeat for entertainment, measured for education, gentle for wellness.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Audience</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Think about who&apos;s listening. A kids&apos; podcast might need a friendly, expressive voice. A business podcast might need something professional.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Length</h3>
              <p className="text-sm text-[var(--text-muted)]">
                For longer episodes, choose a voice that&apos;s pleasant to listen to over time. Some voices work better in short bursts.
              </p>
            </div>
          </div>
        </section>

        {/* Voice Settings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Voice Settings
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            After selecting a voice, you can fine-tune how it sounds. These settings let you adjust the voice to better match your needs.
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Stability</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Controls how consistent the voice sounds throughout the episode.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex-1">
                  <div className="flex justify-between text-[var(--text-muted)] mb-1">
                    <span>Lower</span>
                    <span>Higher</span>
                  </div>
                  <div className="h-2 rounded-full bg-gradient-to-r from-[#F97316] to-[#D946EF]"></div>
                </div>
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-2">
                Lower = more expressive and varied. Higher = more consistent and predictable.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Similarity</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                How closely the output matches the original voice sample.
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Higher values stay truer to the voice&apos;s natural sound. Lower values allow more variation.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Style</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Adjusts how much the voice emphasizes its natural speaking style.
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Higher values amplify the voice&apos;s unique characteristics. Keep it low for neutral delivery.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Speaker Boost</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Optimizes the voice for conversational content.
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Turn this on for dialogue-heavy content or interview-style podcasts.
              </p>
            </div>
          </div>
        </section>

        {/* Meditation Mode */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Meditation Mode
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Creating guided meditations or breathing exercises? Meditation Mode is designed specifically for this.
          </p>
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] mb-4">
            <h3 className="font-semibold text-[var(--foreground)] mb-2">What it does</h3>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              <li className="flex items-start gap-2">
                <span style={{ color: '#F97316' }}>•</span>
                <span>Adds precise pauses for breathing exercises</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F97316' }}>•</span>
                <span>Creates natural silence between guidance cues</span>
              </li>
              <li className="flex items-start gap-2">
                <span style={{ color: '#F97316' }}>•</span>
                <span>Optimizes pacing for relaxation content</span>
              </li>
            </ul>
          </div>
          <p className="text-[var(--text-muted)]">
            Enable Meditation Mode in your series voice settings when creating wellness or mindfulness content.
          </p>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Voice Tips
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Test with real content</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Preview voices with your actual script, not just the sample. How a voice reads your content matters more than how it sounds in isolation.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Start with defaults</h3>
              <p className="text-sm text-[var(--text-muted)]">
                The default voice settings work well for most content. Only adjust them if something sounds off.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Consistency matters</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Once you pick a voice for a series, stick with it. Your listeners will come to recognize and expect that voice.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Match voice to writing</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Your script&apos;s tone should match your voice choice. A casual script with a formal voice (or vice versa) can feel awkward.
              </p>
            </div>
          </div>
        </section>

        {/* Changing Voices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Changing Your Voice
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            You can change your series voice anytime in Settings:
          </p>
          <ol className="space-y-2 text-[var(--text-muted)] mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">1.</span>
              <span>Select your series from the dropdown</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">2.</span>
              <span>Click the Settings button (gear icon)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">3.</span>
              <span>Find the voice selection section</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">4.</span>
              <span>Choose a new voice and adjust settings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">5.</span>
              <span>Save your changes</span>
            </li>
          </ol>
          <div className="p-4 rounded-xl bg-[#F97316]/5 border border-[#F97316]/30">
            <p className="text-sm text-[var(--text-muted)]">
              <strong className="text-[var(--foreground)]">Note:</strong> Changing the voice only affects future episodes. Existing episodes keep their original voice.
            </p>
          </div>
        </section>

        {/* Common Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Common Questions
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Can I use different voices in one episode?</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Multi-voice episodes (like conversations or interviews) are coming soon. For now, each episode uses your series&apos; primary voice.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Can I clone my own voice?</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Custom voice cloning is on our roadmap. For now, choose from our library of professional voices.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Why does my voice sound different than the preview?</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Voice samples are short demos. Longer content may sound slightly different due to natural variation. Adjust stability settings if consistency is important.
              </p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Next Steps
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/docs/studio/audio-production"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Audio Production →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Add music, sound effects, and polish your episodes.
              </p>
            </Link>
            <Link
              href="/docs/studio/creating-series"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Creating Series →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Set up a new series with your chosen voice.
              </p>
            </Link>
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
