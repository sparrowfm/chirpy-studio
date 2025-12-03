import { Wordmark } from '@/components/Wordmark'
import Link from 'next/link'

export const metadata = {
  title: 'Creating Series | Chirpy Studio',
  description: 'Set up your podcast series with custom branding, voice, and style in Chirpy Studio',
}

export default function CreatingSeriesPage() {
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
            <span>Creating Series</span>
          </div>
          <h1 className="text-4xl font-black mb-4">
            <span style={{ color: '#F97316' }}>Creating Series</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl">
            A series is your podcast show—it defines the voice, style, and personality that your episodes will share. Set it up once, and every episode you create will feel consistent and on-brand.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* What is a Series */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            What is a Series?
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Think of a series as the container for your podcast. It includes:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Identity</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Your podcast&apos;s name, description, and artwork—what listeners see when they subscribe.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Voice</h3>
              <p className="text-sm text-[var(--text-muted)]">
                The AI voice that narrates your episodes. Each series can have its own distinct voice.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Writing Style</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Guidelines that shape how scripts are written—tone, structure, length, and personality.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Audio Style</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Preferences for music, sound effects, and pacing that give your episodes a consistent feel.
              </p>
            </div>
          </div>
        </section>

        {/* When to Create a New Series */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            When to Create a New Series
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Create a new series when you want a different:
          </p>
          <ul className="space-y-2 text-[var(--text-muted)] mb-6">
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Topic or theme:</strong> A meditation series vs. a news recap series</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Voice or persona:</strong> A calm narrator vs. an energetic host</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Target audience:</strong> Content for kids vs. professionals</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Format:</strong> Quick 3-minute episodes vs. deep 20-minute dives</span>
            </li>
          </ul>
          <div className="p-4 rounded-xl bg-[#F97316]/5 border border-[#F97316]/30">
            <p className="text-sm text-[var(--text-muted)]">
              <strong className="text-[var(--foreground)]">Example:</strong> You might have a &quot;Daily Tech News&quot; series with quick, punchy episodes and a separate &quot;Tech Deep Dives&quot; series with longer, more detailed explorations.
            </p>
          </div>
        </section>

        {/* Creating Your Series */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Creating Your Series
          </h2>

          {/* Step 1 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
              >
                1
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Start Series Creation
              </h3>
            </div>
            <div className="ml-14 space-y-4">
              <p className="text-[var(--text-muted)]">
                In the Studio, click the <strong>Create Series</strong> button in the welcome panel, or look for it in the series dropdown menu.
              </p>
              <p className="text-[var(--text-muted)]">
                The AI will guide you through the setup process with a conversation—you don&apos;t need to fill out a long form.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
              >
                2
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Describe Your Podcast
              </h3>
            </div>
            <div className="ml-14 space-y-4">
              <p className="text-[var(--text-muted)]">
                Tell the AI about your podcast. The more context you provide, the better it can help:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                  <p className="text-sm font-mono text-[var(--foreground)]">
                    &quot;I want to create a podcast about personal finance for people in their 20s. It should feel like advice from a smart friend, not a lecture.&quot;
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                  <p className="text-sm font-mono text-[var(--foreground)]">
                    &quot;Create a meditation podcast with 5-minute sessions. Calm, gentle, with ambient music throughout.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
              >
                3
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Choose Your Voice
              </h3>
            </div>
            <div className="ml-14 space-y-4">
              <p className="text-[var(--text-muted)]">
                Select the AI voice that will narrate your episodes. You can preview each voice before choosing.
              </p>
              <p className="text-[var(--text-muted)]">
                Consider:
              </p>
              <ul className="space-y-2 text-[var(--text-muted)]">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong className="text-[var(--foreground)]">Tone:</strong> Warm and conversational? Professional and authoritative?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong className="text-[var(--foreground)]">Energy:</strong> Calm and soothing? Upbeat and energetic?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong className="text-[var(--foreground)]">Match:</strong> Does the voice fit your audience and content?</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
              >
                4
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Set Your Style Preferences
              </h3>
            </div>
            <div className="ml-14 space-y-4">
              <p className="text-[var(--text-muted)]">
                The AI will ask about your preferences for:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">Episode Length</h4>
                  <p className="text-sm text-[var(--text-muted)]">
                    Quick bites (3-5 min), standard (10-15 min), or long-form (20+ min)?
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">Music Style</h4>
                  <p className="text-sm text-[var(--text-muted)]">
                    Ambient background, dramatic scoring, or minimal/no music?
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">Sound Effects</h4>
                  <p className="text-sm text-[var(--text-muted)]">
                    Rich and immersive, subtle accents, or voice-only?
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
                  <h4 className="font-semibold text-[var(--foreground)] mb-2">Pacing</h4>
                  <p className="text-sm text-[var(--text-muted)]">
                    Fast and punchy, measured and thoughtful, or slow and relaxing?
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shrink-0"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
              >
                5
              </div>
              <h3 className="text-xl font-semibold text-[var(--foreground)]">
                Save Your Series
              </h3>
            </div>
            <div className="ml-14 space-y-4">
              <p className="text-[var(--text-muted)]">
                Once you&apos;re happy with the setup, the AI saves your series. It immediately appears in your series dropdown, ready for episode creation.
              </p>
            </div>
          </div>
        </section>

        {/* Editing Series Settings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Editing Series Settings
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            You can adjust your series settings anytime:
          </p>
          <ol className="space-y-3 text-[var(--text-muted)] mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">1.</span>
              <span>Select your series from the dropdown</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">2.</span>
              <span>Click the <strong>Settings</strong> button (gear icon)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">3.</span>
              <span>Choose what to edit: Writing Prompt, Research Prompt, or Voice</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#F97316] font-semibold">4.</span>
              <span>Make your changes and save</span>
            </li>
          </ol>
          <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
            <p className="text-sm text-[var(--text-muted)] italic">
              Screenshot placeholder: Series settings panel
            </p>
          </div>
        </section>

        {/* Writing Prompt */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Understanding the Writing Prompt
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            The writing prompt is instructions that guide how the AI writes your scripts. It&apos;s the secret to consistent, on-brand episodes.
          </p>
          <p className="text-[var(--text-muted)] mb-4">
            A good writing prompt includes:
          </p>
          <ul className="space-y-2 text-[var(--text-muted)] mb-6">
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Tone guidelines:</strong> &quot;Friendly but not cheesy&quot; or &quot;Authoritative but accessible&quot;</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Structure preferences:</strong> &quot;Always start with a hook&quot; or &quot;End with a call to action&quot;</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Things to avoid:</strong> &quot;Don&apos;t use jargon&quot; or &quot;Avoid clichés&quot;</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span><strong className="text-[var(--foreground)]">Audience context:</strong> &quot;The audience is busy professionals who want quick takeaways&quot;</span>
            </li>
          </ul>
          <div className="p-4 rounded-xl bg-[#F97316]/5 border border-[#F97316]/30">
            <p className="text-sm text-[var(--foreground)] mb-2"><strong>Pro tip: The AI learns from you</strong></p>
            <p className="text-sm text-[var(--text-muted)]">
              When you revise scripts, the AI notices patterns in your feedback. If you keep asking for &quot;shorter sentences&quot; or &quot;more examples,&quot; it adds those preferences to your writing prompt automatically.
            </p>
          </div>
        </section>

        {/* Series Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Example Series Setups
          </h2>
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Daily News Briefing</h3>
              <ul className="text-sm text-[var(--text-muted)] space-y-1">
                <li><strong>Length:</strong> 5 minutes</li>
                <li><strong>Voice:</strong> Professional, clear, medium energy</li>
                <li><strong>Music:</strong> Subtle news-style bed</li>
                <li><strong>Style:</strong> Fast-paced, fact-focused, no opinions</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Bedtime Stories for Kids</h3>
              <ul className="text-sm text-[var(--text-muted)] space-y-1">
                <li><strong>Length:</strong> 10-15 minutes</li>
                <li><strong>Voice:</strong> Warm, gentle, expressive</li>
                <li><strong>Music:</strong> Soft, magical background music</li>
                <li><strong>Style:</strong> Slow pacing, simple vocabulary, calming tone</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">True Crime Documentary</h3>
              <ul className="text-sm text-[var(--text-muted)] space-y-1">
                <li><strong>Length:</strong> 20-30 minutes</li>
                <li><strong>Voice:</strong> Serious, investigative, measured</li>
                <li><strong>Music:</strong> Dramatic, tension-building</li>
                <li><strong>Style:</strong> Rich sound effects, cliffhangers, detailed narration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Next Steps
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/docs/studio/creating-episodes"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Create your first episode →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Now that your series is set up, start creating episodes.
              </p>
            </Link>
            <Link
              href="/docs/studio/getting-started"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Back to Getting Started →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Review the basics of using Chirpy Studio.
              </p>
            </Link>
          </div>
        </section>

        {/* Common Questions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Common Questions
          </h2>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Can I have multiple series?</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Yes! Create as many series as you need. Each one is independent with its own settings, voice, and episodes.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Can I change the voice later?</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Yes, you can change your series voice anytime in Settings. New episodes will use the new voice. Existing episodes keep their original voice.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">What if I want different voices in one episode?</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Multi-voice episodes (like interviews or dialogues) are coming soon. For now, each episode uses your series&apos; primary voice.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Can I delete a series?</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Yes, but be careful—deleting a series removes all its episodes too. You can archive a series instead to hide it without losing content.
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
