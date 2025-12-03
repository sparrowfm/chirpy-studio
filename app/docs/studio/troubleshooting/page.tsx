import { Wordmark } from '@/components/Wordmark'
import Link from 'next/link'

export const metadata = {
  title: 'Troubleshooting | Chirpy Studio',
  description: 'Solve common issues and get help with Chirpy Studio',
}

export default function TroubleshootingPage() {
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
            <span>Troubleshooting</span>
          </div>
          <h1 className="text-4xl font-black mb-4">
            <span style={{ color: '#F97316' }}>Troubleshooting</span>
          </h1>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl">
            Running into issues? Find quick fixes for common problems or learn how to get help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Episode Generation Issues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Episode Generation Issues
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">My episode is stuck on &quot;Processing&quot;</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Episode generation usually takes 1-2 minutes. If it&apos;s been longer:
              </p>
              <ol className="text-sm text-[var(--text-muted)] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-semibold">1.</span>
                  <span><strong>Wait a few more minutes.</strong> Complex episodes with lots of sound design can take up to 5 minutes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-semibold">2.</span>
                  <span><strong>Refresh the page.</strong> Sometimes the status just needs to update.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-semibold">3.</span>
                  <span><strong>Check your episode in the library.</strong> Click away and come back—it might be done.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-semibold">4.</span>
                  <span><strong>Try submitting again.</strong> If it&apos;s truly stuck, you can resubmit the script.</span>
                </li>
              </ol>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">Episode shows &quot;Failed&quot; status</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                If your episode failed to generate:
              </p>
              <ol className="text-sm text-[var(--text-muted)] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-semibold">1.</span>
                  <span><strong>Check your script.</strong> Very long scripts or unusual characters can sometimes cause issues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-semibold">2.</span>
                  <span><strong>Try again.</strong> Temporary service issues happen—a retry often works.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-semibold">3.</span>
                  <span><strong>Simplify the script.</strong> If it keeps failing, try removing complex audio cues temporarily.</span>
                </li>
              </ol>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">Audio sounds wrong or cut off</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                If the generated audio doesn&apos;t sound right:
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Check your script punctuation.</strong> Missing periods or commas can affect pacing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Review audio cues.</strong> Conflicting or overlapping cues can cause issues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Adjust voice settings.</strong> If stability is too low, the voice may sound inconsistent.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Script Issues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Script & Writing Issues
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">AI isn&apos;t generating the script I want</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                If the AI&apos;s output doesn&apos;t match your expectations:
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Be more specific.</strong> &quot;Write about coffee&quot; gives different results than &quot;Write about the history of Ethiopian coffee culture.&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Research first.</strong> Use &quot;research [topic]&quot; to give the AI better source material.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Update your writing prompt.</strong> Check series settings—your writing prompt shapes all scripts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Use revision.</strong> Select text and ask for specific changes rather than regenerating everything.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">Script changes aren&apos;t saving</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Changes should auto-save after you stop typing:
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Wait a moment.</strong> There&apos;s a short delay before saving.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Check your connection.</strong> Saving requires an internet connection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Refresh and check.</strong> Sometimes the UI doesn&apos;t update, but changes are saved.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">AI revision isn&apos;t working</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                To use AI revision:
              </p>
              <ol className="text-sm text-[var(--text-muted)] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-semibold">1.</span>
                  <span><strong>Select text first.</strong> Click and drag to highlight what you want changed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-semibold">2.</span>
                  <span><strong>Look for the revision panel.</strong> It appears below the editor when text is selected.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-semibold">3.</span>
                  <span><strong>Type your request.</strong> Describe what change you want.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F97316] font-semibold">4.</span>
                  <span><strong>Click &quot;Revise with AI.&quot;</strong> The button activates after you type something.</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Audio Issues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Audio & Voice Issues
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">Voice sounds different than the preview</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Voice samples are short demos. Full episodes may sound slightly different because:
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span>Longer content has more natural variation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span>Your script&apos;s tone affects delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span>Voice settings (stability, similarity) affect output</span>
                </li>
              </ul>
              <p className="text-sm text-[var(--text-muted)] mt-3">
                <strong>Try:</strong> Increase stability in voice settings for more consistent sound.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">Music is too loud/quiet</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                Music levels are controlled by your sound design preset:
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Try a different preset.</strong> Meditation has quieter music than Fiction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Customize volume levels.</strong> In series settings, you can adjust music volume directly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Adjust ducking.</strong> Increase ducking amount to make voice clearer over music.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">No audio player appears</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                The audio player only shows when an episode is complete:
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Check the status badge.</strong> It should say &quot;Completed&quot; or &quot;TTS Completed.&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Wait for processing.</strong> If it says &quot;Processing,&quot; the audio isn&apos;t ready yet.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Refresh the page.</strong> Sometimes the player needs a refresh to appear.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Account & Access */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Account & Access Issues
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">Can&apos;t access the Studio</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                If you can&apos;t sign in or access features:
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Check your email.</strong> Make sure you&apos;re using the right account.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Clear browser cache.</strong> Sometimes old data causes login issues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Try another browser.</strong> Some browser extensions can interfere.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Contact support.</strong> If nothing works, reach out for help.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">My episodes/series are missing</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                If your content isn&apos;t showing:
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Check the series dropdown.</strong> Make sure you&apos;re viewing the right series.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Scroll the episode list.</strong> You may have more episodes than fit on screen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Search for it.</strong> Use the search box in the episode library.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Refresh the page.</strong> Sometimes the list needs to reload.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Publishing Issues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Publishing Issues
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">Episode not showing on Spotify/Apple</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                After publishing, it takes time for platforms to update:
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Wait 24 hours.</strong> Most platforms update within this time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Check your RSS feed.</strong> Verify the episode appears in your feed URL.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Validate your feed.</strong> Use the validate option to check for errors.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-3">Download isn&apos;t working</h3>
              <p className="text-sm text-[var(--text-muted)] mb-3">
                If you can&apos;t download your episode:
              </p>
              <ul className="text-sm text-[var(--text-muted)] space-y-2">
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Make sure it&apos;s complete.</strong> Only completed episodes have downloadable audio.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Try a different browser.</strong> Some browsers handle downloads differently.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#F97316' }}>•</span>
                  <span><strong>Check popup blockers.</strong> Downloads might be getting blocked.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* General Tips */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            General Tips
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Refresh often</h3>
              <p className="text-sm text-[var(--text-muted)]">
                When something seems stuck, a page refresh usually helps. Status updates and content changes may need a reload to appear.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Check your connection</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Most features need an internet connection. If things aren&apos;t working, make sure you&apos;re online.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Try again</h3>
              <p className="text-sm text-[var(--text-muted)]">
                Temporary issues happen. If something fails once, try it again—it often works the second time.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
              <h3 className="font-semibold text-[var(--foreground)] mb-2">Use modern browsers</h3>
              <p className="text-sm text-[var(--text-muted)]">
                For best results, use Chrome, Firefox, Safari, or Edge. Older browsers may have issues.
              </p>
            </div>
          </div>
        </section>

        {/* Getting Help */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#F97316' }}>
            Getting Help
          </h2>
          <p className="text-[var(--text-muted)] mb-4">
            Can&apos;t find the answer here? We&apos;re happy to help:
          </p>
          <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--border)]">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-[var(--foreground)] mb-1">Email Support</h3>
                <p className="text-sm text-[var(--text-muted)]">
                  Send us a description of your issue and we&apos;ll get back to you quickly.
                </p>
              </div>
              <a
                href="mailto:support@chirpy.studio"
                className="inline-block px-6 py-3 rounded-xl font-semibold text-white text-center whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #F97316 0%, #D946EF 100%)' }}
              >
                support@chirpy.studio
              </a>
            </div>
          </div>
          <p className="text-sm text-[var(--text-muted)] mt-4">
            When contacting support, include:
          </p>
          <ul className="text-sm text-[var(--text-muted)] space-y-1 mt-2">
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span>What you were trying to do</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span>What happened instead</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span>Any error messages you saw</span>
            </li>
            <li className="flex items-start gap-2">
              <span style={{ color: '#F97316' }}>•</span>
              <span>Your series/episode name (if relevant)</span>
            </li>
          </ul>
        </section>

        {/* Back to Docs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#D946EF' }}>
            Back to Documentation
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/docs/studio/getting-started"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Getting Started →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Create your first episode
              </p>
            </Link>
            <Link
              href="/docs/studio/creating-episodes"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                Creating Episodes →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Scripting and production
              </p>
            </Link>
            <Link
              href="/docs/studio"
              className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[#F97316] transition-colors group"
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-1 group-hover:text-[#F97316]">
                All Studio Docs →
              </h3>
              <p className="text-sm text-[var(--text-muted)]">
                Full documentation
              </p>
            </Link>
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
