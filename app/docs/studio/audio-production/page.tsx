import { Wordmark } from '@/components/Wordmark'
import Link from 'next/link'

export const metadata = {
  title: 'Audio Production | Chirpy Studio',
  description: 'Add music, sound effects, and professional mixing to your podcast episodes',
}

export default function AudioProductionPage() {
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
            <span>Audio Production</span>
          </div>
          <h1 className="text-4xl font-black mb-4">
            <span style={{ color: '#F97316' }}>Audio Production</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl">
            Transform your script into a polished production with music, sound effects, and professional mixing—all handled automatically.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            How Audio Production Works
          </h2>
          <p className="text-[var(--text-muted)] mb-6">
            When you submit your script, Chirpy Studio doesn&apos;t just generate voice—it creates a complete production:
          </p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] font-semibold shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)] mb-1">Voice Generation</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Your narration is converted to natural-sounding speech with precise word timing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] font-semibold shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)] mb-1">Sound Design</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Music and sound effects are selected based on your script&apos;s cues and mood.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] font-semibold shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)] mb-1">Asset Gathering</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  The system finds the right audio files—music tracks, ambient sounds, effects.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-[#F97316]/20 flex items-center justify-center text-[#F97316] font-semibold shrink-0">
                4
              </div>
              <div>
                <h3 className="font-semibold text-[var(--foreground)] mb-1">Mixing & Mastering</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Everything is combined professionally—music ducks under speech, levels are balanced, and the final mix is mastered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Music and SFX Cues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Music and Sound Effect Cues
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Your script can include cues that tell the system what audio to add. The AI adds these automatically, but you can edit them:
          </p>
          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Music Cues</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Describe the music you want at specific moments:
              </p>
              <div className="space-y-2 font-mono text-sm">
                <div className="p-2 rounded bg-[var(--background)] text-[#D946EF]">
                  **MUSIC: Uplifting orchestral theme**
                </div>
                <div className="p-2 rounded bg-[var(--background)] text-[#D946EF]">
                  **MUSIC: Soft piano, contemplative mood**
                </div>
                <div className="p-2 rounded bg-[var(--background)] text-[#D946EF]">
                  **MUSIC: Tense, building suspense**
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Sound Effect Cues</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Add specific sounds to enhance your storytelling:
              </p>
              <div className="space-y-2 font-mono text-sm">
                <div className="p-2 rounded bg-[var(--background)] text-[#D946EF]">
                  **SFX: Door creaking open**
                </div>
                <div className="p-2 rounded bg-[var(--background)] text-[#D946EF]">
                  **SFX: Crowd murmuring**
                </div>
                <div className="p-2 rounded bg-[var(--background)] text-[#D946EF]">
                  **SFX: Rain on window**
                </div>
              </div>
            </div>
          </div>
          <p className="text-[var(--text-muted)]">
            The more descriptive your cues, the better the system can match your vision. Instead of &quot;sad music,&quot; try &quot;melancholic cello, slow and intimate.&quot;
          </p>
        </section>

        {/* Sound Design Presets */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Sound Design Presets
          </h2>
          <p className="text-[var(--text-muted)] mb-6">
            Each series has a sound design preset that defines its overall audio style. Choose the one that best fits your content:
          </p>
          <div className="space-y-4">
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎬</span>
                <h3 className="font-semibold text-[var(--foreground)]">Documentary</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Music at key moments only, moderate sound effects. Clear, informative delivery.
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Best for: News, educational content, explainers, journalism
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📖</span>
                <h3 className="font-semibold text-[var(--foreground)]">Fiction</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Continuous music beds, rich sound effects. Immersive, cinematic feel.
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Best for: Stories, drama, narrative podcasts, audio fiction
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🧘</span>
                <h3 className="font-semibold text-[var(--foreground)]">Meditation</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Sparse, quiet music. Minimal effects with breathing sounds. Extra soft and calming.
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Best for: Guided meditation, breathing exercises, sleep content, wellness
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎙️</span>
                <h3 className="font-semibold text-[var(--foreground)]">Interview</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Music at key moments, light effects. Focus on dialogue clarity.
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Best for: Conversations, Q&A content, discussion-based shows
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📚</span>
                <h3 className="font-semibold text-[var(--foreground)]">Educational</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Moderate music and effects. Engaging but not distracting.
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                Best for: Learning content, tutorials, how-to guides, courses
              </p>
            </div>
          </div>
        </section>

        {/* Customization */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Customizing Sound Design
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Presets are a starting point. You can customize individual settings for more control:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Music Policy</h3>
              <ul className="text-sm text-[var(--text-muted)] space-y-1">
                <li>• Continuous or at key moments</li>
                <li>• Allow music under dialogue</li>
                <li>• Density (sparse to rich)</li>
                <li>• Allow vocal music or not</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Volume Levels</h3>
              <ul className="text-sm text-[var(--text-muted)] space-y-1">
                <li>• Music volume</li>
                <li>• Ambient/atmosphere volume</li>
                <li>• Sound effects volume</li>
                <li>• How much music ducks for speech</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Sound Palette</h3>
              <ul className="text-sm text-[var(--text-muted)] space-y-1">
                <li>• Preferred instruments</li>
                <li>• Preferred SFX types</li>
                <li>• Styles to avoid</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Special Features</h3>
              <ul className="text-sm text-[var(--text-muted)] space-y-1">
                <li>• Include stingers/hits</li>
                <li>• Breathing SFX (meditation)</li>
                <li>• Additional cues beyond script</li>
              </ul>
            </div>
          </div>
          <p className="text-[var(--text-muted)]">
            Most users start with a preset and only customize if something doesn&apos;t sound right.
          </p>
        </section>

        {/* Ducking */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Understanding Ducking
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            &quot;Ducking&quot; is when background audio automatically gets quieter when someone speaks, then returns to normal during pauses. This ensures your voice is always clear.
          </p>
          <div className="p-4 rounded-xl bg-[#F97316]/5 border border-[#F97316]/30 mb-4">
            <p className="text-sm text-[var(--text-muted)]">
              <strong className="text-[var(--foreground)]">Example:</strong> Music plays at full volume during your intro. When narration starts, the music smoothly dips down. When you pause, it comes back up slightly. This happens automatically throughout your episode.
            </p>
          </div>
          <p className="text-[var(--text-muted)]">
            Each preset has ducking settings optimized for that style. Meditation content ducks more aggressively; fiction keeps music more present.
          </p>
        </section>

        {/* Quality Settings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Audio Quality
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Your final episode is professionally mastered with industry-standard settings:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] text-center">
              <div className="text-2xl font-bold text-[#F97316] mb-1">-16 LUFS</div>
              <p className="text-sm text-[var(--text-muted)]">Loudness target (podcast standard)</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] text-center">
              <div className="text-2xl font-bold text-[#F97316] mb-1">44.1 kHz</div>
              <p className="text-sm text-[var(--text-muted)]">Sample rate</p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] text-center">
              <div className="text-2xl font-bold text-[#F97316] mb-1">128+ kbps</div>
              <p className="text-sm text-[var(--text-muted)]">MP3 bitrate</p>
            </div>
          </div>
          <p className="text-sm text-[var(--text-muted)] mt-4">
            These settings meet requirements for all major podcast platforms including Apple Podcasts, Spotify, and Google Podcasts.
          </p>
        </section>

        {/* Production Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            The Production Process
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            When you click &quot;Submit to TTS,&quot; here&apos;s what happens:
          </p>
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 rounded text-xs font-semibold bg-yellow-500/20 text-yellow-400">Step 1</span>
                <h3 className="font-semibold text-[var(--foreground)]">Generate Voice</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                Your script becomes spoken audio with precise word-by-word timing data.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 rounded text-xs font-semibold bg-yellow-500/20 text-yellow-400">Step 2</span>
                <h3 className="font-semibold text-[var(--foreground)]">Generate Sound Design</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                The system analyzes your script and creates a detailed plan for music and SFX placement.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 rounded text-xs font-semibold bg-yellow-500/20 text-yellow-400">Step 3</span>
                <h3 className="font-semibold text-[var(--foreground)]">Gather Assets</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                Music tracks and sound effects are selected and downloaded based on your cues and preset.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 rounded text-xs font-semibold bg-green-500/20 text-green-400">Final</span>
                <h3 className="font-semibold text-[var(--foreground)]">Mix & Master</h3>
              </div>
              <p className="text-sm text-[var(--text-muted)]">
                Everything is combined, levels are balanced, ducking is applied, and the final mix is mastered to broadcast standards.
              </p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Tips for Great Audio
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Be specific with cues</h3>
              <p className="text-sm text-[var(--text-muted)]">
                &quot;Mysterious ambient music&quot; gets better results than just &quot;music.&quot; Describe the mood, instruments, and energy you want.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Less is often more</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Don&apos;t overload your script with cues. Well-placed music at key moments is more effective than constant audio.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Match preset to content</h3>
              <p className="text-sm text-[var(--text-muted)]">
                The right preset makes a big difference. Documentary for news, Fiction for stories, Meditation for wellness.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Listen before publishing</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Always preview your episode. If something sounds off, edit your script cues and regenerate.
              </p>
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
              href="/docs/studio/publishing"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Publishing →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Download, share, and distribute your finished episodes.
              </p>
            </Link>
            <Link
              href="/docs/studio/voices"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Voices →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Choose and customize the voice for your episodes.
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
